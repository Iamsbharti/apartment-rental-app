const router = require("express").Router();
const pingTest = require("../controller/pingController");
const { registerUserControl } = require("../controller/registerUserController");
const validations = require("../middlewares/requestValidation");
const { loginUserControl } = require("../controller/loginUserController");

// ping
router.get("/ping", pingTest);

// register user route
router.post(
  "/register",
  validations.registerUserValidation,
  registerUserControl
);

// login user route
router.post("/login", validations.loginUserValidation, loginUserControl);

module.exports = router;
