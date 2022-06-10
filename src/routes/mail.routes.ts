import express from 'express';
import { createValidator } from 'express-joi-validation';
import mailSchema from '../schemas-joi/mail.schemajoi';
import { mailOrder } from '../controllers/mail/mail_orden.controller';
import { sendMail } from '../controllers/mail/mail.controller';

export const mailRouter = express.Router()

mailRouter.use(express.json())
const validator = createValidator()

mailRouter.post( '/send_code', validator.body(mailSchema), sendMail)
mailRouter.post( '/mailAssignedOrden', mailOrder)                               //NUEVO SERVICIO