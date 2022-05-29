const joi = require("@hapi/joi");
const apiResponse = require("../library/apiResponse");
const logger = require("../library/logger");

let options = { abortEarly: false };

const registerUserValidation = async (req, res, next) => {
  logger.info("Register User Request Validation");
  let registerUserSchema = joi.object({
    name: joi.string().min(4).required(),
    email: joi.string().min(5).email().required(),
    mobile: joi.number().min(10).required(),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        )
      )
      .required(),
  });
  let { error } = registerUserSchema.validate(req.body, options);
  if (error) {
    let errorMessage = [];
    error.details.map((err) => errorMessage.push(err.message));
    return res.json(apiResponse(true, "InValid Input", errorMessage));
  }
  next();
};
const loginUserValidation = async (req, res, next) => {
  logger.info("Login User Request Validation");
  let loginUserSchema = joi.object({
    loginId: joi.string().min(4).required(),
    password: joi.string().min(5).required(),
  });
  let { error } = loginUserSchema.validate(req.body, options);
  if (error) {
    let errorMessage = [];
    error.details.map((err) => errorMessage.push(err.message));
    return res.json(apiResponse(true, "InValid Input", errorMessage));
  }
  next();
};
module.exports = {
  registerUserValidation,
  loginUserValidation,
};
