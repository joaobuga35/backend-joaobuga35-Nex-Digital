import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(45),
  password: z.string().min(4).max(120),
});

export default loginSchema;
