import { buildSchema } from "graphql";

export const userSchema = buildSchema(`#graphql
   input Auth {
    username: String
    email: String
    password: String
    socialId: String
    type: String
  }

  type User {
    id: String
    email: String
    username: String
    createdAt: String
    googleId: String
  }

  type NotificationResult {
    id: ID!
    userId: String!
    groupName: String!
    emails: String!
  }

  type AuthResponse {
    user: User!
    notifications: [NotificationResult!]!
  }

  type AuthLogoutResponse {
    message: String
  }

  type CurrentUserResponse {
    user: User
    notifications: [NotificationResult!]!
  }

  type Query {
    checkCurrentUser: CurrentUserResponse
  }

  type Mutation {
    loginUser(username: String!, password: String!): AuthResponse!
    registerUser(user: Auth!): AuthResponse!
    # TODO: 소셜 로그인 관련 resolver 정의 필요!
    authSocialUser(user: Auth!): AuthResponse!
    logout: AuthLogoutResponse
  }
`);
