let express = require("express");

let app = express();

app.get("/home", (req, res) => {
  res.send("home get");
});
app.post("/home", (req, res) => {
  res.send("home post");
});
app.delete("/home", (req, res) => {
  res.send("home delete");
});
app.get("/", (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.listen(3000, () => {
  console.log("hi");
});
