const express = require("express");
const { signUp, login } = require("../constroller/authController");
const router = express.Router();

// Route get image
router.route("/signUp").post(signUp);
router.route("/logIn").post(login);

module.exports = router;
