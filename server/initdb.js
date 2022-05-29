const mongoose = require("mongoose");
require("dotenv").config();
const logger = require("./library/logger");

const initdb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.on("error", (error) => {
    logger.error(`Error Connection Apartment-rental DB: ${error.message}`);
  });
  mongoose.connection.on("open", () => {
    logger.info(`Apartment-rental DB Connection UP`);
  });
};

module.exports = { initdb };
