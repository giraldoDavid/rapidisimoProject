import * as Joi from 'joi';

export const userSchema = Joi.object().keys({
    email: Joi.string().email().max(50).required(),
    document: Joi.number().required(),
    name: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    phone: Joi.string().max(13).required(),
    delivery_man_status: Joi.string().max(17),
    vehicle: Joi.string().max(9),
    rol: Joi.string().max(12)
});

export const userSchemaPatch = Joi.object().keys({
    email: Joi.string().email().max(50),
    document: Joi.number(),
    name: Joi.string().max(50),
    lastname: Joi.string().max(50),
    phone: Joi.string().max(13),
    delivery_man_status: Joi.string().max(17),
    vehicle: Joi.string().max(9),
    rol: Joi.string().max(12)
});