const express = require("express");
const app = express();
const imageRouter = require("./routes/imageRouter");
const authRouter = require("./routes/authRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app;
