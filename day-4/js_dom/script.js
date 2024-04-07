const res = document.getElementById("heading").getAttribute("class");
console.log(res);
const res2 = document.getElementById("heading").setAttribute("class", "h1new");
console.log(res2);

const res3 = document.getElementById("heading");

res3.style.backgroundColor = "green";
