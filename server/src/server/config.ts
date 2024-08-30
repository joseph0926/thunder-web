import * as dotenv from "dotenv";

dotenv.config({});

const env = process.env;

export const NODE_ENV = env.NODE_ENV as string;
export const CLIENT_URL = env.CLIENT_URL as string;
export const PORT = env.PORT;
export const POSTGES_DB = env.POSTGES_DB as string;
export const SECRET_KEY_ONE = env.SECRET_KEY_ONE as string;
export const SECRET_KEY_TWO = env.SECRET_KEY_TWO as string;
export const JWT_TOKEN = env.JWT_TOKEN as string;
export const SENDER_EMAIL = env.SENDER_EMAIL as string;
export const SENDER_EMAIL_PASSWORD = env.SENDER_EMAIL_PASSWORD as string;
