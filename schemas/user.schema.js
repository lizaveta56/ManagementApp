import Joi from 'joi';

export default {
    id: Joi.number(),
    fullName: Joi.string().min(1),
    email: Joi.string().email(),
    pass: Joi.string().min(1)
};
