import { Express, Router } from "express";
import { crearProducto, eliminar, leerProducto } from "./examen.controller";
import examenModel from "./ExamenModel";

const examenRoutes = Router();
                                                // U R L                     // METODO
examenRoutes.post("/", crearProducto);      // http://localhost:3000/task/      POST
examenRoutes.delete("/:id", eliminar);      // http://localhost:3000/task/id    DELETE
examenRoutes.get("/", leerProducto);        // http://localhost:3000/task/id    PATCH

export default examenRoutes;