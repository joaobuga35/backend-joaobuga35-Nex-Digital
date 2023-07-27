import { Request, Response } from "express";
import { knexInstance } from "../database";

const createUserController = async (req: Request, res: Response) => {
  const [userId] = await knexInstance("users").insert(req.body);

  const createdUser = await knexInstance("users").where({ id: userId }).first();
  return res.status(201).json(createdUser);
};

const readAllUsersController = async (req: Request, res: Response) => {
  const users = await knexInstance("users");

  return res.status(200).json({ deuBoa: true, usuarios: users });
};

export { createUserController, readAllUsersController };
