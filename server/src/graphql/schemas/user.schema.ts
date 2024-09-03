import { buildSchema } from "graphql";

export const userSchema = buildSchema(`#graphql
  input Auth {
      username: String
      email: String
      password: String
      socialId: String
    } 

  input NotificationResult {
    id: String!
    userId: String!
    groupName: String!
    emails: String!
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
    notifications: [NotificationResult!]!
  }

  type AuthLogoutResponse {
    message: String
  }

  type CurrentUserResponse {
    user: User
    notifications: [NotificationResult]
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
