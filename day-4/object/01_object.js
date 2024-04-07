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
