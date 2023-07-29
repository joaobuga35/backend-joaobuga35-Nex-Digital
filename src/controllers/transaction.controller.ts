import { Request, Response } from "express";
import createTransactionService from "../services/Transactions/createTransaction.service";
import { knexInstance } from "../database";
import readTransactionsService from "../services/Transactions/readTransactions.service";

const createTransactionController = async (req: Request, res: Response) => {
  createTransactionService(req);
  return res.status(201).json({ message: "Transaction created with sucess" });
};

const readAllTransactionsController = async (req: Request, res: Response) => {
  const transactionsFilter = await readTransactionsService(req);
  return res.status(200).json(transactionsFilter);
};

export { createTransactionController, readAllTransactionsController };
