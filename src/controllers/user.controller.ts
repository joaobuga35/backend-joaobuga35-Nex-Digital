import { Request, Response } from "express";
import { knexInstance } from "../database";
import { createUserService } from "../services/Users/users.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const readAllUsersController = async (req: Request, res: Response) => {
  const users = await knexInstance("users");

  return res.status(200).json({ deuBoa: true, usuarios: users });
};

export { createUserController, readAllUsersController };
