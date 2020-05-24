const Joi = require('@hapi/joi');

const registerValidation = function(data){
    const schema = Joi.object({
        Username: Joi.string()
        .required(),
        Email:Joi.string()
        .min(3)
        .max(30)
        .email()
        .required(),
        Password:Joi.string()
        .min(6)
        .max(30)
        .required()
    })
    return schema.validate(data)
}
const loginValidation = function(data){
    const schema = Joi.object({
        Email:Joi.string()
        .min(3)
        .max(30)
        .email()
        .required(),
        Password:Joi.string()
        .min(6)
        .max(30)
        .required()
    })
    return schema.validate(data)
}


module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;