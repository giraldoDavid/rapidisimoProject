import { Request, Response } from 'express'
import sendEmail from '../../utilities/sendgrid'
import templateIds from '../../constants/templateid.const'
import generatecode from '../../utilities/generatecode'
import { pool } from '../../data-base/config.postgres';
import { QueryResult } from 'pg';


export const mailOrder = async (_req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        // Asignar orden a un repartidor
        let result: QueryResult = await cliente.query
            (`INSERT INTO assigned_order(id_delivery_man, id_order) VALUES($1, $2)`, 
                [_req.body.id_delivery_man, _req.body.id_order]);
        // consulta de la orden
        let order = await cliente.query(`SELECT * FROM orders WHERE id_order = $1`,
                [_req.body.id_order]);
        // consulta informacion de la empresa
        let company = await cliente.query(
            `SELECT * FROM orders 
                RIGHT JOIN company ON orders.id_company = company.id_company 
                WHERE id_order = $1`, [_req.body.id_order]);

        // Envio del correo al usuario
        const codigo = generatecode();
        await sendEmail(order.rows[0].client_email,
            {
                mensaje: 'Welcome to Rapidisimo',
                nombre: order.rows[0].client_name,
                comercio: company.rows[0].name_company,
                horario: order.rows[0].estimated_time,
                codigo
            },
            templateIds.SEND_CODE
        )
        return res.status(201).json(`Orden asignada y correo enviado a: ${order.rows[0].client_email}`);
    } catch (error) { false
        console.log(error);
        return res.status(508).json({
            message: 'Error asignada la orden y enviar el correo',
        });
    } finally {
        cliente.release(true)
    }
    
    
    
    
    
    
    
    
    
    
    try {
        const { nombre, comercio, horario, email } = _req.body;
        const codigo = generatecode();
        await sendEmail(email,
            {
                mensaje: 'Welcome to Rapidisimo',
                nombre,
                comercio,
                horario,
                codigo
            },
            templateIds.SEND_CODE
        )
        res.status(200).send(`¡Se ha enviado el correo de forma correcta al email: ${email}!`)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}