const express = require("express");
const genrateImage = require("../constroller/imageController");
const router = express.Router();

// Route get image
router.route("/").post(genrateImage);

module.exports = router;
