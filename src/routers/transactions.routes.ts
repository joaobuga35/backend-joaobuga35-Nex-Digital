import { Router } from "express";
import {
  createTransactionController,
  readAllTransactionsController,
} from "../controllers/transaction.controller";
import multer from "multer";
import ensureTokenIsValid from "../middlewares/ensure.token.isValid";
import ensureADMisValid from "../middlewares/ensure.adm.isValid";

const multerConfig = multer();
const transactionRoutes: Router = Router();

transactionRoutes.post(
  "",
  multerConfig.single("file"),
  createTransactionController
);

transactionRoutes.get(
  "",
  ensureTokenIsValid,
  ensureADMisValid,
  readAllTransactionsController
);

export default transactionRoutes;
