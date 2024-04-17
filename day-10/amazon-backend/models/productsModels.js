const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  titile: String,
  price: Number,
});

// module.exports = mongoose.model("Products", productsSchema);
const productModel = mongoose.model("products", productsSchema);

const testProduct = new productModel({
  titile: "diper",
  price: 2234,
});

testProduct.save().then((res) => {
  console.log(res);
});
