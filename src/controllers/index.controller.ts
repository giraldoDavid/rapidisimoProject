import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';

export const getAll = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query('SELECT * FROM usuarios');
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}