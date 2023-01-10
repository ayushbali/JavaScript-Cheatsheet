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

// as we add new task, the old task will get replaced
// function runEvent(e) {
//   const task = document.getElementById("task").value;
//   localStorage.setItem("task", task);
//   console.log("task saved");
//   e.preventDefault();
// }

// therefore we need to create an Array of task and store them as strings
function runEvent(e) {
  const task = document.getElementById("task").value;

  let tasks;

  // check to see if there is task in localstorage
  // if not, then set task to an empty array and add to it @ref line 48
  // if there is pull it out @ref line 51 and add to it @ref line 53
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    // this will be a string,
    // we need to parse it into obj. using JSON.parse()
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // push the task coming via form into this tasks array
  tasks.push(task);

  // we need to re-set the localStorage item with the above added value @ref at line 56
  // since it stores strings we need to wrap it inside JSON.stringify()

  localStorage.setItem("tasks", JSON.stringify(tasks));

  console.log("task saved");
  e.preventDefault();
}

// forEach will not work as this is not an array, bc we pulled it out of localStorage which stores string
// we need to parse this using JSON.parse()
const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach((task) => {
  console.log(task);
});
