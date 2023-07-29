import { knexInstance } from "../../database";
import { IUpdate } from "../../interface/users.interface";

const updateUserService = async (
  userData: IUpdate,
  userId: string
): Promise<void> => {
  const user = await knexInstance("users").where("id", userId).update(userData);

  return;
};

export default updateUserService;
