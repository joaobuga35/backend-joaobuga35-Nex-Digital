import { z } from "zod";
import {
  createUserSchema,
  returnedCreateUserSchema,
} from "../schemas/users.schema";

type ICreateUser = z.infer<typeof createUserSchema>;
type IReturnCreateUser = z.infer<typeof returnedCreateUserSchema>;

export { ICreateUser, IReturnCreateUser };
