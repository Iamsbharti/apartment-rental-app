const mongoose = require("mongoose");
const User = require("./User");

let apartmentSchema = mongoose.Schema({
  apartmentId: {
    type: String,
    required: true,
  },
  name: {
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
  rent: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    default: 1,
  },
  owned: {
    type: Boolean,
    default: false,
  },
  postedOn: {
    type: Date,
    default: Date.now(),
  },
  interestedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
module.exports = mongoose.model("Apartment", apartmentSchema);
