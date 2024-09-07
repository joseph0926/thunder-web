import { JWT_TOKEN } from "@/server/config";
import log from "@/server/log";
import {
  createNotificationGroup,
  getAllNotificationGroups,
} from "@/services/notification.service";
import {
  createNewUser,
  getUserByProp,
  getUserByUsernameOrEmail,
} from "@/services/user.service";
import { AppContextType } from "@/types/common.type";
import { NotificationType } from "@/types/notification.type";
import { UserType } from "@/types/user.type";
import { authenticateGroupQLRoute } from "@/utils/checkSession.util";
import { isEmail } from "@/utils/email.util";
import { comparePassword } from "@/utils/password.util";
import { Request } from "express";
import { GraphQLError } from "graphql";
import { sign } from "jsonwebtoken";
import { toLower, upperFirst } from "lodash";

export const UserResolver = {
  Query: {
    async checkCurrentUser(
      _: undefined,
      __: undefined,
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      authenticateGroupQLRoute(req);
      // TODO: 임시 확인용 제거 필요
      log.info(req.currentUser);

      const notifications = await getAllNotificationGroups(req.currentUser!.id);

      return {
        user: {
          id: req.currentUser?.id,
          username: req.currentUser?.username,
          email: req.currentUser?.email,
          createdAt: new Date(),
        },
        notifications,
      };
    },
  },
  Mutation: {
    async registerUser(
      _: undefined,
      args: { user: UserType },
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      const { user } = args;
      const { username, email, password } = user;

      const { data: existingUser } = await getUserByUsernameOrEmail(
        username!,
        email!
      );
      if (existingUser && existingUser.id) {
        throw new GraphQLError("이미 가입된 정보가 존재합니다.");
      }

      const authData: UserType = {
        username: upperFirst(username),
        email: toLower(email),
        password,
      } as UserType;

      const { data: result } = await createNewUser(authData);
      if (!result) {
        throw new GraphQLError("회원가입에 실패하였습니다.");
      }

      const response = await userReturnValue(req, result, "register");
      return response;
    },

    async loginUser(
      _: undefined,
      args: { username: string; password: string },
      contextValue: AppContextType
    ) {
      const { req } = contextValue;
      const { username, password } = args;

      const isValidEmail = isEmail(username);
      const type = isValidEmail ? "email" : "username";

      const existingUser = await getUserByProp(username, type);
      if (!existingUser || !existingUser.data) {
        throw new GraphQLError("해당 정보로 가입된 정보가 존재하지 않습니다.");
      }

      const isPasswordMatched = await comparePassword(
        password,
        existingUser.data.password!
      );
      if (!isPasswordMatched) {
        // TODO: 비밀번호 불일치라는 구체적인 이유를 제시해야할까?
        throw new GraphQLError("비밀번호가 일치하지 않습니다.");
      }

      const response = await userReturnValue(req, existingUser.data, "login");
      return response;
    },

    logout(_: undefined, __: undefined, contextValue: AppContextType) {
      const { req } = contextValue;
      req.session = null;
      req.currentUser = undefined;
      return null;
    },
  },
};

async function userReturnValue(req: Request, result: UserType, type: string) {
  let notifications: NotificationType[] = [];
  if (type === "register" && result && result.id && result.email) {
    const { data: notification } = await createNotificationGroup({
      userId: result.id,
      groupName: "Define Contact Group",
      emails: JSON.stringify([result.email]),
    });
    if (!notification) {
      throw new GraphQLError("notification이 존재하지 않습니다.");
    }

    notifications.push(notification);
  } else if (type === "login" && result && result.id && result.email) {
    const { data } = await getAllNotificationGroups(result.id);
    if (!data) {
      throw new GraphQLError("notifications가 존재하지 않습니다.");
    }

    notifications = data;
  }

  const userJWT: string = sign(
    {
      id: result.id,
      email: result.email,
      username: result.username,
    },
    JWT_TOKEN
  );

  req.session = { jwt: userJWT, enableAutomaticRefresh: false };

  const user: UserType = {
    id: result.id,
    email: result.email,
    username: result.username,
    createdAt: result.createdAt,
  } as UserType;

  return {
    user,
    notifications,
  };
}
