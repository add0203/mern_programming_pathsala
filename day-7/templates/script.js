const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./data.json", "Utf8");
const htmlTemplate = fs.readFileSync("./template/page.html", {
  encoding: "utf8",
});
const cardTemplate = fs.readFileSync("./template/card.html", "utf8");

const products = JSON.parse(data).products;

const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("__TITLE__", elem.title);
  newCard = newCard.replace("__INFO__", elem.description);
  newCard = newCard.replace("__IMG__", elem.thumbnail);
  newCard = newCard.replace("__PRICE__", elem.price);
  newCard = newCard.replace("__DIS__", elem.discountPercentage);
  newCard = newCard.replace("__RATE__", elem.rating);
  return newCard;
});

const allCardsString = allCards.join(" ");
let page = htmlTemplate.replace("__PRODUCTS__CARDS__", allCardsString);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(page);
});

server.listen(1400, () => {
  console.log("...............Server Started!.....................");
});
