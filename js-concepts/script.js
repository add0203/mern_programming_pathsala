// const input = document.getElementsByClassName("search-box");

// function useDebounce(fn, time) {
//   let timeoutID;
//   return function (...args) {
//     //rest oprator
//     clearTimeout(timeoutID);
//     setTimeout(() => {
//       fn(...args);
//     }, time); // spread oprator
//   };
// }

// async function getProducts(text) {
//   const res = await fetch(`https://dummyjson.com/products/search?q=${text}`);
//   const data = await res.json();
//   console.log(data);
// }

// const debounceGetProducts = useDebounce(getProducts, 600);

// input.addEventListerner("keyup", () => {
//   debounceGetProducts(e.target.value);
// });
// // input.addEventListerner("keyup", () => {
// //   getProducts(e.target.value);
// // });

// // impliment a function t oadd numbers

// // test-cases

// const addNumber = (...args) => {
//   let add = 0;
//   args.map((item) => {
//     add = add + item;
//   });
//   return add;
// };

// // using reduce
// const addNumber2 = (...args) => {
//   let add = args.reduce((acc, item) => acc + item, 0);
//   return add;
// };

// console.log(addNumber(1));
// console.log(addNumber2(1));
// console.log(addNumber2(1, 4));
// console.log(addNumber(1, 4, 5));
// console.log(addNumber2(1, 4, 5));

// shallow copy and deep copy
const joe = {
  id: "1",
  name: "anand dhar dwivedi",
  couses: ["C++", "Web dev"],
};

// shallow copy
const Roy = joe;

//  create new object of same as Jeo : main objext is copied to new object but inside array is referenced not changed
const Roy2 = { ...Joe };

// deep copy ?
