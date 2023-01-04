// ! DOM - Document Object Model
// let val;

// * document object
// val = document;

// * gives HTML Collection of the current document
// val = document.all;
// val = document.all[2];
// val = document.all.length;

// * Selecting html elements using document - NOT RECOMMENDED
// val = document.forms;
// val = document.forms[0];
// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].length; // counts the number of el inside that tag
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[1];
// val = document.links[1].href;
// val = document.links[1].className;
// val = document.links[1].classList;
// val = document.links[1].classList[0];

// val = document.images;
// val = document.scripts;
// val = document.scripts[3].getAttribute("src");

// ! Convert HTML Collection in an Array
// * use Array.from(pass_htmlCollection_inside) to convert in array

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute("src"));
// });

// val = console.log(scriptsArray);

// < ========================================================================================== >

// ! DOM Selectors
// * Single Element Selectors
// ? document.getElementById() - if there are many els. it will grab only the 1st one

// console.log(document.getElementById("task-title"));

// * Get things from the Element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// * Change Styling
// taskTitle.style.backgroundColor = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// document.getElementById("task-title").style.display = "none"; // sets display to none, usually done with some event

// * Change Content

// Text Content
// taskTitle.textContent = "Task List"

// Inner Text
// taskTitle.innerText = "My Tasks"

// insert HTML, using innerHTML
// taskTitle.innerHTML = "<span>Task Tracker</span>"

// ? document.querySelector() - if there are many els. it will grab only the 1st one

// grab by id
// console.log(document.querySelector("#task-title"));

// grab by class name
// console.log(document.querySelector(".card-title"));

// grab by element
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";

// grab by nesting elements
// document.querySelector("ul li").style.color = "blue";

// pseudo classes
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "orange";
// document.querySelector("li:nth-child(4)").textContent = "hello world";
// document.querySelector("li:nth-child(odd)").style.backgroundColor = "#ccc";
// document.querySelector("li:nth-child(even)").style.backgroundColor = "#f4f4f4";

// ! For Selecting Multiple Elements
// @returns HTML Collection --> can be converted to Arrays

// ?  document.getElementsByClassName()
// @return ---> HTML Collection

// here we are using getElementsByClassName on a global scope, it will select all the elements with class name of collection item present in our html document.

// const items = document.getElementsByClassName("collection-item");
// console.log(items);

// we can treat this HTML Collection like Array and access elements
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "hello";

// we are not using getElementsByClassName on Global Scope here, this will only select all the elements with class name of collection item which are under <ul>
// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// ? document.getElementsByTagName()
// @return ---> HTML Collection

// let lis = document.getElementsByTagName("li");

// console.log(lis);
// console.log(lis[1]);
// lis[2].style.color = "orange";
// lis[2].textContent = "hello";

// since these selectors return HTML Collection or Node List
// we cannot perform Array opertations on them
// we must convert it into an Array

// lis = Array.from(lis); // converted to Array, now we can use Array operations on them

// lis.forEach((li, index) => {
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// ? document.querySelectorAll()
// @returns Node List  ---> counts elements as well as text nodes
// we can use array methods on it, without having to convert it.

// const items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach((item, index) => {
//   item.style.backgroundColor = "#ccc";
// });

// using a for loop
// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.backgroundColor = "#f4f";
// }

// console.log(items);

/**
 * ! Difference b/w HTML Collection and Node List
 *
 * ? HTML Collection---> Will only contain element nodes, cannot use forEach loop
 * ? Node List ---> Will contain every type of node, can use forEach loop
 *
 */

/* ================================================================================= */

// ! DOM Traversal

// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// * Get child nodes
// val = list.childNodes; // gives Node List of all the children including text nodes
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName; // gives the node name

/* 
  1 - Element
  2 - Attribute (deprecated)
  3 - Text Node
  8 - Comment
  9 - Document 
  10 - Doctype
*/

// * Get Children
// val = list.children; // gives HTML Collection of all children without text nodes
// val = list.children[0];
// val = list.children[0].nodeType;
// val = list.children[1].nodeName;
// val = list.children[1].textContent = "Hello";

// * Get children of children

// val = list.children[2].children;
// list.children[2].children[0].id = "test-link";

// val = list.children[2].children[0];

// * first child
// val = list.firstChild; // gives first child node be it element or not
// val = list.firstElementChild; // gives the first child element only

// * last child
// val = list.lastChild;
// val = list.lastElementChild;

// * Get Child Element Count
// val = list.childElementCount;

// * Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;

// * Get parent of parent
// val = listItem.parentElement.parentElement;

// * Get next sibling
// val = listItem.nextSibling; // will include text node as well
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// * Get previous sibling
// val = listItem.previousSibling; // will include text node as well
// val = listItem.previousElementSibling; // will give null if there is no previous sibling

// console.log(val);

/* ================================================================================= */

// ! DOM - Create Elements

// let val;

// * Create element
// const li = document.createElement("li"); // creates li el.

// * Add class to an element
// li.className = "collection-item";

// * add id
// li.id = 'next-item'; // we can also add id to the el.

// * Set Attribute
// li.setAttribute('title', 'next-item');

// * Create Text Node and Append it to the created Element
// const text = document.createTextNode("Hello World");
// li.appendChild(text);

// const link = document.createElement("a"); // create a tag
// link.className = "delete-item secondary-content"; // add class to a tag
// link.innerHTML = '<i class="fa fa-remove"></i>'; // a has innerHTML of icon
// li.appendChild(link); // append a tag as a child to li tag

// * Append li as a child to ul in the DOM
// document.querySelector("ul").appendChild(li);

// val = li;
// console.log(val);

// ! DOM - Removing Elements

// * Replace Elements

// Create element
// const newHeading = document.createElement("h2");

// Add id
// newHeading.id = "task-title";

// Create new text node and append
// newHeading.appendChild(document.createTextNode("New Task Lists"));

// Get the old Heading
// const oldHeading = document.getElementById("task-title");

// Get the parent- bc we will use replaceChild and we will call it on parent
// const cardAction = document.querySelector(".card-action");

// Replace
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// * Remove Element

// grab the element
// const lis = document.querySelectorAll("li");

// Remove - using remove() method
// lis[1].remove();

// we can also remove by child

// Grab the parent element
// const list = document.querySelector("ul");

// Remove - using removeChild() method
// list.removeChild(lis[3]);

// ! Class
// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];

let val;
// val = link.className; // gives string of the classes
// val = link.classList; // gives the DOM Token List
// console.log(link.classList);
// val = link;

// * Add class to class List
// val = link.classList.add("test");

// * Remove class from class List
// val = link.classList.remove("test");

// val = link;

// ! Attributes

// * Get Attribute
// val = link.getAttribute("href");

// * Set Attribute
// val = link.setAttribute("title", "test-link");

// * Check if has Attribute or not
// val = link.hasAttribute("title"); // true

// * Remove Attribute
// val = link.removeAttribute("title");

// console.log(val);
