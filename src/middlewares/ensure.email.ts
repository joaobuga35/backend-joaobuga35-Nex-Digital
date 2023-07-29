import { Request, Response, NextFunction } from "express";
import { knexInstance } from "../database";
import { AppError } from "../errors";
const ensureEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  if (email) {
    const user = await knexInstance("users").where("email", email).first();

    if (user) {
      throw new AppError("Email already exists", 409);
    }
  }
  return next();
};

export default ensureEmailExists;
