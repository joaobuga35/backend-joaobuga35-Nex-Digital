import "express-async-errors";
import express from "express";
import userRoutes from "./routers/users.routes";
import { handleError } from "./errors";
import loginRouter from "./routers/login.routes";
import transactionRoutes from "./routers/transactions.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", loginRouter);
app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);

app.use(handleError);

app.listen(3000, () => console.log("Server is running!!"));
