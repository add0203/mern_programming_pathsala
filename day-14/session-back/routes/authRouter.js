const express = require("express");
const { signUp } = require("../constroller/authController");
const router = express.Router();

// Route get image
router.route("/signUp").post(signUp);

module.exports = router;
