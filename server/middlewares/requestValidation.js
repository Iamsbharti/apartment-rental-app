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
    password: joi.min(3).required(),
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
const addApartmentValidation = async (req, res, next) => {
  logger.info("Add apartment  Validation");
  let addApartMentSchema = joi.object({
    owner: joi.string().min(4).required(),
    name: joi.string().min(4).required(),
    size: joi.number().min(1).required(),
    rooms: joi.number().min(1).required(),
    address: joi.string().min(4).required(),
    rent: joi.number().min(1).required(),
    deposit: joi.number().min(1).required(),
  });
  let { error } = addApartMentSchema.validate(req.body, options);
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
  addApartmentValidation,
};
