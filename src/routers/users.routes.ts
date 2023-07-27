import { Request, Response, Router } from "express";
import { knexInstance } from "../database";
import {
  createUserController,
  readAllUsersController,
} from "../controllers/user.controller";

const userRoutes: Router = Router();

userRoutes.get("", readAllUsersController);
userRoutes.post("", createUserController);

export default userRoutes;
