// oprations

console.log(1 + "1");
console.log("1" + 1);
console.log("1" + "1");
console.log(1 + 1);

console.log("1" + "1" + 1); //111
console.log("1" + 1 + 1); //111
console.log(1 + 1 + "1"); //21
console.log(1 + 1 + "1" + "1"); //211
console.log(1 + 1 + 1 + "1"); //31

// comparision

console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// strict check === here not only value but also the type check is performed
//always follow striccdt check
console.log("1" == 1); //true
console.log("1" === 1); //false

let arr = [1, 2, 3, 4, 5, 6];

let crr = arr;
let brr = [...arr];
console.log("== and ===");
console.log(crr == brr);
console.log(crr === brr);

// Number function and parseInt
let a = "20a";
console.log(parseInt(a));
console.log(Number(a));
