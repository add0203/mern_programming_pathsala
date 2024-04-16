let figlet = require("figlet");

// figlet("ANAND DHAR DWIVEDI", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const url = "https://api.github.com/users/add0203";

// .then methods

// let callApi = (() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// })();

// async await methods
console.log("hello");

const a = async () => {
  console.log("function enterd");
  const pr = await fetch("https://api.github.com/users/add0203");
  console.log("fetching from api");
  const data = await pr.json(); //await dont let next code inside async function get executed
  console.log(data);
  console.log("converting json");
};
console.log("bye");
a();

// custom promise
