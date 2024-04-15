// Import the http module
const http = require("http");
// const url = require("url");
// Define the port number
const port = 3001;

// let styleTemp = `

// <style>
//     /* Car styling */
//     .car {
//         position: relative;
//         width: 100px;
//         height: 50px;
//         background-color: #333;
//         border-radius: 10px;
//         animation: moveCar 5s linear infinite;
//     }

//     /* Animation keyframes */
//     @keyframes moveCar {
//         0% { left: 0; }
//         50% { left: calc(100% - 100px); }
//         100% { left: 0; }
//     }
// </style>
// `;
// let htmlTemplate1 = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Input Form</title>
//     ___style___
// </head>
// <body>
//     ___card___
// </body>
// </html>
// `;

// // let page = htmlTemplate1.replace("___style___", styleTemp);
// // page = page.replace("___card___", `<div class="car"></div>`);

// let car1 = `<div class="car" style="position: relative; width: 300px; height: 150px; background-color: #e6e6e6; border-radius: 10px; overflow: hidden;">___car___</div>`;
// let car2 = `<div class="car" style="position: relative; width: 300px; height: 150px; background-color: #e6e6e6; border-radius: 10px; overflow: hidden;">___car___</div>`;
// let car = car1 + car2;

// let page2 = htmlTemplate1
//   .replace("___style___", styleTemp)
//   .replace("___card___", car)
//   .replace(
//     "___car___",
//     `
//         <div class="window left" style="position: absolute; background-color: #4d4d4d; border-radius: 50%; top: 30px; left: 30px; width: 60px; height: 60px;"></div>
//         <div class="window right" style="position: absolute; background-color: #4d4d4d; border-radius: 50%; top: 30px; right: 30px; width: 60px; height: 60px;"></div>
//         <div class="wheel front-wheel" style="position: absolute; background-color: #333; border-radius: 50%; top: 100px; left: 30px; width: 50px; height: 50px;"></div>
//         <div class="wheel rear-wheel" style="position: absolute; background-color: #333; border-radius: 50%; top: 100px; right: 30px; width: 50px; height: 50px;"></div>`
//   );

// let htmlTemplate3 = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Your Title Here</title>
//     <style>
//         /* Your CSS styles here */
//     </style>
// </head>
// <body>
//     <!-- Your HTML content here -->

//     <script>
//         // Your JavaScript code here
//     </script>
// </body>
// </html>

// `;

// let weatherAppJs = `console.log("hi");
// // BGSL3ZAMRMQTEJ5YA5WXD7K8U

// const url =
//   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=BGSL3ZAMRMQTEJ5YA5WXD7K8U";

// const weatherAPI = (() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => weatherUI(data))
//     .catch((err) => console.log(err));
// })();

// const weatherUI = (data) => {
//   const root = document.getElementById("root");
//   for (let i = 0; i < 10; i++) {
//     console.log(data.days[i]);

//     const dt = data.days[i];

//     const row = document.createElement("tr");
//     // const childRow = document.createElement("row");

//     let cell = document.createElement("td");
//     cell.innerText = dt.datetime;
//     // childRow.appendChild(cell);
//     row.appendChild(cell);

//     let cell1 = document.createElement("td");
//     cell1.innerText = dt.tempmax;

//     row.appendChild(cell1);

//     let cell2 = document.createElement("td");
//     cell2.innerText = dt.tempmin;
//     row.appendChild(cell2);

//     root.appendChild(row);
//   }
// };
// `;

// let weatherAppHtml = `<div>
//       <table id="root">
//         <tr>
//           <th>Date</th>
//           <th>Maximum Temperature</th>
//           <th>Minimum Temprature</th>
//         </tr>
//         <!-- Add your table rows here -->
//       </table>
//     </div>`;

// let weatherAppCss = `
//       body {
//         font-family: Arial, sans-serif;
//         margin: 0;
//         padding: 0;
//       }

//       #root {
//         margin: 20px; /* Adjust margin as needed */
//       }

//       table {
//         width: auto; /* Set width to auto */
//         border-collapse: collapse;
//       }

//       th,
//       td {
//         padding: 8px; /* Adjust padding as needed */
//         border: 1px solid #ddd; /* Add borders for better readability */
//         text-align: left; /* Align text to the left */
//       }

//       th {
//         background-color: #f2f2f2; /* Add background color to header */
//       }
//     `;

// let page = htmlTemplate3
//   .replace("/* Your CSS styles here */", weatherAppCss)
//   .replace("<!-- Your HTML content here -->", weatherAppHtml)
//   .replace("// Your JavaScript code here", weatherAppJs);

// // console.log(page);

const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf8");
// const htmldata = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data);
const productData = dataObj.products;
// console.log(productData);

let htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Title Here</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>
<body>
  __html__
    <script>
        // Your JavaScript code here
    </script>
</body>
</html>
`;

let cardDummy = `<div> __title__
   __description__</div>`;

let cards = htmlTemplate.replace(`__html__`, cardDummy);

// let page = htmlTemplate.replace(
//   ` <!-- Your HTML content here -->
// `,
//   productData[0].title
// );

const allCard = productData.map((ele) => {
  let page = cards
    .replace(`__title__`, ele.title)
    .replace(`____description____`, ele.description);
  return page;
});

const allcardString = allCard.join(" ");
const page = htmlTemplate.replace("");

// !Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  //   console.log(car);
  //
  // Send a res log at console at every call
  //   console.log("api clicked");
  //   console.log(req.url);

  //   console.log(Object.keys(req.url));
  //   res.end("Hello, World!\n");
  res.end(allcard);
});

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
