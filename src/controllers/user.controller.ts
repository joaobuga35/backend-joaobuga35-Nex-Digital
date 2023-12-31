import { Request, Response } from "express";
import createUserService from "../services/Users/users.service";
import readUsersService from "../services/Users/readUsers.service";
import updateUserService from "../services/Users/updateUsers.service";
import deleteUserService from "../services/Users/deleteUsers.service";
import filterTransactionsUsersService from "../services/Users/filterUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const readAllUsersController = async (req: Request, res: Response) => {
  const users = await readUsersService();
  return res.status(200).json(users);
};

const filterTransactionsUsersController = async (
  req: Request,
  res: Response
) => {
  const filterUserTransaction = await filterTransactionsUsersService(req);
  return res.status(200).json(filterUserTransaction);
};

const updatedUsersController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await updateUserService(req.body, id);

  return res.status(200).json({ message: "User updated successfully" });
};

const deleteUsersController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteUserService(id);

  return res.status(204).json();
};

export {
  createUserController,
  readAllUsersController,
  filterTransactionsUsersController,
  updatedUsersController,
  deleteUsersController,
};
