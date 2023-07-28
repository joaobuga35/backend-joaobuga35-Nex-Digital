import { Request, Response } from "express";
import { ILogin } from "../interface/login.interface";
import loginService from "../services/Login/login.service";

const loginController = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  const loginData: ILogin = req.body;

  const token = await loginService(loginData);

  return resp.json({
    token: token,
  });
};

export default loginController;
