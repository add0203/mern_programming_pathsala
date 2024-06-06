const express = require("express");
const {
  genrateImage,
  getAllImages,
} = require("../constroller/imageController");
const router = express.Router();

// Route get image
router.route("/genrateImage").post(genrateImage);
router.route("/history").get(getAllImages);

module.exports = router;
