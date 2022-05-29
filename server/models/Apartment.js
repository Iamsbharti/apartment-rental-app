const mongoose = require("mongoose");
let apartmentSchema = mongoose.Schema({
  apartmentId: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  monthlyRent: {
    type: Number,
    required: true,
  },
  securityDeposit: {
    type: Number,
    default: 1,
  },
  interestCount: {
    type: Number,
    default: 0,
  },
  postedOn: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Apartment", apartmentSchema);
