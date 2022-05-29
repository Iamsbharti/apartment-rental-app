const User = require("../models/User");
const logger = require("../library/logger");
const apiResponse = require("../library/apiResponse");
const Apartment = require("../models/Apartment");
const shortid = require("shortid");
const addApartment = async (req, res) => {
  logger.info("Add Apartment controller");
  const { owner, name, size, rooms, address, rent, deposit } = req.body;

  // new apartment model
  let newApartment = {
    apartmentId: shortid.generate(),
    owner: owner,
    name: name,
    size: size,
    rooms: rooms,
    address: address,
    rent: rent,
    deposit: deposit,
  };
  // save apartment details
  Apartment.create(newApartment, (error, apartment) => {
    if (error) {
      return res
        .status(500)
        .json(apiResponse(true, "Internal Server Error", error.message));
    } else {
      let apartMentInfo = apartment.toObject();
      res
        .status(200)
        .json(
          apiResponse(false, "Apartment Posted Successfully", apartMentInfo)
        );
    }
  });
};
const getAllApartments = async (_req, res) => {
  logger.info("Get all apartments controller");
  Apartment.find((error, apartments) => {
    if (error) {
      return res
        .status(500)
        .json(apiResponse(true, "Internal Server Error", error.message));
    } else {
      res
        .status(200)
        .json(apiResponse(false, "Apartment Fetched Successfully", apartments));
    }
  });
};
module.exports = { addApartment, getAllApartments };
