// console.log("start");

// setinterval
// setTimeout(() => {
//   console.log("times up");
// }, 0);

// setInterval(function () {
//   element.innerHTML += "Hello";
// }, 1000);

// console.log("end");

// inversion of control - Error when function doesn't call its  callback whicwis required that's why we use promices
// const createOrder = (x, makePayment) => {
//   console.log(x);
//   setTimeout(() => {
//     makePayment("1234AK");
//   }, 10000);
// };

// const makePayment = (ordreID) => {
//   console.log(ordreID);
// };

// createOrder("soap", makePayment);

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
    //   }, Math.random() * 10000);
  }, 10000);
});

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected");
    //   }, Math.random() * 10000);
  }, 20000);
});

// pr.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// pr1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

setTimeout(function abc() {
  console.log("one");
}, 0);

const pro = new Promise((res, rej) => {
  setTimeout(function abc() {
    console.log("done");
  }, 0);
});

pr.then(function b(res) {
  console.log("promise completed", res);
});

setTimeout(function abc() {
  console.log("two");
}, 0);
