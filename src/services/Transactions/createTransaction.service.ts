import { Request } from "express";
import { knexInstance } from "../../database";
import { Readable } from "stream";
import readline from "readline";

const createTransactionService = async (req: Request): Promise<void> => {
  const { file } = req;
  const { buffer } = file!;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const transactionsLine = readline.createInterface({
    input: readableFile,
  });

  let isFirstLine = true;

  for await (let line of transactionsLine) {
    if (isFirstLine) {
      isFirstLine = false;
      continue;
    }
    const transactionsPosition = line.split(",");

    const userFind = await knexInstance("users")
      .where("cpf", transactionsPosition[0])
      .first();

    const valueString =
      transactionsPosition[4].replace(/["']/g, "") +
      transactionsPosition[5].replace(/["']/g, "");

    const value = Number(valueString) * 1000;
    await knexInstance("transactions").insert({
      cpf: transactionsPosition[0],
      description: transactionsPosition[1],
      transaction_date: transactionsPosition[2],
      points_value: String(transactionsPosition[3]),
      value: value,
      status: transactionsPosition[6],
      user_id: userFind ? userFind.id : null,
    });
  }
  return;
};

export default createTransactionService;
