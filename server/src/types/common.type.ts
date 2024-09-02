export type ResponseType<T> = {
  data: T | null;
  message: string;
  success: boolean;
};
