import * as Joi from 'joi';

export const assignedOrderSchema = Joi.object().keys({
    id_assigned: Joi.number().integer(),
    id_delivery_man: Joi.number().integer().required(),
    id_order: Joi.number().integer().required(),
});

export const assignedOrderSchemaPatch = Joi.object().keys({
    id_assigned: Joi.number().integer(),
    id_delivery_man: Joi.number().integer(),
    id_order: Joi.number().integer()
});
