
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit",
function(e){
   e.preventDefault();
  let task = document.querySelector(`input[type="text"]`).value
  document.getElementById("tasks").innerHTML += `<li> ${task} <button class="delete">x</button> </li>`

})


});






// - users should be able to type a task into the input field
// - users should be able to click some form of a submit button
// - the task string that the user provided should appear on the DOM after the submit button has been activated
