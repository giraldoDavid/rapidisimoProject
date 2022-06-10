import { Request, Response } from 'express';
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';


//Trae las ordenes pendientes por comercio
export const getOrdersCompanySlopes = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id_company = req.params.id_company;
    let result: QueryResult = await cliente.query(
        `SELECT * FROM orders WHERE status_order = 'En espera' AND id_company= $1;`, [id_company]);
    try {
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

//Pedidos pendientes para el siguiente día
export const getOrdersDateDelivery = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query(
        `SELECT * FROM orders WHERE date_delivery = current_date + INTERVAL '1 day'`)
    try {
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(508).json({
            message: 'Error al traer las ordenes de mañana',
        });
    } finally {
        cliente.release(true)
    }
}

// Trae todas las ordenes de la fecha actual
export const getOrdersDateDeliveryToday = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query(
        `SELECT * FROM orders WHERE date_delivery = current_date - INTERVAL '1 day'`)
    try {
        if (result.rows.length === 0) {
            console.log('No hay ordenes para hoy');
            return res.status(204).json({ message: "No hay ordenes para hoy" });
        }
        else if (result.rows.length > 0) {
            return res.status(201).json(result.rows);
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer las ordenes de hoy',
        });
    } finally {
        cliente.release(true)
    }
}

// Traer todas las entregas discriminadas
export const getDiscriminatedDeliveries = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query(
        `SELECT * FROM orders_view`)
    try {
        if (result.rows.length === 0) {
            console.log('No hay entregas discriminadas');
            return res.status(204).json({ message: "No hay ordenes para hoy" });
        }
        else if (result.rows.length > 0) {
            return res.status(201).json(result.rows);
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer las entregas discriminadas',
        });
    } finally {
        cliente.release(true)
    }
}

// Traer todas las entregas discriminadas por comercio
export const getDeliveriesCompany = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id_company = req.params.id_company;
    let result: QueryResult = await cliente.query(
        `SELECT * FROM orders WHERE id_company = $1 ORDER BY status_order`, [id_company])
    try {
        if (result.rows.length === 0) {
            console.log('No hay ordenes para hoy');
            return res.status(204).json({ message: "No hay entregas discriminadas por comercio" });
        }
        else if (result.rows.length > 0) {
            return res.status(201).json(result.rows);
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer las entregas discriminadas por comercio',
        });
    } finally {
        cliente.release(true)
    }
}

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