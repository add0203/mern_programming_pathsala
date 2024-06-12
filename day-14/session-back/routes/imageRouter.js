const express = require("express");
const {
  generateImage,
  getAllImages,
} = require("../constroller/imageController");
const router = express.Router();

// Route get image
router.route("/genrateImage").post(generateImage);
router.route("/history").get(getAllImages);

module.exports = router;
