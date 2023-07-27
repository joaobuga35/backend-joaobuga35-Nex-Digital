import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(3).max(45),
  cpf: z.string().max(11),
  email: z.string().email(),
  password: z.string().min(4).max(120),
  admin: z.literal(0).or(z.literal(1)).default(0),
});

const returnedCreateUserSchema = createUserSchema
  .extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .omit({ password: true });

export { createUserSchema, returnedCreateUserSchema };
