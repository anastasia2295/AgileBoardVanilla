const userInputs = document.querySelector(".inputText")
const btnAdd = document.getElementById("btnAdd")
const blocksTasks = document.querySelectorAll(".added-task")
const divBlocks = document.querySelectorAll("block-task")
const blockUlExecute = document.getElementById("task-execute")
const blockUlWork = document.getElementById("task-work")
const blockUlCheck = document.getElementById("task-check")
const blockUlGoot = document.getElementById("task-goot")

tasks = ["Understanding HTML CSS layouts positioning", "Adding Forms to websites", 
"Java Script Basics", "Advanced JS working with the DOM", "Control Structures"]

const blockTask = tasks.forEach((item, i, tasks) => {
    
    if(item === tasks[i] && item !== tasks[3] && item !== tasks[4]){
       const newElementTasks = document.createElement("li") 
      newElementTasks.innerHTML= `<div draggable=true>${tasks[i]}</div>` 
      blockUlWork.append(newElementTasks)
      item = i++
    } else {
        const newElementTasks = document.createElement("li") 
         newElementTasks.innerHTML= `<div draggable=true>${tasks[i]}</div>` 
         blockUlCheck.append(newElementTasks)
         item = i++
    }
})

const addNewTask = () => {
    const newElementTasks = document.createElement("li")
    const newTask = userInputs.value
    console.log(newTask)
   if(newTask.length === 0){
    return
   }else {
    newElementTasks.innerHTML = `<div class="tasks-item" draggable=true>${newTask}</div>`
    blockUlExecute.append(newElementTasks)
    tasks.push(`${newTask}`)
   }

    
    const tasksListElementWork = document.getElementById("task-work")
    const tasksListElementCheck = document.getElementById("task-check")
    const tasksListElementGoot = document.getElementById("task-goot")
    const taskElements = newElementTasks

    taskElements.addEventListener("dragstart", (ev) => {
        console.log("dragStart"); 
        ev.currentTarget.classList.add("dragging");
        console.log(ev.dataTransfer)
    })

    taskElements.addEventListener("dragend", (ev) => {
  ev.currentTarget.classList.remove("dragging")},
);

tasksListElementWork.addEventListener("dragover", (ev) => 
  ev.preventDefault()) 

tasksListElementWork.addEventListener("drop", (ev) => {
    ev.preventDefault();

tasksListElementWork.append(taskElements)})

tasksListElementCheck.addEventListener("dragover", (ev) => 
  ev.preventDefault()) 

tasksListElementCheck.addEventListener("drop", (ev) => {
    ev.preventDefault();

tasksListElementCheck.append(taskElements)})

tasksListElementGoot.addEventListener("dragover", (ev) => 
  ev.preventDefault()) 

tasksListElementGoot.addEventListener("drop", (ev) => {
    ev.preventDefault();

tasksListElementGoot.append(taskElements)})

    
// } else if(tasksListElementCheck.addEventListener("dragover", (ev) => 
// ev.preventDefault()) )
// { tasksListElementCheck.addEventListener("drop", (ev) => {
//   ev.preventDefault();
//   tasksListElementCheck.append(taskElements)})
//   }
}


btnAdd.addEventListener("click", addNewTask)