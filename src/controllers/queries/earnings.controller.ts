import { Request, Response } from 'express';
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';

// Total de ganancias del día
export const getTotalEarnings = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query(
        `SELECT SUM(order_cost) FROM orderS WHERE date_delivery = current_date - INTERVAL '1 day';`)
    try {
        return res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al obtener las ganancias del día',
        });
    } finally {
        cliente.release(true)
    }
}


// Traer las ganancias por rango de fechas
export const getTotalEarningsByDate = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let date_start = req.params.date_start;
    let date_end = req.params.date_end;
    let result: QueryResult = await cliente.query(
        `SELECT SUM(order_cost) FROM orders WHERE date_delivery >= $1 AND date_delivery <= $2`, [date_start, date_end])
    try {
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al obtener las ganancias por rango de fechas',
        });
    } finally {
        cliente.release(true)
    }
}


// Traer las ganancias por el id de una repartidor con el rango de fechas
export const getTotalEarningsByDateOfDeliveryMan = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let date_start = req.params.date_start;
    let date_end = req.params.date_end;
    let id_delivery = req.params.id_delivery;
    let result: QueryResult = await cliente.query(
        `SELECT SUM(order_cost) AS Ganancias FROM assigned_order INNER JOIN users ON assigned_order.id_delivery_man = users.id_user INNER JOIN orders ON assigned_order.id_order = orders.id_order WHERE date_delivery >= $1 AND date_delivery <= $2 AND assigned_order.id_delivery_man = $3;`, [date_start, date_end, id_delivery])
    try {
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: `Error al obtener las ganancias del repartidor con id: ${id_delivery} por rango de fechas`,
        });
    } finally {
        cliente.release(true)
    }
}


// Traer las ganancias por el id de una repartidor en el día actual
export const getTotalEarningsOfDeliveryManToday = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id_delivery = req.params.id_delivery;
    let result: QueryResult = await cliente.query(
        `SELECT SUM(order_cost) AS Ganancias FROM assigned_order INNER JOIN users ON assigned_order.id_delivery_man = users.id_user INNER JOIN orders ON assigned_order.id_order = orders.id_order WHERE date_delivery = CURRENT_DATE - INTERVAL '1 day' AND assigned_order.id_delivery_man = $1`, [id_delivery])
    try {
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: `Error al obtener las ganancias del repartidor con id: ${id_delivery} por rango de fechas`,
        });
    } finally {
        cliente.release(true)
    }
}

//Utilidades acumuladas hoy
export const utilities = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query(
        `SELECT SUM(order_cost) FROM orderS WHERE date_delivery = current_date - INTERVAL '1 day';`)
    try {
        const { sum } = result.rows[0]
        const operacion = sum * 0.10
        try {
            return res.status(201).json(operacion);
        } catch (error) {
            console.log(error);
            return res.status(409).json({
                message: 'Error al obtener las utilidades',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al obtener las ganancias del día',
        });
    }
    finally {
        cliente.release(true)
    }
}


//utilidades acumuladas por rango de fecha
export const utilitiesRangeDate = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let date_start = req.params.date_start;
    let date_end = req.params.date_end;
    let result: QueryResult = await cliente.query(
        `SELECT SUM(order_cost) FROM orders WHERE date_delivery >= $1 AND date_delivery <= $2`, [date_start, date_end])
    try {
        const { sum } = result.rows[0]
        const operacion = sum * 0.10
        try {
            return res.status(201).json(operacion);
        } catch (error) {
            console.log(error);
            return res.status(409).json({
                message: 'Error al obtener las utilidades',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al obtener las ganancias del día',
        });
    }
    finally {
        cliente.release(true)
    }
}