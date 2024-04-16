const sum = function sum(a, b) {
  console.log(a + b);
};

const sub = function sum(a, b) {
  console.log(a - b);
};

const name = "anand";

// module.exports = { fun1: sum, fun2: sub };

// exports.mult = (a, b) => {
//   console.log(a * b);
// };

module.exports = { sum, sub, name: name };
