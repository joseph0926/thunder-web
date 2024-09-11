import { mergeTypeDefs } from "@graphql-tools/merge";
import { notificationSchema } from "./notification.schema";
import { userSchema } from "./user.schema";

export const mergedGraphQLSchema = mergeTypeDefs([
  userSchema,
  notificationSchema,
]);
