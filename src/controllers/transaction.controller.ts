import { Request, Response } from "express";
import createTransactionService from "../services/Transactions/createTransaction.service";
import { knexInstance } from "../database";

const createTransactionController = async (req: Request, res: Response) => {
  createTransactionService(req);
  return res.status(201).json({ message: "Transaction created with sucess" });
};

const readAllTransactionsController = async (req: Request, res: Response) => {
  const { cpf, description, startDate, endDate, minValue, maxValue, status } =
    req.query;

  let query = knexInstance("transactions");

  if (cpf) {
    query = query.where("cpf", cpf);
  }

  if (description) {
    query = query.where("description", "like", `%${description}%`);
  }

  if (startDate && endDate) {
    query = query.whereBetween("transaction_date", [startDate, endDate]);
  }

  if (minValue && maxValue) {
    query = query.whereBetween("value", [minValue, maxValue]);
  }

  if (status) {
    query = query.where("status", status);
  }

  const transactions = await query.select();

  return res.status(200).json(transactions);
};

export { createTransactionController, readAllTransactionsController };
