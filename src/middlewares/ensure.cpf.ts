import { Request, Response, NextFunction } from "express";
import { knexInstance } from "../database";
import { AppError } from "../errors";

const ensureCpfExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { cpf } = req.body;
  if (cpf) {
    const user = await knexInstance("users").where("cpf", cpf).first();

    if (user) {
      throw new AppError("Cpf already in use", 409);
    }
  }
  return next();
};

export default ensureCpfExists;
