import { knexInstance } from "../../database";
import {
  ICreateUser,
  IReturnCreateUser,
} from "../../interface/users.interface";
import { returnedCreateUserSchema } from "../../schemas/users.schema";

const createUserService = async (
  userData: ICreateUser
): Promise<IReturnCreateUser> => {
  await knexInstance("users").insert(userData);

  const createdUser = await knexInstance("users")
    .where("cpf", userData.cpf)
    .first();

  await knexInstance("transactions")
    .where("cpf", userData.cpf)
    .update({ user_id: createdUser.id });

  return returnedCreateUserSchema.parse(createdUser);
};

export default createUserService;
