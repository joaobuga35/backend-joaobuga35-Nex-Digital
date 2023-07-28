import "express-async-errors";
import express from "express";
import userRoutes from "./routers/users.routes";
import { handleError } from "./errors";
import loginRouter from "./routers/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRouter);

app.use(handleError);

app.listen(3000, () => console.log("server is running"));
