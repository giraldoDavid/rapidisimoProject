import express from "express";
import { createUser, logIn} from '../controllers/firebase/firebase.controller';
import authSchema from "../schemas-joi/auth.schemajoi";
import { createValidator } from 'express-joi-validation';
import { validateUser } from '../controllers/firebase/validate_user.controller';
import { validateRol } from '../controllers/firebase/validate_rol.controller';

// Importando la validación del token
import { decodeToken } from '../firebase/manage.token';

const validator = createValidator();

export const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post('/logIn', validator.body(authSchema), logIn )
authRouter.post('/createUser', validator.body(authSchema), createUser)
authRouter.get('/validateUser', decodeToken, validateUser)

authRouter.get('/validateRol', decodeToken, validateRol)