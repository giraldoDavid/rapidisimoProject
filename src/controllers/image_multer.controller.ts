import { Request, Response } from 'express';
import { upload } from '../config/configMulter'

export const image = (req: Request, res: Response) => {
    upload(req, res, (err) => {
        if (err){
            console.log(err);
            err.message ='Error al cargar el archivo'
            res.send(err)
        }
        if(req.file){
            console.log(req.file);
            res.send('!Imagen cargada correctamente¡')
        }else if(req.files){
            console.log(req.files);
            res.send('!Imagenes cargadas correctamente¡')
        }
    })
}