// UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// function to load all event listeners
loadAllEventListeners();

// load all event listeners
function loadAllEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // add task event
  form.addEventListener("submit", addTasks);
  // delete-task event
  taskList.addEventListener("click", deleteTask);
  // clear task event
  clearButton.addEventListener("click", clearTasks);
  // filter task event
  filter.addEventListener("keyup", filterTask);
}

// get tasks from LS
function getTasks(e) {
  let tasks;
  if (localStorage.getItem("taskArr") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("taskArr"));
  }
  // loop throught the array and create DOM El.
  tasks.forEach(function (task) {
    createEl(task);
  });
}
// create el
function createEl(task) {
  // create li element
  const li = document.createElement("li");
  // add a class to li
  li.className = "collection-item";
  // text node daalo and append it to li
  const txtN = document.createTextNode(task);
  li.appendChild(txtN);

  // create link element
  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content";
  // add icon tag
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);
}

// add tasks
function addTasks(e) {
  // basic input check if empty or not
  if (taskInput.value.trim() === "") {
    window.alert("Please enter a value");
  } else {
    // create li element
    const li = document.createElement("li");
    // add a class to li
    li.className = "collection-item";
    // text node daalo and append it to li
    const txtN = document.createTextNode(taskInput.value);
    li.appendChild(txtN);

    // create link element
    const link = document.createElement("a");
    // add class
    link.className = "delete-item secondary-content";
    // add icon tag
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    // store in localStorage
    storeInLocalStorage(taskInput.value);

    // clear the input
    taskInput.value = "";
  }
  e.preventDefault();
}

// store task in localStorage
function storeInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("taskArr") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("taskArr"));
  }
  tasks.push(task);
  localStorage.setItem("taskArr", JSON.stringify(tasks));
}

// delete task
function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();

    // remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// remove task from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem("taskArr") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("taskArr"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("taskArr", JSON.stringify(tasks));
}

// clear tasks
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // clear tasks from LS
  clearFromLocalStorage();
}

// clear from LS
function clearFromLocalStorage() {
  localStorage.clear();
}

// filter tasks
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  // select all list items
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// const str = "ayush";
// console.log(str.indexOf("z")); // -1
