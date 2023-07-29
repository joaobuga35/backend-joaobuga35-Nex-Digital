import { compare } from "bcryptjs";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { ILogin } from "../../interface/login.interface";
import { knexInstance } from "../../database";

const loginService = async (loginData: ILogin): Promise<string> => {
  const { email, password } = loginData;
  const user = await knexInstance("users").where("email", email).first();

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordCompare = await compare(password, user.password);

  if (!passwordCompare) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user.admin,
      name: user.name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(user.id),
    }
  );

  return token;
};

export default loginService;
