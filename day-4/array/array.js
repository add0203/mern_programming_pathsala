// array

let myArr1 = [0, 1, 2, 3, 4];
console.log(myArr1);

let myArr2 = new Array(0, 1, 2, 3, 4);
console.log(myArr2);

// array can store all type data Type.

// accessing - using indexing

console.log(myArr1[0]);

// modifying
myArr1[0] = 1;

// methode

// add element
myArr1.push(2); //add at the end
myArr1.unshift(); //add at the start

// remove element
myArr1.pop(); //remove from end
myArr1.shift(); //remove from front

// getting index
let index = myArr2.indexOf(2);
console.log(index);

// slicing
let slicedArr = myArr2.slice(1, 3);
console.log(slicedArr);

// splicing
// remove 2 element from index 1 & 2 ,and if available replced by element.

let spliceArray = myArr2.splice(0, 1);
console.log("spliceArray", spliceArray);
console.log("myArray2", myArr2); //spliced ulter the main array

// includes
// check if element exist or not
console.log(myArr1.includes(2));
console.log(myArr1.includes(10));

// join() - convert Array to String

const joinArray = myArr2.join();
console.log(joinArray);
console.log(typeof joinArray);
