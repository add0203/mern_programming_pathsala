// if div is removed his child will be also removed
const res = document.querySelector("div"); //give fisrt div tag
// const div = document.querySelectorAll("div");  //give all divs

console.log(res);
// res.remove(); // remove whole div

const parent = document.querySelector("div"); //give fisrt div tag
const child = document.querySelector("p"); //select first from the top
const child2 = document.querySelector("p:nth-of-type(2)"); //select first from the top

parent.removeChild(child);
parent.removeChild(child2);
