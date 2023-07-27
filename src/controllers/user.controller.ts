import { Request, Response } from "express";
import { knexInstance } from "../database";

const readAllUsers = async (req: Request, res: Response) => {
  const users = knexInstance("users").then((results) => results);

  return res.status(200).json({ deuBoa: true, usuarios: users });
};

export { readAllUsers };
