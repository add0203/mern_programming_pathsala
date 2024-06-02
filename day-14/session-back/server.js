require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app.js");

// const test = require("./models/reviewModel.js");

const URL =
  "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@clustor0.pc5ijeq.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=clustor0";

// const dbUsername = process.env.dbUsername;
// const dbPass = process.env.dbPass;
// const dbName = process.env.dbName;

let dbLink = URL.replace("$_USERNAME_$", process.env.dbUsername);
dbLink = dbLink.replace("$_PASSWORD_$", process.env.dbPass);
dbLink = dbLink.replace("$_DB_NAME_$", process.env.dbName);

// console.log(process.env.car);

mongoose.connect(dbLink).then(() => {
  console.log("-------- Database Connected --------");
  // dbDataUpload();
});

app.listen(5001, () => {
  console.log("----------- App Started -----------");
});
