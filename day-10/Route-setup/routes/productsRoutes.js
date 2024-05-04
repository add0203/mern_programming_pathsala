const express = require("express");

// controller import
const productController = require("../controllers/productsController.js");

const productRouter = express.Router();

productRouter.route("/").get(productController.getAllProducts);

module.exports = productRouter;
