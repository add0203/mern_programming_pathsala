// dates in js

let newDate = new Date();

console.log(newDate);
// 2023-10-16T16:11:36.199Z
console.log(newDate.toString());
// Mon Oct 16 2023 21:42:05 GMT+0530 (India Standard Time)
console.log(newDate.toDateString());
// Mon Oct 16 2023
console.log(newDate.toTimeString());
// 21:44:00 GMT+0530 (India Standard Time)
console.log(newDate.toLocaleDateString());
// 16/10/2023
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

// formated date
let formattedDate = newDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(formattedDate);

// storing date according to you.
let dateString = "2023-10-12";
let parsedDate = new Date(dateString);
console.log(parsedDate);

// (year, month(starts with zero), date) -> Day month date year
// let myOwnDate = new Date(2023, 0, 21);
console.log(myOwnDate.toDateString());
// same as above with time
// let myOwnDate = new Date(2023, 0, 21, 5, 3);
console.log(myOwnDate.toLocaleString());
let myOwnDate = new Date("2023-01-14"); //here month count starts with the 01 + comes with time - YY/MM/DD
console.log(myOwnDate.toLocaleString());

// typeof date
console.log(typeof newDate); //-> its type is object
