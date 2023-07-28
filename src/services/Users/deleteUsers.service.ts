import { knexInstance } from "../../database";

const deleteUserService = async (userId: string): Promise<void> => {
  await knexInstance("users").where("id", userId).delete();
  return;
};

export default deleteUserService;
