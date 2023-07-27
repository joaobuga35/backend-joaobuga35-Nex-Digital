import "express-async-errors";
import express from "express";
import userRoutes from "./routers/users.routes";
import { handleError } from "./errors";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(handleError);

app.listen(3000, () => console.log("server is running"));
