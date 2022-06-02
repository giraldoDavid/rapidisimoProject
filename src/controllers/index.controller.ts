import { Request, Response } from 'express';
import { pool } from '../data-base/config.postgres';
import { QueryResult } from 'pg';

// Traer todos los usuarios
export const getAllUsuarios = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query('SELECT * FROM usuarios');
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
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
export const postUsuario = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let result: QueryResult = await cliente.query
            ('INSERT INTO usuarios(email, rol) VALUES($1, $2)', [req.body.email, req.body.rol]);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al crear el usuario',
        });
    } finally {
        cliente.release(true)
    }
}

// Editar usuario
export const patchUsuario = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let email = req.params.email;
    try {
        let result: QueryResult = await cliente.query
            ('UPDATE usuarios SET rol=$2 WHERE email=$1', [email, req.body.rol]);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al editar el usuario',
        });
    } finally {
        cliente.release(true)
    }
}

// Eliminar usuario
export const deleteUsuario = async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    let email = req.params.email;
    try {
        let result: QueryResult = await cliente.query
            ('DELETE FROM usuarios WHERE email=$1', [email]);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al eliminar el usuario',
        });
    } finally {
        cliente.release(true)
    }
}