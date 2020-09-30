const Joi = require("@hapi/joi");

const loginObj = {
  email: Joi.string().min(3).required().email(),
  password: Joi.string().min(6).required(),
};
const loginValidationSchema = Joi.object(loginObj);

const userValidationSchema = Joi.object({
  ...loginObj,
  name: Joi.string().min(3).required(),
});

const regiserValidation = (data) => {
  return userValidationSchema.validate(data);
};

const loginValidation = (data) => {
  return loginValidationSchema.validate(data);
};

module.exports = {
  regiserValidation,
  loginValidation,
};
