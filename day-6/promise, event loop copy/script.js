console.log("hello");

const arr = [10, 20, 30];
const arr1 = [10, 20, 30.11];

// forEach
// const a = arr.forEach((ele) => {
//   console.log(ele);
// });

// console.log(a);

// map
const a = arr.map((ele) => ele * 2);
const pow = arr.map((ele) => Math.pow(ele, 2));
const onlyInt = arr1.map((ele) => parseInt(ele));

// console.log(a);
// console.log(pow);
// console.log(onlyInt);

//filter

const arr3 = [10, 20, 30];
const filterArr3 = arr3.filter((ele) => {
  if (ele > 20) return true;
  else return false;
});

// console.log(filterArr3);

const city = ["delhi", "mumbai", "chennai", "kolkata", "pune", "india", "usa"];

const fil = city.filter((s) => {
  if (s.includes("i") || s.includes("I")) return true;
  else return false;
});

const countryCity = [
  "Delhi, India",
  "Mumbai-India",
  "Chennai, India",
  "Beijing, China",
  "Texas, USA",
];

// const ans = arr.filter((a) => {

//   if (a.toLowerCase().includes("india")) return true;
//   else return false;
// });

// const ans = arr.filter((a) => a.toLowerCase().includes("india"));

// const ans2 = ans.map((a) => a.toUpperCase());

// console.log(ans2);

// reduce
const arr4 = [2, 4, 6, 8];
const obj = {};

// return updates acc

// const reduceArr4 = arr4.reduce((acc, curr) => {
//   obj[acc] = curr;
//   return acc + 1;
// }); // if not given the value here acc is initialized with the first element of the array and first element is skipped

const reduceArr4 = arr4.reduce((acc, curr) => {
  obj[acc] = curr;
  return acc + 1;
}, 0); // if not given the value here acc is initialized with the first element of the array
console.log(obj);
console.log(reduceArr4);

const arr5 = ["ab", "cd", "ef", "gf"];

const reduced = arr5.reduce((total, curr, c, d) => {
  console.log(total, curr, c, d);
  return total.coon;
});
