import { z } from "zod";
import { hashSync } from "bcryptjs";

const createUserSchema = z.object({
  name: z.string().min(3).max(45),
  cpf: z.string().max(11),
  email: z.string().email(),
  password: z.string().transform((pass) => {
    return hashSync(pass, 10);
  }),
  admin: z.literal(0).or(z.literal(1)).default(0),
});

const returnedCreateUserSchema = createUserSchema
  .extend({
    id: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
  })
  .omit({ password: true });

export { createUserSchema, returnedCreateUserSchema };
