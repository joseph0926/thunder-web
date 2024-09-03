import { Request, Response } from "express";

export type ResponseType<T> = {
  data: T | null;
  message: string;
  success: boolean;
};

export type AppContextType = {
  req: Request;
  res: Response;
};
