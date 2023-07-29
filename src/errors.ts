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
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: error.flatten().fieldErrors,
    });
  }

  console.log(error);
  return res.status(500).json({
    message: "Internal Server Error",
  });
};

export { AppError, handleError };
