// function getInfo(e) {
//   const res = document.querySelector("div");
//   const ele = document.createElement("p");
//   ele.innerText = "hi i am here i am added here";

//   res.prepend(ele);
//   console.log(e);
// }

// function getInfo(e) {
//   // Check if a <div> element exists in the document
//   const res = document.querySelector("div");
//   if (!res) {
//     console.error("No <div> element found in the document.");
//     return; // Exit the function early if no <div> element is found
//   }

//   // Create a new <p> element
//   const ele = document.createElement("p");
//   ele.innerText = "hi i am here i am added here";

//   // Add the <p> element as the first child of the <div> element
//   res.prepend(ele);

//   // Log the event object to the console
//   console.log(e);
// }

function getInfo(e) {
  console.log(e);
  e.target.setAttribute("style", "color:red");
  e.target.setAttribute("style", "background-color:red"); //total style is overrride

  //   e.target.style.backgroundColor = "green";
  //   e.target.style.color = "red";
  //   e.target.style.top = "40px";
  //   e.target.style.left = "40px";
}
