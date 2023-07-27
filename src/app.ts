import express from "express";
import userRoutes from "./routers/users.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3000, () => console.log("server is running"));
