const userInputs = document.querySelector(".inputText")
const btnAdd = document.getElementById("btnAdd")
const blocksTasks = document.querySelectorAll(".added-task")
const divBlocks = document.querySelectorAll("block-task")
const blockUlExecute = document.getElementById("task-execute")
const blockUlWork = document.getElementById("task-work")
const blockUlCheck = document.getElementById("task-check")
const blockUlGoot = document.getElementById("task-goot")

const tasks = ["Understanding HTML CSS layouts positioning", "Adding Forms to websites", 
"Java Script Basics", "Advanced JS working with the DOM", "Control Structures"]
console.log(tasks)

tasks = [
  {title: item, status: "EXECUTE"},
  {title: item, status: "WORK"},
  {title: item, status: "CHECK"},
  {title: item, status: "GOOT"}
]

const arr1 = tasks.slice(0, 3)
console.log(arr1)
const arr2 = tasks.slice(3, )
console.log(arr2)

const renderBlock = () => {
      arr1.forEach((item, i) => {
      const li = document.createElement("li") 
      li.innerHTML= `<div draggable=true>${arr1[i]}</div>` 
      blockUlWork.append(li)
      item = i++
      li.addEventListener("dragstart", (ev) => {
      console.log("dragStart"); 
      ev.currentTarget.classList.add("dragging");
      console.log(ev.dataTransfer)
})
      })}
renderBlock()

//   divBlocks.addEventListener("dragover", (ev) => 
//   ev.preventDefault()) 

// ul.addEventListener("drop", (ev) => {
//     ev.preventDefault();
    
// })
// }

// renderBlock()

// const addTasks = () =>{
//   arr1.push(input.value)

// }
// const blockTask = tasks.forEach((item, i, tasks) => {
    
//     if(item === tasks[i] && item !== tasks[3] && item !== tasks[4]){
//        const newElementTasks = document.createElement("li") 
//       newElementTasks.innerHTML= `<div draggable=true>${tasks[i]}</div>` 
//       blockUlWork.append(newElementTasks)
//       item = i++
//     } else {
//         const newElementTasks = document.createElement("li") 
//          newElementTasks.innerHTML= `<div draggable=true>${tasks[i]}</div>` 
//          blockUlCheck.append(newElementTasks)
//          item = i++
//     }
// })

const addNewTask = () => {
    const li = document.createElement("li")
    const newTask = userInputs.value
   if(newTask.length === 0){
    return
   }else {
    li.innerHTML = `<div class="tasks-item" draggable=true>${newTask}</div>`
    blockUlExecute.append(li)
    arr2.push(`${newTask}`)
    li.addEventListener("dragstart", (ev) => {
      console.log("dragStart"); 
      ev.currentTarget.classList.add("dragging");
      console.log(ev.dataTransfer)
  })
   }
  }

    
    const tasksListElementWork = document.getElementById("task-work")
    const tasksListElementCheck = document.getElementById("task-check")
    const tasksListElementGoot = document.getElementById("task-goot")
    

//     taskElements.addEventListener("dragstart", (ev) => {
//         console.log("dragStart"); 
//         ev.currentTarget.classList.add("dragging");
//         console.log(ev.dataTransfer)
//     })

//     taskElements.addEventListener("dragend", (ev) => {
//   ev.currentTarget.classList.remove("dragging")},
// );

// tasksListElementWork.addEventListener("dragover", (ev) => 
//   ev.preventDefault()) 

// tasksListElementWork.addEventListener("drop", (ev) => {
//     ev.preventDefault();

// tasksListElementWork.append(taskElements)})

// tasksListElementCheck.addEventListener("dragover", (ev) => 
//   ev.preventDefault()) 

// tasksListElementCheck.addEventListener("drop", (ev) => {
//     ev.preventDefault();

// tasksListElementCheck.append(taskElements)})

// tasksListElementGoot.addEventListener("dragover", (ev) => 
//   ev.preventDefault()) 

// tasksListElementGoot.addEventListener("drop", (ev) => {
//     ev.preventDefault();

// tasksListElementGoot.append(taskElements)})

    
// }


btnAdd.addEventListener("click", addNewTask)