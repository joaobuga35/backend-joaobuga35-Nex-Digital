import "express-async-errors";
import express from "express";
import userRoutes from "./routers/users.routes";
import { handleError } from "./errors";
import loginRouter from "./routers/login.routes";
import transactionRoutes from "./routers/transactions.routes";

const app = express();
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);

app.use(handleError);

app.listen(3000, () => console.log("Server is running!!"));
