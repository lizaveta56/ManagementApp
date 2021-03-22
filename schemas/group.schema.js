import Joi from 'joi';

export default {
    id: Joi.number(),
    groupName: Joi.string().min(1),
    groupTeacherId: Joi.number()
};
