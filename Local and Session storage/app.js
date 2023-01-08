// ! Local Storage
// @defination local storage will stay until we manuallu clear it out through our program
// * set local storage item
// @syntax localStorage.setItem('key', 'value');
// localStorage.setItem("name", "john");
// localStorage.setItem("age", "29");

// ! Session Storage
// @defination session storage will go away as soon as we close the broswer or the sesion ends

// * set session storage item
// sessionStorage.setItem("name", "beth");

// ! @DIFF major difference between local and session storage is that, as soon as we reload/close the browser the session storage will go away but the local storage will persist(until we manually clear it out)
// rest all of the methods are same for both

// * Remove item from storage
// localStorage.removeItem("name");

// * Get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// * clear localStorage

// localStorage.clear();
// console.log(name, age);

document.querySelector("form").addEventListener("submit", runEvent);

function runEvent(e) {
  const task = document.getElementById("task").value;
  localStorage.setItem("task", task);
  console.log("task saved");
  e.preventDefault();
}
