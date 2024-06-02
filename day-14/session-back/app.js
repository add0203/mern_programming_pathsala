const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
const authRouter = require("./routes/authRouter");
const cors = require("cors");

app.use(express.json());
// app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:1234");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app;
