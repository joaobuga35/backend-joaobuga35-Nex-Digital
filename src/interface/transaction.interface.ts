import { z } from "zod";
import {
  returnedTransactionSchema,
  transactionSchema,
} from "../schemas/transaction.schema";

type ITransaction = z.infer<typeof transactionSchema>;
type IReturnedTransaction = z.infer<typeof returnedTransactionSchema>;

export { ITransaction, IReturnedTransaction };
