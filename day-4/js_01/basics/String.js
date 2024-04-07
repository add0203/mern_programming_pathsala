// String
const name = "anand";
const repoCount = 50;
//String declare using object String();
const anothername = new String("buntu");

// String Concatinate
// using + sign
console.log("my name " + name + " and i have a repocount of " + repoCount);
// using backtick - called string interpolation - use of backtick and
// for variables in String we use ${variableName}
console.log(`my name ${name} and i have a repocount of  ${repoCount}`);
let newString = `my name ${name} and i have a repocount of  ${repoCount}`;

// String contain's funtions in it. for manupulation of String
console.log(newString);
console.log(newString[0]);
console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());
console.log(newString.charAt(1));
console.log(newString.indexOf("name"));
console.log(newString.indexOf("a"));

// Slice
const greeting = "hello every one";

console.log(greeting.length);
console.log(greeting.slice(6));
console.log(greeting.slice(5, 10));
console.log(greeting.slice(-6));
console.log(greeting.slice(-10, 0));

// trim
const greetingTwo = "     hello    anand     ";
console.log(greetingTwo.trim());

// replace
const greetingThree = "Hello-world";
console.log(greetingThree.replace("-", " "));

// includes
console.log(greetingThree.includes("world"));

// split
const myStr = "Hello world. How are you doing?";

console.log(myStr.split(" ")); //split by words and make a array
console.log(myStr.split(" ", 4));
console.log(myStr.split("")); //split by letter and make a array
let myStrToArr = myStr.split(" ");
let myStrToArrOfLetter = myStr.split("");

console.log(myStrToArrOfLetter[4]);
console.log(myStrToArr[0]);
