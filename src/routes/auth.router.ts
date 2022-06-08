import express from "express";
import { createUser, logIn} from '../controllers/firebase/firebase.controller';
import authSchema from "../schemas-joi/auth.schemajoi";
import { createValidator } from 'express-joi-validation';
const validator = createValidator();

export const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post('/createUser', validator.body(authSchema), createUser)
authRouter.post('/logIn', validator.body(authSchema), logIn )