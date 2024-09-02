import { db } from "@/server/db";
import log from "@/server/log";
import { ResponseType } from "@/types/common.type";
import { UserType } from "@/types/user.type";
import { omit, toLower, upperFirst } from "lodash";

export const createNewUser = async (
  data: UserType
): Promise<ResponseType<UserType>> => {
  try {
    const result = await db.user.create({
      data,
    });
    const userData = omit(result, ["password"]) as UserType;

    return {
      data: userData,
      message: "회원가입에 성공하였습니다.",
      success: true,
    };
  } catch (error) {
    log.error(error);
    return {
      data: null,
      message: "회원가입에 실패하였습니다.",
      success: false,
    };
  }
};

export const getUserByUsernameOrEmail = async (
  username: string,
  email: string
): Promise<ResponseType<UserType | undefined>> => {
  try {
    const result = await db.user.findFirst({
      where: {
        OR: [
          {
            email: toLower(email),
          },
          { username: upperFirst(username) },
        ],
      },
    });
    const userData = omit(result, ["password"]) as UserType;

    return {
      data: userData,
      message: "유저 정보를 불러왓습니다.",
      success: true,
    };
  } catch (error) {
    log.error(error);
    return {
      data: null,
      message: "유저 정보를 불러오는데 실패하였습니다.",
      success: false,
    };
  }
};

export const getUserBySocialId = async (
  socialId: string,
  email: string,
  type: string
) => {
  try {
    const result = await db.user.findFirst({
      where: {
        OR: [
          { ...(type === "google" && { googleId: socialId }) },
          { email: toLower(email) },
        ],
      },
    });
    const userData = omit(result, ["password"]) as UserType;

    return {
      data: userData,
      message: "유저 정보를 불러왓습니다.",
      success: true,
    };
  } catch (error) {
    log.error(error);
    return {
      data: null,
      message: "유저 정보를 불러오는데 실패하였습니다.",
      success: false,
    };
  }
};
