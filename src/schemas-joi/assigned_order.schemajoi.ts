import * as Joi from 'joi';

export const assignedOrderSchema = Joi.object().keys({
    order_id: Joi.number().integer(),
    id_user: Joi.number().integer().required(),
    id_order: Joi.number().integer().required(),
});

export const assignedOrderSchemaPatch = Joi.object().keys({
    order_id: Joi.number().integer(),
    id_user: Joi.number().integer(),
    id_order: Joi.number().integer()
});
