import { Request, Response } from 'express'
import sendEmail from '../../utilities/sendgrid'
import templateIds from '../../constants/templateid.const'
import generatecode from '../../utilities/generatecode'


export const sendMail = async (_req: Request, res: Response) => {
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