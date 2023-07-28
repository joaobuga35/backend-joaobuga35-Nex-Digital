import { z } from "zod";
import {
  createUserSchema,
  returnedCreateUserSchema,
  updateUserSchema,
} from "../schemas/users.schema";

type ICreateUser = z.infer<typeof createUserSchema>;
type IReturnCreateUser = z.infer<typeof returnedCreateUserSchema>;
type IUpdate = z.infer<typeof updateUserSchema>;

export { ICreateUser, IReturnCreateUser, IUpdate };
