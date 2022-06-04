import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collection } from "../data-base/config.mongodb";


//Traer toda la información
export const getAllMap = async (req: Request, res: Response) => {
    try {
        let localizacion = await collection.map.find({}).toArray();
        res.status(201).json(localizacion);
    } catch(error) {
        console.log(error);
        res.status(508).send({
            message: 'Error al traer las localizaciones',
        });
        
    }
}

//Crear una nueva localización
export const postMap = async (req: Request, res: Response) => {
    try {
        const newLocation = req.body;
        const result = await collection.map.insertOne(newLocation);
        res.status(201).json(`Locación creada satisfactoriamente, con id ${result.insertedId}`);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al crear la locación',
        });
    }
}

//Editar una localización
export const putMap = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updatedLocation = req.body;
        const query = { id: new ObjectId(id) };
        const result = await collection.map.updateOne(query, { $set: updatedLocation });
        res.status(201).json(`Locación con id: ${id}, editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al editar la locación',
        });
    }
}

//Eliminar una localización
export const deleteMap = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { id: new ObjectId(id) };
        const result = await collection.map.deleteOne(query);
        res.status(201).json(`Locación con id: ${id}, eliminada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al eliminar la localización',
        });
    }
}

