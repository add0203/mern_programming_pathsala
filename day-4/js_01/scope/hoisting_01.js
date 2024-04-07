// // variable hoisting

// console.log(x);

// var x = 9;

// console.log(x);

// // variable storing function hoisting

// // numPrint2("pehle");

// let numPrint2 = function (num) {
//   console.log(num);
// };

// numPrint2("badme");

// // function hoisting

// numPrint(4);

// function numPrint(num) {
//   console.log(num);
// }

// numPrint(5);

// console.log(this); // prints blank object or global scope

// //

// const user = {
//   userName: "anand",
//   price: 199,
//   welcomMessage: function () {
//     console.log(`${this.userName} has ${this.price}`);
//     console.log(this);
//   },
// };

// user.welcomMessage();
// user.userName = "add"; // context changed and updated in variable.
// user.welcomMessage();

// function one() {
//   let userName = "anand";
// //   console.log(this); //print scope of function
// //   console.log(this.userName); //undefined
// console.log(userName);
// }

// one();

// let one = function () {
//   let userName = "add";
//   console.log(this); //defining function scope
//   console.log(this.userName); //undefined
// };

// one();

// let one = () => {
//   let userName = "anand";
//   console.log(this); // global scope - { }
//   console.log(this.userName); //undefined
// };

// one();
