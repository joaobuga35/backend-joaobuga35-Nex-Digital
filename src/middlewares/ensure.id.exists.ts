import { Request, Response, NextFunction } from "express";
import { knexInstance } from "../database";
import { AppError } from "../errors";
const ensureIDExists = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const user = await knexInstance("users").where("id", id).first();

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default ensureIDExists;
