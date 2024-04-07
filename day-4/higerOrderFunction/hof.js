// const funName =
//   (a,
//   b,
//   function () {
//     console.log(a + b);
//   });

// funName(1, 2);

const funName = (a, b, fun) => {
  const sum = a + b;
  fun(sum);
};

const print = (res) => {
  console.log(res);
};

funName(1, 2, print);
