import { Request, Response } from 'express';
import { upload } from '../config/configMulter'

export const image = (req: Request, res: Response) => {
    upload(req, res, (err) => {
        if (err){
            console.log(err);
            err.message ='Error al cargar el archivo'
            return res.send(err)
        }
        if(req.file){
            console.log(req.file);
            return res.send('!Imagen cargada correctamente¡')
        }else if(req.files){
            console.log(req.files);
            return res.send('!Imagenes cargadas correctamente¡')
        }
    })
}