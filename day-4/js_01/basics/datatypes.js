"use strict"; // treat all js code like newer version

// number => 2 to power 53 signed
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value is not asigned yet
// symbols => unique

console.log(typeof null); // object
console.log(typeof undefined); //undefined

// dataType : catagorise in base of how it is stored and accesed.
// in javaScript it is dynamically typed language - datatype of variable are determine at runtime. you don't have to specify the type of variable during declaration.

// a> Primitive Type
// String, Number, boolean, null->empty, undefined-> variable declared but not defined,
// Symbol, BigInt
let value = 10;
var valueTwo = value;
valueTwo = 20;
console.log(value);
console.log(valueTwo);

// if VALUE OF BOTH variable is not same then it is primitive type of datatype
// because primitive type is also known as call by value type.
value = "hello";
value = true;

// Example -
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemprature = null;

// Symbol is always unique
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// b> non-primintive type
// Array, onjects, function

const heros = ["saktiman", "naagraj", "spiderman"];
console.log(heros[0]);
// 5 index is not in indexing of heros array
console.log(heros[5]); //undefined

const obj1 = {
  name: "anand",
  age: "23",
};

console.log(obj1);

const myFunction = function () {
  console.log("i am in the function");
};

myFunction();

// console.log(myFunction());
//  non-primitve type is explains reference type, refence is shared when passed to variable

let obj2 = obj1;

obj2.name = "buntu";

// if VALUE OF BOTH variable is same then it is non-primitive type of datatype
// because primitive type is also known as call by reference type.
console.log(obj1.name);
console.log(obj2.name);
