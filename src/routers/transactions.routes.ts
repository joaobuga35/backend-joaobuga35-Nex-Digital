import { Router } from "express";
import { createTransactionController } from "../controllers/transaction.controller";
import multer from "multer";

const multerConfig = multer();
const transactionRoutes: Router = Router();

transactionRoutes.post(
  "",
  multerConfig.single("file"),
  createTransactionController
);

export default transactionRoutes;
