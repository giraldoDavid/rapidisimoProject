import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { locationMap } from '../models/map.models';

export const collection: { map?: mongoDB.Collection<locationMap> } = {};

export async function connectToDatabase() {
    
    dotenv.config();
    const cliente = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await cliente.connect();
    
    const db = cliente.db(process.env.DB_MONGO_NAME);
    const mapCollection = db.collection<locationMap>(process.env.MAP_COLLECTION_NAME);
    collection.map = mapCollection;
    console.log(
        `Successfully connected to database ${process.env.DB_MONGO_NAME} on ${process.env.DB_CONN_STRING}`
    );

    await db.command({
        collMod: process.env.MAP_COLLECTION_NAME
    }).catch(async (error: mongoDB.MongoServerError) =>{
        if(error.codeName === 'NamespaceNotFound'){
            await db.createCollection(process.env.MAP_COLLECTION_NAME);
        }
    });
}
