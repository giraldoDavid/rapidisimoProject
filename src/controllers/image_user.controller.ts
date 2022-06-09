import { Request, Response } from 'express';
import { upload } from '../config/configMulter';
import { uploadFile } from '../config/google-cloud/storage';
import { pool } from '../data-base/config.postgres';
import * as dotenv from "dotenv";
import path from "path";
dotenv.config();


export const imageUser = (req: Request, res: Response) => {
    const id = req.params;
    upload(req, res, async (err) => {
        let cliente = await pool.connect();
        if (err){
            console.log(err);
            err.message ='Error al cargar el archivo'
            return res.send(err)
        }
        if(req.file){
            console.log(req.file);
            let ruta = req.file.filename;
            let destino = `userImage${id.id}.jpg`;
            const imagenQuery = `https://storage.cloud.google.com/rapidisimo-bucket/user-image/${destino}?authuser=1`
            uploadFile(ruta, `user-image/${destino}`);
            console.log(imagenQuery);
            try{
                console.log(id.id);
                await cliente.query(`UPDATE users SET user_image = '${imagenQuery}' WHERE id_user = '${id.id}'`);
                return res.status(201).json(`Imagen del usuario con id: ${id.id}, editada satisfactoriamente`);
            } catch (error) {
                console.log(error);
                return res.status(508).json({
                message: 'Error al editar el usuario',
                });
            } finally {
                cliente.release(true)
            }
        }else if(req.files){
            console.log(req.files);
            return res.send('!Imagenes cargadas correctamente¡')
        }
    })
}
