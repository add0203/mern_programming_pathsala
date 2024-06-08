const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
const authRouter = require("./routes/authRouter");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

app.use(express.json());
app.use(cors());

cloudinary.config({
  cloud_name: process.env.your_cloud_name,
  api_key: process.env.your_api_key,
  api_secret: process.env.your_api_secret,
});

app.use("/api/v1/auth", authRouter);

app.use(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  try {
    console.log("token-checking");
    jwt.verify(token, process.env.JWT_SECRET);
    console.log("token-varified");
    // const userPoints = localStorage.getItem("userPoints");
    // if (!userPoints === 0)
    next();
    // else {
    //   console.log("userPoint is Zero");
    //   return res.status(201).json({
    //     status: "userPoints = 0",
    //     message: "Payment required",
    //   });
    // }
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Login required",
    });
  }
});
app.use("/api/v1/image", imageRouter);

module.exports = app;
