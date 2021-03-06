import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';

// Traer todos las ordenes GET
export const getAllOrders = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query('SELECT * FROM orders');
    try {
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer las ordenes',
        });
    } finally {
        cliente.release(true)
    }
}

// Traer una orden por id GET
export const getOrderById = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query('SELECT * FROM orders WHERE id_order=$1', [id]);
    try {
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error identificar la orden por el id',
        });
    } finally {
        cliente.release(true)
    }
}

// Crear orden POST
export const postOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query
        (`INSERT INTO orders(id_company, client_email, client_name, client_phone, client_address, date_delivery, estimated_time, order_cost, image_order, status_order, rating, _id_tracking) 
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
            [req.body.id_company,
            req.body.client_email,
            req.body.client_name,
            req.body.client_phone,
            req.body.client_address,
            req.body.date_delivery,
            req.body.estimated_time,
            req.body.order_cost,
            req.body.image_order,
            req.body.status_order,
            req.body.rating,
            req.body._id_tracking,]);
    try {
        return res.status(201).json(`Orden creada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al crear la orden',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar orden PUT
export const putOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query
            ('UPDATE orders SET id_company=$1, client_email=$2, client_name=$3, client_phone=$4, client_address=$5, date_delivery=$6, estimated_time=$7, order_cost=$8, image_order=$9, status_order=$10, rating=$11, _id_tracking=$12 WHERE id_order=$13',
                [req.body.id_company,
                req.body.client_email,
                req.body.client_name,
                req.body.client_phone,
                req.body.client_address,
                req.body.date_delivery,
                req.body.estimated_time,
                req.body.order_cost,
                req.body.image_order,
                req.body.status_order,
                req.body.rating,
                req.body._id_tracking,
                id]);
    try {
        return res.status(201).json(`Orden con id: ${id}, editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la orden',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar orden PATCH
export const patchOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    const fields = Object.keys(req.body);
    const fieldsQuery = fields.map(field => {
        if (typeof req.body[`${field}`] === 'string') {
            return `${field} = '${req.body[`${field}`]}'`
        } else {
            return `${field} = ${req.body[`${field}`]}`
        }
    });
    await cliente.query(`UPDATE orders SET ${fieldsQuery.join()} WHERE id_order = '${id}'`);
    try {
        return res.status(201).json(`Orden con id: ${id}, editada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la orden',
        });
    } finally {
        cliente.release(true)
    }
}

// Eliminar orden DELETE
export const deleteOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query
        ('DELETE FROM orders WHERE id_order=$1', [id]);
    try {
        return res.status(201).json(`Orden con id: ${id}, eliminada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al eliminar la orden',
        });
    } finally {
        cliente.release(true)
    }
}