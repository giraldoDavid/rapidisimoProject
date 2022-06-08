import * as Joi from 'joi';

const mailSchema = Joi.object({
    nombre: Joi.string().required(),
    comercio: Joi.string().required(),
    horario: Joi.string().required(),
    email: Joi.string().email().required()
})

export default mailSchema