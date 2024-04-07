const obj = {
  name: "ANanD",
  age: 12,
};

obj.course = "mca"; //allowed
console.log(obj);

document.write(JSON.stringify(obj));

obj.name = "anand"; //allowed
console.log(obj);

// not allowed
// obj = {
//   name: "Anand",
// };

// properties can be changed but not the existing key can be not updated

// length of the arr

const arr = [1, 2, 3, 4];

// enter the element at the last
arr.push(12);

arr[10] = 20; // allowed rest of the indexing is empty
console.log(arr);

// arr is the object
console.log(typeof arr);

const brr = {
  0: 1,
};
console.log(brr);

// identify the given is array or object

const obj1 = {
  name: "anand",
  age: 32,
};

const arr1 = [1, 2, 3, 4, 5];

console.log(Array.isArray(obj)); //false
console.log(Array.isArray(arr)); //true

function checkIfObj(arr) {
  if (Array.isArray(arr)) console.log("arr");
  else if (typeof arr == "object") console.log("object");
  else console.log("not object");
}

checkIfObj(obj);
checkIfObj(1);
checkIfObj(arr);

// for in loop for object , key contain the keys

const myObject1 = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject1) {
  //   console.log(`${key} shortcut is for ${myObject1[key]}`);
  //   console.log(key);
  //   console.log(myObject1[key]);
}

//for of for array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key of programming) {
  console.log(key);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// map.set("IN", "India");

// // console.log(map);

// for (const [key, value] of map) {
//   // console.log(key, ':-', value);
// }

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// windows objects
console.log(innerHeight);
console.log(innerWidth);

// window.document

console.log(window.document);
console.log(window);
console.log(console);

console.dir(window.document);
console.dir(window);

// selector
