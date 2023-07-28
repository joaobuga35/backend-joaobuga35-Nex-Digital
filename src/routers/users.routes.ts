import { Request, Response, Router } from "express";
import { knexInstance } from "../database";
import {
  createUserController,
  readAllUsersController,
} from "../controllers/user.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensure.validated.body";
import { createUserSchema } from "../schemas/users.schema";
import ensureEmailExists from "../middlewares/ensure.email";
import ensureCpfExists from "../middlewares/ensure.cpf";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureBodyIsValidMiddleware(createUserSchema),
  ensureEmailExists,
  ensureCpfExists,
  createUserController
);
userRoutes.get("", readAllUsersController);

export default userRoutes;
