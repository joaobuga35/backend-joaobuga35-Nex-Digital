import { Request, Response } from "express";
import { knexInstance } from "../database";
import createUserService from "../services/Users/users.service";
import readUsersService from "../services/Users/readUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const readAllUsersController = async (req: Request, res: Response) => {
  const users = await readUsersService();
  return res.status(200).json(users);
};

const updatedUsersController = async (req: Request, res: Response) => {
  const id = req.params.id;
};

const deleteUsersController = async (req: Request, res: Response) => {
  const id = req.params.id;
};

export { createUserController, readAllUsersController };
