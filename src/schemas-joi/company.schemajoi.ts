import * as Joi from 'joi';

export const companySchema = Joi.object().keys({
    id_company: Joi.number(),
    email_company: Joi.string().email().max(50).required(),
    name_company: Joi.string().max(50).required(),  
    phone_company: Joi.string().max(13).required(),
    city: Joi.string().max(50).required(),
    neighborhood: Joi.string().max(50).required(),
    companie_address: Joi.string().max(100).required(),
    close_time_company: Joi.string().max(8).required(),
    company_latitude: Joi.number(),
    company_longitude: Joi.number(),
});

export const companySchemaPatch = Joi.object().keys({
    id_company: Joi.number(),
    email_company: Joi.string().email().max(50),
    name_company: Joi.string().max(50),  
    phone_company: Joi.string().max(13),
    city: Joi.string().max(50),
    neighborhood: Joi.string().max(50),
    companie_address: Joi.string().max(100),
    close_time_company: Joi.string().max(8),
    company_latitude: Joi.number(),
    company_longitude: Joi.number(),
});