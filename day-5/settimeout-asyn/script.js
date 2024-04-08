// let arr = [2, 13, 24, 21, 45];
// console.log("GEC Starts");

let printArraypretty = () => {
  console.log("printArrayPretty");
  let ans = 2 + 3;
  console.log(ans);
  console.log("printArrayPretty");
};

// setTimeout(printArraypretty, 50000);

// console.log("GEC Ends");

// event handeler static
// by using onclick attribute
// event handeler dynamically

let btn = document.getElementById("btn");
// btn.addEventListener("eventType",callbackFunction)
btn.addEventListener("click", printArraypretty);

//
