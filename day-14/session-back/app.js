const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
const authRouter = require("./routes/authRouter");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;


app.use(express.json());
app.use(cors());

const your_cloud_name = "dyfal2qlj";
const your_api_key = "735252581259248";
const your_api_secret = "HoRiAhYiA6IqEnVltya524znzWY";


cloudinary.config({
  cloud_name: your_cloud_name,
  api_key: your_api_key,
  api_secret: your_api_secret,
});

app.use("/api/v1/auth", authRouter);

app.use((req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  try {
      console.log("up");
      jwt.verify(token, process.env.JWT_SECRET);
      console.log("down");
    next();
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Login required",
    });
  }
});
app.use("/api/v1/image", imageRouter);

module.exports = app;
