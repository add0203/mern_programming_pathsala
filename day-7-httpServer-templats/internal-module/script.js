// const fs = require("fs")
// or
//! const { readFileSync } = require("node:fs");

// !readfile
// const data = fs.readFileSync("./myReadMe.txt", { encoding: "base64" });
// const data = fs.readFileSync("./myReadMe.txt", { encoding: "utf8" });
// const dataImg = fs.readFileSync("./image.png");
// // const data = fs.readFileSync("./");

// console.log(data.toString());
// console.log(dataImg);

// const imgBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/5+B7cAAAAASUVORK5CYII=', 'base64');

// const b = new Buffer.from("lorem epsum", "utf8");

// console.log(b.toString());

// // overrride buffer only starting chars

// b.write("update");

// console.log(b.toString());

// // write a file : fs.writeFileSync(file, data[, options])

// fs.writeFileSync("./myReadme2.txt", "to don to dondnodu");

// !blocking behaviour
// const fs = require("node:fs");
// console.log("start");
// const data = fs.readFileSync("./myReadMe.txt", { encoding: "utf8" }); //sync code block the next code
// console.log(data);
// console.log("End")

// !non-blockin behaviour using promises
// const fsPromises = require("fs/promises");

// console.log("start");
// const pr = fsPromises.readFile("./myReadMe.txt", { encoding: "utf8" }); //async don't block the code

// console.log(pr); //pending until the data is fetched

// pr.then((res) => {
//   console.log(res);
// });
// console.log("end");

// !non-blocking behaviour using callback
const fs = require("node:fs");

console.log("start");

fs.readFile("./myReadMe.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
});

console.log("end");
