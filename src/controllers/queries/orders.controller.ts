import { Request, Response } from 'express';
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';


//Trae las ordenes pendientes por comercio
export const getOrdersCompanySlopes = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id_company = req.params.id_company;
    try {
        let result: QueryResult = await cliente.query(
            `SELECT * FROM orders WHERE status_order = 'En espera' AND id_company= $1;`, [id_company]);
            res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al traer las ordenes de los comercios',
        });
    } finally {
        cliente.release(true)
    }
}