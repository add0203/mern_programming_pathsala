const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Route import
const productRouter = require("./routes/productsRoutes");

const test = require("./models/productsModels.js");

app.use("/api/products", productRouter);

const port = 5001 || process.env.PORT;

const URL =
  "mongodb+srv://$_USER_NAME_$:$_PASS_$@clustor0.pc5ijeq.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=clustor0";

const dbUsername = "addbd";
const dbPass = "GB8ZFjmmwkqYSiaZ";
const dbName = "Amazon-Backend";

const dbLink = URL.replace("$_USER_NAME_$", dbUsername)
  .replace("$_DB_NAME_$", dbName)
  .replace("$_PASS_$", dbPass);

mongoose.connect(dbLink).then(() => {
  console.log("db Connected");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
