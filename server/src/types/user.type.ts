declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthPayload;
    }
  }
}

export type AuthPayload = {
  id: string;
  username: string;
  email: string;
  iat?: number;
};

export type UserType = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  username: string;
  password?: string;
  googleId?: string;
  email: string;
};
