import { Request, Response } from "express";
import createTransactionService from "../services/Transactions/createTransaction.service";

const createTransactionController = async (req: Request, res: Response) => {
  createTransactionService(req);
  return res.status(201).json({ message: "Transaction created with sucess" });
};

export { createTransactionController };
