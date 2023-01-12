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
  // add task
  form.addEventListener("submit", addTasks);
}

function addTasks(e) {
  // basic input check if empty or not
  if (taskInput.value === "") {
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
  }
  e.preventDefault();
}
