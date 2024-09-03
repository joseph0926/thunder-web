import {
  createNewUser,
  getUserByUsernameOrEmail,
} from "@/services/user.service";
import { AppContextType, ResponseType } from "@/types/common.type";
import { UserType } from "@/types/user.type";
import { GraphQLError } from "graphql";
import { toLower, upperFirst } from "lodash";

export const userResolver = {
  Mutation: {
    async registerUser(
      _: undefined,
      args: { user: UserType },
      _contextValue: AppContextType
    ) {
      const { user } = args;
      const { username, email, password } = user;

      const existingUser: ResponseType<UserType | undefined> =
        await getUserByUsernameOrEmail(username!, email!);
      if (existingUser) {
        throw new GraphQLError("Invalid crendentials");
      }

      const authData: UserType = {
        username: upperFirst(username),
        email: toLower(email),
        password,
      } as UserType;
      const result = await createNewUser(authData);
      console.log(result);
    },
  },
};
