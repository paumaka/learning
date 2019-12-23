var tasks = [{taskName: "Moje pierwsze zadanie"},{}];

function addTask(task) {
  console.log(document.getElementById("task-form"));
  console.log('dodajemy nowe zadanie');
  tasks.push(task);
  printTasks();
}

function removeTask() {
   // implement removing of tasks;
}

function editTask(task) {
  // here we will be editing new tasks;
}

function printTasks() {
  var taskList = document.getElementById("task-list");
  for (var i=0; i< tasks.length; i++) {
    var taskModel = tasks[i];
    var taskElement = document.createElement("div");
    if (taskModel.taskName != undefined) {
      taskElement.innerHTML = taskModel.taskName;
      taskElement.className = "task-entry";
    }
    taskList.appendChild(taskElement);
  }
}
