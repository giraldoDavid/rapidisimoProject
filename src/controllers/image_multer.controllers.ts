import { Request, Response } from 'express';
import { upload } from '../config/configMulter'

export const image = (req: Request, res: Response) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(508).send({
                message: 'Error subir la imagen',
                err
            });
        }
        if (req.file) {
            console.log(req.file);
        } else if (req.files) {
            console.log(req.files);
        }
        res.send("Imagen subida");
    })
}