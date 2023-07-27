import { ZodError } from "zod";
import { NextFunction, Request, Response } from "express";

class AppError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(), (this.message = message), (this.statusCode = statusCode);
  }
}

const handleError = (
  error: any,
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return resp.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return resp.status(400).json({
      message: error.flatten().fieldErrors,
    });
  }

  console.log(error);
  return resp.status(500).json({
    message: "Internal Server Error",
  });
};

export { AppError, handleError };
