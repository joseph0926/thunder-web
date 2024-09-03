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
    createAt: String
    googleId: String
  }

  type AuthResponse {
    user: User!
  }

  type AuthLogoutResponse {
    message: String
  }

  type CurrentUserResponse {
    user: User
  }

  type Query {
    checkCurrentUser: CurrentUserResponse
  }

  type Mutation {
    loginUser(username: String!, password: String!): AuthResponse!
    registerUser(user: Auth!): AuthResponse!
    authSocialUser(user: Auth!): AuthResponse!
    logout: AuthLogoutResponse
  }
`);
