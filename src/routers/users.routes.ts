import { Request, Response, Router } from "express";
import { knexInstance } from "../database";
import {
  createUserController,
  readAllUsersController,
} from "../controllers/user.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensure.validated.body";
import { createUserSchema } from "../schemas/users.schema";

const userRoutes: Router = Router();

userRoutes.get("", readAllUsersController);
userRoutes.post(
  "",
  ensureBodyIsValidMiddleware(createUserSchema),
  createUserController
);

export default userRoutes;
