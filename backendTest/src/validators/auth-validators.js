const Joi = require("joi");
const validate = require("../validators/validate");

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "any.required": "first name is required",
    "string.empty": "first name is required",
    "string.base": "first name must be a string"
  }),
  lastName: Joi.string().trim().required().messages({
    "any.required": "last name is required",
    "string.empty": "last name is required",
    "string.base": "last name must be a string"
  }),
  email: Joi.string().email({ tlds: false }),
  mobile: Joi.string().pattern(/^[0-9]{10}$/),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password must have at least 6 character"
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "password and confirm password did not match",
      "string.empty": "confirm password is required"
    })
    .strip()
});

exports.validateRegister = validate(registerSchema);

///////////////////////////////////////////////////////////////

const loginSchema = Joi.object({
  emailOrMobile: Joi.string().required(),
  password: Joi.string().required()
});
exports.validateLogin = validate(loginSchema);
