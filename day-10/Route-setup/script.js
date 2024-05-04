const express = require("express");
const app = express();
// Route import
const productRouter = require("./routes/productsRoutes");

app.use("/api/products", productRouter);

const port = 5001 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
