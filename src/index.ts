import Express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { todo } from "node:test";
import examenRoutes from "./examen.routes";

const app = Express();

mongoose.connect("mongodb://localhost:27017/")
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error(Error));

app.use(Express.json());
app.use(cors());

app.use("/task", examenRoutes);
// http://localhost:3000/task

app.listen(3000, () => console.log("http://localhost:3000"));