import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';

// Traer todos los usuarios
export const getAllUsuarios = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query('SELECT * FROM usuarios');
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al traer los usuarios',
        });
    }
}

// Crear usuario
export const postUsuario = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query
            ('INSERT INTO usuarios(email, rol) VALUES($1, $2)', [req.body.email, req.body.rol]);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al crear el usuario',
        });
    }
}

// Editar usuario
export const patchUsuario = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let email = req.params.email;
    try {
        let result: QueryResult = await cliente.query
            ('UPDATE usuarios SET rol=$2 WHERE email=$1', [email, req.body.rol]);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al editar el usuario',
        });
    }
}

// Eliminar usuario
export const deleteUsuario = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let email = req.params.email;
    try {
        let result: QueryResult = await cliente.query
            ('DELETE FROM usuarios WHERE email=$1', [email]);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al eliminar el usuario',
        });
    }
}