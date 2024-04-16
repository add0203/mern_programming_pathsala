const http = require("http");
const fs = require("fs");
let url = require("url");
const { json } = require("express");
const data = fs.readFileSync("./data.json", "Utf8");
const htmlTemplate = fs.readFileSync("./template/page.html", {
  encoding: "utf8",
});
const cardTemplate = fs.readFileSync("./template/card.html", "utf8");
// const htmlCard = fs.readFileSync('./template/singleCard.html", "utf8"');

const htmlCard = `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Cards</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f0f0;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
    }

    .card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin: 20px;
      max-width: 300px;
      padding: 20px;
      text-align: center;
    }

    .card img {
      max-width: 100%;
      border-radius: 8px;
    }

    .card h3 {
      color: #333;
      margin-top: 10px;
    }

    .card p {
      color: #666;
      margin-top: 5px;
    }

    .card .price {
      color: #007bff;
      font-weight: bold;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <img src="__IMG__" alt="Product 1">
      <h3>__TITLE__</h3>
      <p>__INFO__</p>
      <p class="price">price : __PRICE__</p>
       <a href="__HOME_LINK__">home...</a>
    </div>
  </div>
</body>
</html>
`;

const searchInput = `
<form action='/product'>
          <input
            type="text" name="productName"
          />
          <button  type="submit">Search</button>
        </form>`;

const products = JSON.parse(data).products;

const allCards = products.map((elem, i) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("__TITLE__", elem.title);
  newCard = newCard.replace("__SEARCH__", searchInput);
  newCard = newCard.replace("__INFO__", elem.description);
  newCard = newCard.replace("__IMG__", elem.thumbnail);
  newCard = newCard.replace("__PRICE__", elem.price);
  newCard = newCard.replace("__DIS__", elem.discountPercentage);
  newCard = newCard.replace("__RATE__", elem.rating);
  newCard = newCard.replace("__product _link__", `/product?id=${i}`);
  return newCard;
});

// convert to string
const allCardsString = allCards.join(" ");
let page = htmlTemplate.replace("__PRODUCTS__CARDS__", allCardsString);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });

  const { pathname, query } = url.parse(req.url, true);

  console.log(query);
  // res.writeHead(200, { "content-type": "text/html" });

  if (pathname == "/home") {
    res.end(page + searchInput);
  } else if (pathname === "/product") {
    const id = query.id;
    let i = products[id];

    const pName = query.productName;

    console.log(pName);
    if (pName) {
      const checkProduct = products.filter((element) => {
        if (element.title.includes(pName)) {
          return true;
        } else {
          false;
        }
      });
      res.end(JSON.stringify(checkProduct));
    } else if (i) {
      let oneCard = htmlCard;
      oneCard = oneCard.replace("__TITLE__", i.title);
      oneCard = oneCard.replace("__INFO__", i.description);
      oneCard = oneCard.replace("__IMG__", i.thumbnail);
      oneCard = oneCard.replace("__PRICE__", i.price);
      oneCard = oneCard.replace(
        "__HOME_LINK__",
        `http://localhost:${port}/home`
      );
      res.end(oneCard);
    } else {
      res.end("error");
    }
  } else {
    res.end(`404`);
  }

  // res.end(page);
});

let port = 5001 || process.env.PORT;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
