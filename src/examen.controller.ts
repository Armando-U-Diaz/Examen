import { Request, Response } from "express";
import examenModel from "./ExamenModel";

export async function crearProducto(req: Request, res: Response) {
    const {nombre} = req.body;
    const {precio} = req.body;
    const nuevoProducto = await examenModel.create({
        nombre: nombre,
        precio: precio
    });

    res.status(201).json(nuevoProducto);
}

export async function eliminar(req: Request, res: Response) {
    const {id:_id} = req.params;
    const userDelete = await examenModel.findByIdAndDelete({_id});
    if (!userDelete) {
        res.status(404).json({message: "Producto no encontrado"});
        return;
    }
    res.json({message: "Eliminado correctamente"});
}

export async function leerProducto(req: Request, res: Response ){
    try {
        const resultado = await examenModel.find();
        res.status(200).json(resultado);
    } catch (error) {
        res.sendStatus(500).json({message: "Error al obtener los productos", error });
    }
}