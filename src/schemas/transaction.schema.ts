import { z } from "zod";

const statusEnum = z.enum(["Aprovado", "Reprovado", "Em avaliação"]);

const transactionSchema = z.object({
  cpf: z.string(),
  description: z.string().max(500),
  transaction_date: z.string(),
  points_value: z.string(),
  value: z.number(),
  status: statusEnum,
  user_id: z.string(),
});

const returnedTransactionSchema = transactionSchema.extend({
  id: z.string(),
});

export { transactionSchema, returnedTransactionSchema };
