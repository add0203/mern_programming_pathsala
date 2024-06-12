const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: "default-user",
  },
  userCoins: {
    type: Number,
    // default: 5,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
