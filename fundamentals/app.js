// ! log to console
// console.log("hello world");
// console.log(123);
// console.log(true);
// console.log({ a: true, b: false });
// console.table({ a: 10, b: 20 });
// console.log([2, 3, 5, 7]);
// console.warn("this is a warning");
// console.error("this is an error");

// ! var, let and const

// ? init var
// var greet;
// console.log(greet); // undefined
// greet = "hey";
// console.log(greet); // hey

// ? let
// let time = '12:30';
// time = 20 // can re-define let
// console.log(time)

// ? const
// const name = 'john';
// console.log(name);
// const name = 'sara' // cannot re-define const

// ! PRIMITIVES

// * STRING
// const value = 'John doe';
// console.log(value);
// * Number
// const value = 123
// console.log(value)
// * Boolean
// const possible = true;
// console.log(possible)
// * Null
// const car = null;
// console.log(null);
// console.log(typeof null); output~ bug in JS. null means nothing
// * undefined
// let test;
// console.log(test);
// * Symbol
// const sym = Symbol();
// console.log(sym);

// ! REFERENCE TYPES - Objects
// * Array
// const hobbies = ["movies", "music"];
// console.log(typeof hobbies);
//  * Object Literal
// const info = { name: "john", city: "boston", state: "MA" };
// console.log(typeof info);
//  * Date
// const today = new Date();
// console.log(typeof today);

// ! Type Conversion
// * Number to string
// let val = 5
// console.log(String(val))

// ! Type Coercion
// let val1 = String(5);
// let val2 = 6; // automatically converts 6 into a string

// console.log(val1 - val2, typeof (val1 - val2));

// ! String methods

// let str = "abcccd";
// let val = str.lastIndexOf("c");
// val = str.toUpperCase();
// val = str.split("");
// val = str.substring(1, 3); // 3 not included.index: 1,2 are inc.
// val = str.slice(4, str.length); // same as substring
// val = str.replace("cd", "ef"); // ab cc ef
// val = str.includes("ab"); // true since ab is a substring of abcccd
// val = str.charAt(2); // returns the char at specified index
// val = str.charCodeAt(0); // returns ascii val of char at spec index 97

// console.log(val);

// ! Template Literals
// const name = "ayush";
// const age = 23;
// const job = "web developer";
// const city = "Boston";
// let html;

// ? without (es5)
// html =
//   "<ul><li>Name:" +
//   name +
//   "</li><li>Age: " +
//   age +
//   "</li><li>Job: " +
//   job +
//   "</li></ul>";

// ? with (es5) template strings - use ` ${variable inside} `
// html = `
//   <ul>
//     <li>${name}</li>
//     <li>${age}</li>
//     <li>${job}</li>
//     <li>${city}</li>
//   </ul>
// `;
// document.body.innerHTML = html;

// ! Arrays
// ? create arrays
// * using square brackets []
// const numbers = [43, 54, 23, 1, 22, 103, 223, 34];

// * using Array constructor
// const mixed = new Array("apples", true, 123, { a: 1, b: 2 }, function () {
//   return 5;
// });

// ! Array Methods

// let val;
// val = numbers.length;
// val = numbers.push(17); // add on to the end
// val = numbers.pop(); // remove one element from the end
// val = numbers.unshift(-20); // add element to the start
// val = numbers.shift(); // remove element from the start
// val = numbers.splice(0, 3); // removes el from array including start index
// val = numbers.concat(mixed); // concatenates two arrays
// val = numbers.find(); // returns true if el is present else undefined

// console.log(numbers);
// console.log(val);

// ! Objects

// const person = {
//   firstName: "Ayush",
//   age: 23,
//   hobbies: ["music", "photography"],
//   address: {
//     city: "Jbp",
//     state: "MP",
//   },
//   getAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };

// get specific value
// let val;
// * using dot notation
// val = person.firstName;
// * using bracket notation ['enter key in quotes']
// val = person["age"];
// val = person.hobbies[1];
// val = person.address["city"];
// val = person.getAge(1999);

// console.log(val);

// ! Date and time

// let val;
// * if no args passed it will give today's date
// const today = new Date();
// let birthday = new Date("November 6 1999");

// val = birthday;

