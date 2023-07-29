import { Request } from "express";
import { knexInstance } from "../../database";
import { IReturnedTransaction } from "../../interface/transaction.interface";

const filterTransactionsUsersService = async (
  req: Request
): Promise<IReturnedTransaction[]> => {
  const { startDate, endDate, status } = req.query;

  let query = knexInstance("transactions").where("user_id", req.params.id);

  if (startDate && endDate) {
    query = query.whereBetween("transaction_date", [startDate, endDate]);
  }

  if (status) {
    query = query.where("status", status);
  }

  const userTransactions = await query;
  return userTransactions;
};

export default filterTransactionsUsersService;
