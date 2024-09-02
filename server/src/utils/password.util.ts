import { compare, hash } from "bcryptjs";

const SALT_ROUND = 10;

export const hashPassword = async (password: string): Promise<string> => {
  return hash(password, SALT_ROUND);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return compare(password, hashedPassword);
};
