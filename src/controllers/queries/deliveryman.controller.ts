import { Request, Response } from 'express';
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';

// Traer la información del repartidor segun id
export const getDeliveryManById = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query('SELECT * FROM users WHERE id_user=$1;', [id]);
    try {
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
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
    let result: QueryResult = await cliente.query(
        `SELECT * FROM assigned_order 
            RIGHT JOIN orders ON assigned_order.id_order = orders.id_order 
            WHERE id_delivery_man = $1;`, [id]);
    try {
        if (result.rows[0] !== undefined) {
            return res.status(201).json(result.rows);
        } else {
            return res.status(202).json(`El repartidor con id: ${id}, no ha realizado ninguna entrega`)
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer las ordenes del repartidor',
        });
    } finally {
        cliente.release(true)
    }
}


//Traer los repartidores disponibles
export const getDeliveryManAvailable = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query("SELECT * FROM users WHERE delivery_man_status= 'Disponible'");
    try {
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer los repartidores disponibles',
        });
    }
}


// Entregas por repartidor (fecha actual)
export const getDeliveriesByDeliveryMan = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query(`SELECT
    id_delivery_man,
    id_company,
    orders.id_order,
    client_email,
    client_name,
    client_phone,
    client_address,
    date_delivery,
    estimated_time,
    order_cost
FROM
    assigned_order
    INNER JOIN users ON assigned_order.id_delivery_man = users.id_user
    INNER JOIN orders ON assigned_order.id_order = orders.id_order
    WHERE orders.date_delivery = current_date - INTERVAL '1 day' AND assigned_order.id_delivery_man = $1;`, [id]);
    try {
        return res.status(201).json(result.rows)
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: "Error al traer las ordenes del repartidor"
        })
    }
}

// Entrega de repartidor (rango de fechas)
export const getDeliveriesByDeliveryManRange = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let startDate = req.params.startDate;
    let endDate = req.params.endDate;
    let result: QueryResult = await cliente.query(`SELECT
    id_delivery_man,
    id_company,
    orders.id_order,
    client_email,
    client_name,
    client_phone,
    client_address,
    date_delivery,
    estimated_time,
    order_cost,
    status_order
FROM
    assigned_order
    INNER JOIN users ON assigned_order.id_delivery_man = users.id_user
    INNER JOIN orders ON assigned_order.id_order = orders.id_order
    WHERE assigned_order.id_delivery_man = $1 AND orders.date_delivery >= $2 AND orders.date_delivery <= $3;`, [id, startDate, endDate]);
    try {
        if (result.rowCount !== 0) {
            return res.status(201).json(result.rows)
        } else {
            return res.status(202).json({ message: 'No hay entregas en el rango de fechas' })
        }
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: "Error al traer las ordenes del repartidor por el rango de fecha"
        })
    }
}