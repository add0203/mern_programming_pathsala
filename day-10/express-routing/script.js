let express = require("express");
const fsPromises = require("fs/promises");
const app = express();
const productRouter = require("./routers/productsRouter");
const userRouter = require("./routers/usersRoutes");

let port = 4000 || process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log("middleware called : ");
  fsPromises.appendFile("./log.txt", req.url + "\t" + time + "\n");
  next();
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
