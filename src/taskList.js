class TaskList {


  constructor(task){
    this.taskList = [];
  }

   createTask(description) {
    const newTask = new Task(description)
    this.taskList.push(newTask);
  }





}
