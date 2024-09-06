import { JWT_TOKEN } from "@/server/config";
import { AuthPayload } from "@/types/user.type";
import { Request } from "express";
import { GraphQLError } from "graphql";
import { verify } from "jsonwebtoken";

export const authenticateGroupQLRoute = (req: Request): void => {
  if (!req.session?.jwt) {
    throw new GraphQLError("로그인이 필요합니다.");
  }

  try {
    const payload: AuthPayload = verify(
      req.session.jwt,
      JWT_TOKEN
    ) as AuthPayload;
    req.currentUser = payload;
  } catch (error) {
    throw new GraphQLError("로그인이 필요합니다.");
  }
};
