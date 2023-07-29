import { Request } from "express";
import { IReturnedTransaction } from "../../interface/transaction.interface";
import { knexInstance } from "../../database";

const readTransactionsService = async (
  req: Request
): Promise<IReturnedTransaction[]> => {
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

  return transactions;
};

export default readTransactionsService;
