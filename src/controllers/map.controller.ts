import express, { Request, Response } from "express";
import { ListCollectionsCursor, ObjectId } from "mongodb";
import { collection } from "../data-base/config.mongodb";


//Traer toda la información
export const getAllMaps = async (req: Request, res: Response) => {
    try {
        let localizacion = await collection.map.find({}).toArray();
        return res.status(201).json(localizacion);
    } catch(error) {
        console.log(error);
        return res.status(508).send({
            message: 'Error al traer las localizaciones',
        });
        
    }
}

// Traer una localización por id
export const getMapById = async (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        let localizacion = await collection.map.findOne({ _id: new ObjectId(id) });
        return res.status(201).json(localizacion);
    } catch(error) {
        console.log(error);
        return res.status(508).send({
            message: 'Error al traer la localización',
        });
    }
}


//Crear una nueva localización
export const postMap = async (req: Request, res: Response) => {
    try {
        const newLocation = req.body;
        const result = await collection.map.insertOne(newLocation);
        return res.status(201).json(`Locación creada satisfactoriamente, con id ${result.insertedId}`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al crear la locación',
        });
    }
}

//Editar una localización
export const putMap = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updatedLocation = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collection.map.updateOne(query, { $set: updatedLocation });
        return res.status(201).json(`Locación con id: ${id}, editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la locación',
        });
    }
}

//Eliminar una localización
export const deleteMap = async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collection.map.deleteOne(query);
        return res.status(201).json(`Locación con id: ${id}, eliminada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al eliminar la localización',
        });
    }
}

