import { Request, Response, NextFunction } from "express";
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';
import { atob } from "buffer";


// function parseJwt (token:string) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return JSON.parse(jsonPayload);
// };

export const validateUser = async (_req: Request, res: Response, next: NextFunction) => {
    let cliente = await pool.connect();
    const token = _req.headers.authorization?.split(" ")[1];
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    try{
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const emailToken = JSON.parse(jsonPayload).email;
        let result: QueryResult = await cliente.query('SELECT * FROM users WHERE email=$1;', [emailToken]);
        res.status(201).json(result.rows);
    } catch(error){
        res.status(401).json({
            message: "Token no válido"
        });
    };
}