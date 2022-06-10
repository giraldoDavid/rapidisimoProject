import express from 'express';
import { createValidator } from 'express-joi-validation';
import mailSchema from '../schemas-joi/mail.schemajoi';
import { mailOrder } from '../controllers/mail/mail_orden.controller';

export const mailRouter = express.Router()

mailRouter.use(express.json())
const validator = createValidator()

mailRouter.post( '/mailAssignedOrden', mailOrder)                               //NUEVO SERVICIO