// ? Date
// * get month is 0 based -> jan 0, feb 1, .... dec 11
// val = today.getMonth();
// * gets the day of the week mon 1, tue 2, wed 3 .... sun 7
// val = today.getDay();
// * get date
// val = today.getDate();
// * get year
// val = today.getFullYear();

// ? Time
// * get hours
// val = today.getHours();
// * get mins
// val = today.getMinutes();
// * get seconds
// val = today.getSeconds();
// * get milliseconds
// val = today.getMilliseconds();
// * get timestamp- amt of seconds passed since Jan 1970
// val = today.getTime();

// console.log(val);

// ! Functions

// * function declarations
// function greet(firstName) {
//   return "Hello " + firstName;
// }
// console.log(greet("Ayush"));

// * function with default params
// function greetAgain(firstName = "John", lastName = "Doe") {
//   return "Hello " + firstName + " " + lastName;
// }
// console.log(greetAgain()); // * if we pass args here, default params gets overridden

// * function expression
// const square = function (x) {
// ? without name it is called anonymous fn.
//   return x * x;
// };
// console.log(square(3));

// * Immediately Invokable Function Expressions - IIFE
// (function (name) {
//   console.log(`Hello ${name}`);
// })("Rishu");

// * in order to return from IIFE assign it to some var and make it an expression
// const result = ((age) => `you are ${age * 3} years old`)(30);
// console.log(result);

// * function inside object - commonly known as methods

// const todo = {
//   add: function () {
//     console.log("Add todo");
//   },
//   edit: function (id) {
//     console.log(`edit todo ${id}`);
//   },
// };
// todo.add();
// todo.edit(23);

// * also add methods from outside the object
// todo.delete = function (id) {
//   console.log(`delete todo ${id}`);
// };

// todo.delete(43);

// ! Loops

// * For Loop
// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log("2 is reached going to the next iteration");
//     continue;
//   }
//   if (i === 5) {
//     console.log("Stopping the loop at i = 5");
//     break;
//   }
//   console.log(i);
// }

// * While Loop
// let i = 0;
// while (i < 10) {
//   console.log("Number " + i);
//   i++;
// }

// * do while
// let i = 0;
// do {
//   console.log("number " + i);
//   i++;
// } while (i < 10);

// ! * For Each *
// const cars = ["ford", "chevy", "toyota", "honda"];

// cars.forEach(function (currentElement, index, array) {
//   console.log(currentElement, index, array);
// });

// ! Map
// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "sara" },
//   { id: 3, name: "smith" },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// ! For in loop used for objects
// const users = {
//   firstName: "john",
//   lastName: "doe",
//   age: 30,
// };

// for (let x in users) {
// x is the key
// users is the calling object
// console.log(x); // gives the keys
// console.log(`${x}: ${users[x]}`); // users[x] will give us values
// }

// ! Window Methods / Objects / Properties

// console.log(123);

// * Alert
// window.alert("hello");

// * Prompt
// const input = prompt();
// alert(input);

// * Confirm

// if (confirm("you wanna delete")) {
//   console.log("yes");
// }

// ! Window Properties

let val;

// * Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// * Inner Height and width
// val = window.innerHeight;
// val = window.innerWidth;

// * Scroll points
// val = window.scrollY;
// val = window.scrollX;

// * Location Object- also has many props
// val = window.location;

// * get host
// val = window.location.host;

// * get PATHNAME
// val = window.location.pathname;

// * get search params
// val = window.location.search;

// * Redirect
// window.location.href = "http://www.google.com";
// * Reload
// window.location.reload();

// * History Object
// window.history.go(); // -1 go 1 site before -2 two sites before
// val = window.history.length;

// * Navigator Object
// val = window.navigator;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;

// console.log(val);

// ! VAR, LET, CONST

// ! Block scope and global scope

// * Global Scope

var a = 1;
let b = 2;
const c = 3;

{
  // * Block Scope
  // but var a in block scope will affect the var a in global scope.
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("Block Scope: ", a, b, c);
}

function scope() {
  // * Function scope
  // these variables are diferent than in Global, block scope
  // var is a fn scope, thus var a inside fn will not affect var a inside global scope
  var a = 4;
  let b = 5;
  const c = 6;

  console.log("Function Scope: ", a, b, c);
}
scope();

console.log("Global Scope: ", a, b, c);
