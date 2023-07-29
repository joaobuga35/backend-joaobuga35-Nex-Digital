import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const ensureADMisValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const adm = req.user.admin;

  if (adm === 0) {
    throw new AppError("Insufficient permission, only adm", 403);
  }

  return next();
};

export default ensureADMisValid;
