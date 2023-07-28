import { Request, Response, Router } from "express";
import { knexInstance } from "../database";
import {
  createUserController,
  deleteUsersController,
  readAllUsersController,
  updatedUsersController,
} from "../controllers/user.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensure.validated.body";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import ensureEmailExists from "../middlewares/ensure.email";
import ensureCpfExists from "../middlewares/ensure.cpf";
import ensureIDExists from "../middlewares/ensure.id.exists";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureBodyIsValidMiddleware(createUserSchema),
  ensureEmailExists,
  ensureCpfExists,
  createUserController
);
userRoutes.get("", readAllUsersController);
userRoutes.patch(
  "/:id",
  ensureBodyIsValidMiddleware(updateUserSchema),
  ensureIDExists,
  ensureEmailExists,
  ensureCpfExists,
  updatedUsersController
);
userRoutes.delete("/:id", ensureIDExists, deleteUsersController);

export default userRoutes;
