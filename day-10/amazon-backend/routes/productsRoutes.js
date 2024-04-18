const express = require("express");

// controller import
const productController = require("../controllers/productsController.js");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.postProducts)
  .delete(productController.deleteProduct);

productRouter
  .route("/:id")
  .put(productController.replaceProduct)
  .patch(productController.patchProduct);

productRouter.route("/delById/:id").delete(productController.deleteProductById);

module.exports = productRouter;
