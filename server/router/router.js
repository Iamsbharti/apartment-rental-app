const router = require("express").Router();
const pingTest = require("../controller/pingController");
const { registerUserControl } = require("../controller/registerUserController");
const validations = require("../middlewares/requestValidation");
const { loginUserControl } = require("../controller/loginUserController");
const {
  addApartment,
  getAllApartments,
} = require("../controller/apartmentController");
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

// add apartment route
router.post("/add", validations.addApartmentValidation, addApartment);

//get all apartments
router.get("/get/all", getAllApartments);
module.exports = router;
