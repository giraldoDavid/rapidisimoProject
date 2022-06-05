import { Request, Response } from 'express';
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';

// Traer la información del repartidor segun id
export const getDeliveryManById = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    try {
        let result: QueryResult = await cliente.query('SELECT * FROM users WHERE id_user=$1;', [id]);
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al traer el repartidor',
        });
    } finally {
        cliente.release(true)
    }
}

// Traer todos las ordenes segun id del repartidor
export const getOrdersOfDeliveryMan = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    try {
        let result: QueryResult = await cliente.query(
            `SELECT * FROM assigned_order 
                RIGHT JOIN orders ON assigned_order.id_order = orders.id_order 
                WHERE id_delivery_man = $1;`, [id]);
        if (result.rows[0] !== undefined){
            res.status(201).json(result.rows);
        }else{
            res.status(202).json(`El repartidor con id: ${id}, no ha realizado ninguna entrega`)
        }
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al traer las ordenes del repartidor repartidor',
        });
    } finally {
        cliente.release(true)
    }
}