// console.log(" Starts");

// let res = fetch("https://api.github.com/users/add0203");

// console.log(res); //empty

// res.then(()=>{
//   console.log("fetched now you can copy :");
// })

// console.log(" Ends");

// console.log(" Starts");

// let res = fetch("https://api.github.com/users/add0203");

// res.then(() => {
//   console.log("fetched now you can copy :");
//   console.log(res); //now ready to be fetched
// });

// console.log(" Ends");

console.log("start");

// const req = fetch("https://dummyjson.com/products/1");

// const res = req.then((res) => res.json());

// const data = res.then((data) => {
//   console.log(data);
// });

// short version

// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://dummyjson.com/products/1")
//   // .then((res) => res.json())
//   .then((res) => console.log(res));

console.log("end");

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .catch((err) => {
    console.log(err);
  })
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
