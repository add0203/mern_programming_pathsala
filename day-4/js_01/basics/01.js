// type defination
let valueInString = "hi";
let valueInString2 = "abc123";
let valueInString3 = "1234";
let valueNull = null;
let valueUndefined;

// converting value

let valueInInt = Number(valueInString);
console.log(typeof valueInInt);
console.log(typeof valueInString);

let valueInInt2 = Number(valueInString2);
console.log(valueInInt2); // NaN
console.log(typeof valueInInt2);
console.log(typeof valueInString2);

//converting type of null and undefined

let valueOfnull = Number(valueNull);

console.log(typeof valueOfnull);
console.log(valueOfnull);
