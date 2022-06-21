import { Request, Response, NextFunction } from "express";
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';
import jwt_decode from "jwt-decode";


export const validateRol = async (_req: Request, res: Response, next: NextFunction) => {
    let cliente = await pool.connect();
    const token = _req.headers.authorization?.split(" ")[1];
    let  decoded = jwt_decode(token);
    let emailToken = (Object.values(decoded))[7];
    // console.log((Object.values(decoded))[7]);
    console.log(emailToken);
    try{
        let result: QueryResult = await cliente.query('SELECT rol FROM users WHERE email=$1;', [emailToken]);
        if(result.rows.length == 0){
            res.status(401).json([{message: "Usuario registrado en Firebase, pero no existe en la base de datos"}, {email: emailToken}]);
        } else{
            if(result.rows[0].rol == "Delivery man"){
                res.status(401).json([{message: "¿ Sabe contar ?, no cuente con este servicio"}]);
            } else {
                return next();
            }
        }
    } catch(error){
        res.status(401).json({
            message: "Token no válido"
        });
    };
}
