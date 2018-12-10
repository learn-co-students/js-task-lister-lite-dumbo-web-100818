const tasks = document.querySelector('#tasks')
const newTask = document.querySelector('#new-task-description')

document.addEventListener('submit', addingTasks)
document.addEventListener('click', deletingTask)

function addingTasks(e){
  e.preventDefault()
  tasks.innerHTML += `<li id="${newTask.value.length+=1}">${newTask.value} <button id="dlt">Delete</button></li>`
  // .setAttribute("id", 1);
  newTask.value = ""
   // const dlt = document.querySelector('#dlt')
}

function deletingTask(e){
  const dlt = document.querySelector('#dlt')
  // tasks.remove()
  console.log(e);
}

class Task {

}
