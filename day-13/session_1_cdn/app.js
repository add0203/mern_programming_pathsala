// const root = document.getElementById("root");
// root.innerHTML = `  <h1>Hello</h1>
//         <ul>
//             <li>item 1</li>
//             <li>item 2</li>
//         </ul>`;

// const head = document.createElement("h1");
// head.innerText = "hello js";
// root.appendChild(head);

// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");

// li1.innerText = "list 1";
// li2.innerText = "list 2";

// root.appendChild(li1);
// root.appendChild(li2);

// const heading = React.createElement("h1", {}, "hello");
// const listItem = React.createElement("li", {}, "list item");

// // cannot render boot thing at the same time

// // render the created element
// root1.render(heading);

// // render the created element
// root1.render(listItem);
// const parent1 = document.getElementById("root");
// const parent2 = document.getElementById("root2");
// const root1 = ReactDOM.createRoot(parent1);
// const root2 = ReactDOM.createRoot(parent2);

// // const listItem = React.createElement("type-of-element", {props}, "innner element");
// const listItem = React.createElement(
//   "li",
//   { key: "listItem", className: "li-c-1" },
//   "item 1"
// );
// const listItem2 = React.createElement("li", { key: "listItem2" }, "item 1");
// const listItem3 = React.createElement("li", { key: "listItem3" }, "item 1");

// const ullist = React.createElement("ul", {}, [listItem, listItem2, listItem3]);

// root1.render(ullist);
// root2.render(ullist);

const parent1 = document.getElementById("root");
const root1 = ReactDOM.createRoot(parent1);

const str = `hello i am string`;
const heading = <h1>{str}</h1>;
root1.render(heading);

// const li1 = <li>item 1</li>;
// const li2 = <li>item 2</li>;

// putting more the one element in list variable using {}{}{}
// const list = (
//   <ul>
//     {li1}
//     {li2}
//   </ul>
// );

// putting more the one element in list variable using the arr which contains the variable of list1 and list2
// const arr = [li1, li2];
// const list = <ul>{arr}</ul>;

// putting more the one element in list variable using the arr which contains elements in it
// passing objects inisde element
const str1 = {
  hello: "wordl",
  name: "anand",
};
const s1 = {
  backgroundColor: "red",
};
const arr = [
  <li classNmae="li-cl-1" name={str1} style={s1}>
    item 1
  </li>,
  <li>item 2</li>,
];
// const list = <ul>{arr}</ul>;

// also using map inside the
const list = <ul>{arr.map((ele) => ele)}</ul>;

root1.render(list);
