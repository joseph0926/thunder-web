import { mergeTypeDefs } from "@graphql-tools/merge";
import { userSchema } from "./user.schema";

export const mergedGraphQLSchema = mergeTypeDefs(userSchema);
