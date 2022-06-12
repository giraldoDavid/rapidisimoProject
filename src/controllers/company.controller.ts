import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';

// Importando los esquemas para las rutas
import { assignedOrderSchema } from "../schemas-joi/assigned_order.schemajoi";
import { AnyMxRecord } from 'dns';

// Obtener todos las empresas y/o compañias registradas
export const getAllCompanies = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let result: QueryResult = await cliente.query('SELECT * FROM company');
    try {
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al traer las empresas',
        });
    } finally {
        cliente.release(true)
    }
};

// Crear una nueva empresa
export const postCompany = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    const { email_company, name_company, phone_company, city, neighborhood, streat, career, close_time_company } = req.body;
    let result: QueryResult = await cliente.query
        ('INSERT INTO company (email_company, name_company, phone_company, city, neighborhood, streat, career, close_time_company) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [name_company, email_company, phone_company, city, neighborhood, streat, career, close_time_company]);
    try {
        return res.status(201).json(`Empresa creada con exito`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al crear la empresa',
        });
    } finally {
        cliente.release(true)
    }
};

// Editar una empresa (PUT)
export const putCompany = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    const id_company = req.params.id;
    const { email_company, name_company, phone_company, city, neighborhood, streat, career, close_time_company } = req.body;
    let result: QueryResult = await cliente.query
        ('UPDATE company SET email_company=$1, name_company=$2, phone_company=$3, city=$4, neighborhood=$5, streat=$6, career=$7, close_time_company=$8 WHERE id_company=$9',
            [email_company, name_company, phone_company, city, neighborhood, streat, career, close_time_company, id_company]);
    try {
        return res.status(201).json(`Empresa con id: ${id_company}, editada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la empresa',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar una empresa (Patch)
export const patchCompany = async (req: Request, res: Response) => {
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
    await cliente.query(`UPDATE company SET ${fieldsQuery.join()} WHERE id_user = '${id}'`);
    try {
        return res.status(201).json(`Compañia con id: ${id}, se ha editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar la compañia',
        });
    } finally {
        cliente.release(true)
    }
}

// Eliminar una empresa
export const deleteCompany = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    let result: QueryResult = await cliente.query('DELETE FROM company WHERE id_company = $1', [id]);
    try {
        return res.status(201).json(`Empresa con id: ${id}, eliminada satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al eliminar la empresa',
        });
    } finally {
        cliente.release(true)
    }
}