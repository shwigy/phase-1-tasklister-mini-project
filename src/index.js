document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // select the form by its id and add a submit event listener
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description").value;

    // pass the task text to buildToDo to create and display it
    buildToDo(taskInput);
  });

  // function to create a new <li> and append it to the task list
  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    const taskList = document.getElementById("tasks");
    taskList.appendChild(li);
  }
});
