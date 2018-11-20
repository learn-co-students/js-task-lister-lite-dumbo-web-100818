document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    taskList.createTask(newTaskDescription.value);
    event.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      taskList.deleteTask(event.target.dataset.description);
      renderApp();
    }
  });
});
