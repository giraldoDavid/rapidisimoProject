import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';

// Traer todos las ordenes asignadas GET
export const getAllAssignedOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query('SELECT * FROM assigned_order');
    try {
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer las ordenes asignadas',
        });
    } finally {
        cliente.release(true)
    }
}

// Asignar una orden POST
export const postAssignedOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query
            (`INSERT INTO assigned_order(id_delivery_man, id_order) VALUES($1, $2)`, 
                [req.body.id_delivery_man, req.body.id_order]);
    try {
        return res.status(201).json(`Orden asignada satisfactoriamente`);
    } catch (error) { false
        console.log(error);
        return res.status(508).json({
            message: 'Error al crear la orden',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar orden asignada PUT
export const putAssignedOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query
            ('UPDATE assigned_order SET id_delivery_man=$1, id_order=$2 WHERE id_assigned=$3', 
                [req.body.id_delivery_man, req.body.id_order, id]);
    try {
        return res.status(201).json(`Orden asignada con id: ${id}, editada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la orden asignada',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar orden asignada PATCH
export const patchAssignedOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    const fields = Object.keys(req.body);
        const fieldsQuery = fields.map(field => {
            if(typeof req.body[`${field}`] === 'string'){
                return `${field} = '${req.body[`${field}`]}'`
            }else{
                return `${field} = ${req.body[`${field}`]}`
            }
        });
        await cliente.query(`UPDATE assigned_order SET ${fieldsQuery.join()} WHERE id_assigned = '${id}'`);
    try {
        return res.status(201).json(`Orden asignada con id: ${id}, editada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la orden asignada',
        });
    } finally {
        cliente.release(true)
    }
}

// Eliminar una orden asignada DELETE
export const deleteAssignedOrder = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query
            ('DELETE FROM assigned_order WHERE id_assigned=$1', [id]);
    try {
        return res.status(201).json(`Orden asignada con id: ${id}, eliminada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al eliminar una orden asignada',
        });
    } finally {
        cliente.release(true)
    }
}