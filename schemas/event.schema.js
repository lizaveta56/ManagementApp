import Joi from 'joi';

export default {
    id: Joi.number(),
    title: Joi.string().min(3),
    description: Joi.string().min(5),
    creatorId: Joi.number()
};
