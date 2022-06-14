import * as Joi from 'joi';

export const ordersSchema = Joi.object().keys({
    id_order: Joi.number(),
    id_company: Joi.number().min(10000).max(99999).required(),
    client_email: Joi.string().email().max(50).required(),
    client_name: Joi.string().max(50).required(),
    client_phone: Joi.string().max(13).required(),
    client_address: Joi.string().max(50).required(),
    date_delivery: Joi.date().required(),
    estimated_time: Joi.string().max(8).required(),
    order_cost: Joi.number().min(0).max(999999),
    image_order: Joi.string(),
    status_order: Joi.string().max(50),
    rating: Joi.number().min(0).max(5),
    _id_tracking: Joi.string(),
});

export const ordersSchemaPatch = Joi.object().keys({
    id_order: Joi.number(),
    id_company: Joi.number().min(10000).max(99999),
    client_email: Joi.string().email().max(50),
    client_name: Joi.string().max(50),
    client_phone: Joi.string().max(13),
    client_address: Joi.string().max(50),
    date_delivery: Joi.date(),
    estimated_time: Joi.string().max(8),
    order_cost: Joi.number().min(0).max(999999),
    image_order: Joi.string(),
    status_order: Joi.string().max(50),
    rating: Joi.number().min(0).max(5),
    _id_tracking: Joi.string()
});