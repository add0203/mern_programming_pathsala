const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  // title: String,
  title: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    // unique: true,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = mongoose.model("Products", productsSchema);
const productsModel = mongoose.model("products", productsSchema);

// const testProduct = new productModel({
//   titile: "diper",
//   price: 2234,
// });

// testProduct.save().then((res) => {
//   console.log(res);
// });

module.exports = productsModel;
