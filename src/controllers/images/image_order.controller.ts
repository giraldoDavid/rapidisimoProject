import { Request, Response } from 'express';
import { upload } from '../../config/configMulter';
import { uploadFile } from '../../config/google-cloud/storage';
import { pool } from '../../data-base/config.postgres';
import * as dotenv from "dotenv";
dotenv.config();

export const imageOrder = (req: Request, res: Response) => {
    const id = req.params;
    upload(req, res, async (err) => {
        let cliente = await pool.connect();
        if (err){
            console.log(err);
            err.message ='Error al cargar la imagen de la orden de compra'
            return res.send(err)
        }
        if(req.file){
            let ruta = req.file.filename;
            let destino = `orderImage${id.id}.jpg`;
            const imagenQuery = `https://storage.cloud.google.com/rapidisimo-bucket/order-image/${destino}?authuser=1`
            uploadFile(ruta, `order-image/${destino}`);
            try{
                await cliente.query(`UPDATE orders SET image_order = '${imagenQuery}' WHERE id_order = '${id.id}'`);
                return res.status(201).json(`Imagen de la orden con id: ${id.id}, subida satisfactoriamente`);
            } catch (error) {
                console.log(error);
                return res.status(508).json({
                message: 'Error al editar la imagen de usuario',
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
