//

// Get element with tag name 'h2'
// Note: This code is commented out and will not execute
// let res = document.getElementByTagName("h2");
// console.log(res);

// Get element by ID 'head2'
const res1 = document.getElementById("head2");
// Note: This code is commented out and will not execute
// let res1 = document.getElementsById(head2).innerHTML;
// console.log(res1);

// Get all elements with tag name 'h2'
const res2 = document.querySelectorAll("h2");
// console.log(res2);

// Get all elements with tag name 'h3' and ID 'head3'
const res3 = document.querySelectorAll("h3#head3");
// console.log(res3);

// Get element by ID 'head3'
const res4 = document.getElementById("head3");

// Change the inner text of the element with ID 'head3'
res4["innerText"] = "hello i am changed";

// Get all elements with tag name 'h2'
const res5 = document.getElementsByTagName("h2");

// Change the inner text of the first h2 element
res5[0].innerText = "hi";

// Change the inner HTML of the second h2 element to contain an h1 element
res5[1].innerHTML = "<h1> now i am h1 </h1>";

// Set class attribute of the third h2 element to 'c1'
res5[2].setAttribute("class", "c1");

// Create a new h3 element
const me = document.createElement("h3");
// Set inner text of the new element
me.innerText = "Dynamic Text";
// Note: This code is commented out and will not execute
// document.body.appendChild(me);

// Get all div elements
const secDiv = document.getElementsByTagName("div");
// Note: This code is commented out and will not execute
// secDiv[0].appendChild(me);
