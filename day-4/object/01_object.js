// objects

// singleTon - is created when object is made using constructor method

// using object literal method

const obj5 = new Object();

obj5["age"] = 23;
obj5["name"] = "anand";

console.log(obj5);

// fetch data from user

let data = prompt("Enter the properties you require: ");

console.log(obj5.data);

// https://github.com/add0203/mern_programming_pathsala.git

// const JsObject = {
//   name: "anand",
//   class: "MCA _ A",
//   rollNumber: 4,
//   isLoggedIn: false,
//   "car number": "10101",
//   address: {
//     houseNo: 61,
//     locality: "assi",
//   },
// };

// accessing element

// console.log(JsObject.name);
// console.log(JsObject["name"]);
// console.log(JsObject["car number"]);

// concate object

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = Object.assign(obj1, obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj4);

// rest

let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Remove key2 from the object
// delete obj.key2;

// rest operator
const { key1, ...rest } = obj;

console.log(obj); // Output: { key1: 'value1', key3: 'value3' }
console.log(rest);

// // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function sum(a, b, c = 0) {
  console.log(a + b);
}

sum(1);
sum(1, 2);
sum(1, 2, 3);

// using rest and resduce to handle when we doesnt know how many arguments is passed
function sum1(...rest) {
  const sumWithInitial = rest.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    (initialValue = 0)
  );
  console.log(sumWithInitial);
}

sum1(1);
sum1(1, 2);
sum1(1, 2, 3);
