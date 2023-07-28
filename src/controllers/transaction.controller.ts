import { Request, Response } from "express";
import { Readable } from "stream";
import readline from "readline";

const createTransactionController = async (req: Request, res: Response) => {
  const { file } = req;
  const { buffer } = file!;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const transactionsLine = readline.createInterface({
    input: readableFile,
  });

  for await (let line of transactionsLine) {
    const transactionsPosition = line.split(",");
    console.log(transactionsPosition[0]);
  }
  return res.status(201).json();
};

export { createTransactionController };
