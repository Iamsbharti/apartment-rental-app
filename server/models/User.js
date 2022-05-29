const mongoose = require("mongoose");
const Apartment = require("./Apartment");
let userSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  apartmentInterests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartment",
    },
  ],
  apartmentPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Apartment" }],
});
module.exports = mongoose.model("User", userSchema);
