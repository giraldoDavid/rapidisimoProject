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

//Total entregas hoy(en número)
export const getNumOrdersToday = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query(
        `SELECT * FROM orders WHERE date_delivery = current_date - INTERVAL '1 day'`)
    try {
        
        if (result.rowCount === 0) {
            console.log('No hay ordenes para hoy');
            return res.status(204).json({ message: "No hay ordenes entregadas" });
        }
        else if (result.rowCount > 0) {
            const numOrders = result.rowCount;
            return res.status(201).json({numOrders});
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


