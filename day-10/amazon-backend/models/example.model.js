const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});

const userModel = mongoose.model("User", userSchema); // User is bydefault converted to "users" in mongoDB collection
