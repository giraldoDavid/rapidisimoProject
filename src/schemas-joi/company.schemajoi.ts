import * as Joi from 'joi';

export const companySchema = Joi.object().keys({
    id_company: Joi.number(),
    email_company: Joi.string().email().max(50).required(),
    name_company: Joi.string().max(50).required(),  
    phone_company: Joi.string().max(13).required(),
    city: Joi.string().max(50).required(),
    neighborhood: Joi.string().max(50).required(),
    close_time_company: Joi.string().max(8).required(),
    companie_address: Joi.string().max(50).required(),
    company_latitude: Joi.string().max(50).required(),
    company_longitude: Joi.string().max(50).required(),
});

export const companySchemaPatch = Joi.object().keys({
    id_company: Joi.number(),
    email_company: Joi.string().email().max(50),
    name_company: Joi.string().max(50),  
    phone_company: Joi.string().max(13),
    neighborhood: Joi.string().max(50),
    city: Joi.string().max(50),
    close_time_company: Joi.string().max(8),
    companie_address: Joi.string().max(50),
    company_latitude: Joi.string().max(50),
    company_longitude: Joi.string().max(50),
});