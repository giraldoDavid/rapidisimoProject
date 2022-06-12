import express from "express";
import { createUser, logIn} from '../controllers/firebase/firebase.controller';
import authSchema from "../schemas-joi/auth.schemajoi";
import { createValidator } from 'express-joi-validation';

// Importando la validación del token
import { decodeToken } from '../firebase/manage.token';

const validator = createValidator();

export const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post('/logIn', validator.body(authSchema), logIn )
authRouter.post('/createUser', decodeToken, validator.body(authSchema), createUser)