import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';
import { createValidator } from 'express-joi-validation';
const validator = createValidator();

// Traer todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query('SELECT * FROM users');
        return res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al traer los usuarios',
        });
    } finally {
        //(Liberar) libera un cliente adquirido de vuelta al pool.
        //Debes llamar a client.release cuando hayas terminado con un cliente. Si te olvidas de liberar al cliente, tu aplicación agotará rápidamente los clientes disponibles e inactivos en el pool y todas las llamadas posteriores a pool.connect se agotarán con un error o se colgarán indefinidamente si tienes configurado connectionTimeoutMillis a 0.
        // El true significa que indicará al pool que desconecte y destruya este cliente, dejando un espacio dentro de sí mismo para un nuevo cliente.
        // indicar al pool que destruya a este cliente
        cliente.release(true)
    }
}

// Crear usuario
export const postUser = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query
            ('INSERT INTO users(email, document, name, lastname, phone, delivery_man_status, vehicle, rol, user_image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
                [req.body.email, req.body.document, req.body.name, req.body.lastname, req.body.phone, req.body.delivery_man_status, req.body.vehicle, req.body.rol, req.body.user_image]);
        return res.status(201).json(`Usuario creado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al crear el usuario',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar usuario PUT
export const putUser = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    try {
        let result: QueryResult = await cliente.query
            ('UPDATE users SET email=$1, document=$2, name=$3, lastname=$4, phone=$5, delivery_man_status=$6, vehicle=$7, rol=$8, user_image=$9 WHERE id_user=$10', 
                [req.body.email, req.body.document, req.body.name, req.body.lastname, req.body.phone, req.body.delivery_man_status, req.body.vehicle, req.body.rol, req.body.user_image, id]);
        return res.status(201).json(`Usuario con id: ${id}, editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar el usuario',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar usuario PATCH
export const patchUser = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    try {
        const fields = Object.keys(req.body);
        const fieldsQuery = fields.map(field => {
            if(typeof req.body[`${field}`] === 'string'){
                return `${field} = '${req.body[`${field}`]}'`
            }else{
                return `${field} = ${req.body[`${field}`]}`
            }
        });
        await cliente.query(`UPDATE users SET ${fieldsQuery.join()} WHERE id_user = '${id}'`);
        return res.status(201).json(`Usuario con id: ${id}, editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(508).json({
            message: 'Error al editar el usuario',
        });
    } finally {
        cliente.release(true)
    }
}

// Eliminar usuario
export const deleteUser = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let id = req.params.id;
    try {
        let result: QueryResult = await cliente.query
            ('DELETE FROM users WHERE id_user=$1', [id]);
        return res.status(201).json(`Usuario con id: ${id}, eliminado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al eliminar el usuario',
        });
    } finally {
        cliente.release(true)
    }
}