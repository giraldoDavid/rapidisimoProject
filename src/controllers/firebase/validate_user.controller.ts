import { Request, Response, NextFunction } from "express";
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';
import jwt_decode from "jwt-decode";



export const validateUser = async (_req: Request, res: Response) => {
    let cliente = await pool.connect();
    const token = _req.headers.authorization?.split(" ")[1];
    let  decoded = jwt_decode(token);
    let emailToken = (Object.values(decoded))[7];
    // console.log((Object.values(decoded))[7]);
    console.log(emailToken);
    try{
        let result: QueryResult = await cliente.query('SELECT * FROM users WHERE email=$1;', [emailToken]);
        if(result.rows.length == 0){
            res.status(401).json([{message: "Usuario registrado en Firebase, pero no existe en la base de datos"}, {email: emailToken}]);
        } else{
            res.status(201).json(result.rows);
        }
    } catch(error){
        res.status(401).json({
            message: "Token no válido"
        });
    };
}
