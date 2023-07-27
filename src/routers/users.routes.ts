import { Request, Response, Router } from "express";
import { knexInstance } from "../database";
import { readAllUsers } from "../controllers/user.controller";

const userRoutes: Router = Router();

userRoutes.get("", readAllUsers);

export default userRoutes;
