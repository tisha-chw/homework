const Joi = require("joi");

module.exports = Joi.object({
  lastName: Joi.string().required(),
  middleName: Joi.string().required(),
  login: Joi.string().required(),
  firstName: Joi.string().required(),
  password: Joi.string().required(),
  birthDate: Joi.string().required(),
  passportSerial: Joi.string().required(),
  passportNumber: Joi.string().required(),
});
