import { knexInstance } from "../../database";
import {
  ICreateUser,
  IReturnCreateUser,
} from "../../interface/users.interface";
import { returnedCreateUserSchema } from "../../schemas/users.schema";

const createUserService = async (
  userData: ICreateUser
): Promise<IReturnCreateUser> => {
  const [userId] = await knexInstance("users").insert(userData);

  const createdUser = await knexInstance("users").where("id", userId).first();

  return returnedCreateUserSchema.parse(createdUser);
};

export default createUserService;
