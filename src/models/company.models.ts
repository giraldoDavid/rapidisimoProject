import * as Joi from 'joi';

export const companySchema = Joi.object().keys({
    email_company: Joi.string().email().max(50).required(),
    name_company: Joi.string().max(50).required(),  
    phone_company: Joi.string().max(13).required(),
    city: Joi.string().max(50).required(),
    neighborhood: Joi.string().max(50).required(),
    streat: Joi.string().max(50).required(),
    career: Joi.string().max(50).required(),
    close_time_company: Joi.string().max(8).required()
});

export const companySchemaPatch = Joi.object().keys({
    email_company: Joi.string().email().max(50),
    name_company: Joi.string().max(50),  
    phone_company: Joi.string().max(13),
    city: Joi.string().max(50),
    neighborhood: Joi.string().max(50),
    streat: Joi.string().max(50),
    career: Joi.string().max(50),
    close_time_company: Joi.string().max(8)
});