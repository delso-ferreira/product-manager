const Joi = require('joi');

const MIN_NAME = 5;

const validateProductName = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    if (name.length < MIN_NAME) {
        return res.status(422).json({
            message: '"name" length must be at least 5 characters long'
        });
    }

    next();
};

const validateProduct = (req, res, next) => {
    const { name } = req.body;
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
    });
    const { error } = schema.validate({ name });
    if (error) {
        const statusCode = error.details[0].type === 'string.min' ? 422 : 400;
        return res.status(statusCode)
            .json({ message: error.message });
    }
    next();
};

module.exports = {
    validateProductName,
    validateProduct,
};