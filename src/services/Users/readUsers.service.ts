import { knexInstance } from "../../database";
import {
  ICreateUser,
  IReturnCreateUser,
} from "../../interface/users.interface";
import {
  allUsersSchema,
  returnedCreateUserSchema,
} from "../../schemas/users.schema";

const readUsersService = async () => {
  const createdUser = await knexInstance("users");

  return allUsersSchema.parse(createdUser);
};

export default readUsersService;
