const userInputs = document.querySelector(".inputText")
const btnAdd = document.getElementById("btnAdd")
const blockUlExecute = document.getElementById("task-execute")
const blockUlWork = document.getElementById("task-work")
const blockUlCheck = document.getElementById("task-check")
const blockUlGoot = document.getElementById("task-goot")

tasks = ["Understanding HTML CSS layouts positioning", "Adding Forms to websites", 
"Java Script Basics", "Advanced JS working with the DOM", "Control Structures"]



const blokTask = tasks.forEach((item, i, tasks) => {
    
    if(item === tasks[i] && item !== tasks[3] && item !== tasks[4]){
       const newElementTasks = document.createElement("li") 
      newElementTasks.innerHTML= tasks[i]
      blockUlWork.append(newElementTasks)
      item = i++
    } else {
        const newElementTasks = document.createElement("li") 
         newElementTasks.innerHTML= tasks[i]
         blockUlCheck.append(newElementTasks)
         item = i++
    }
    })

    



// const arrayCard = () => {
//     const newElementTasks1 = document.createElement("li")
//     const elArray0 = tasks[0]
//     newElementTasks1.innerHTML = elArray0
//     blockUlWork.append(newElementTasks1)
//     const newElementTasks2 = document.createElement("li")
//     const elArray1 = tasks[1]
//     newElementTasks2.innerHTML = elArray1
//     blockUlWork.append(newElementTasks2)
// }
// arrayCard()

const addNewTask = () => {
    const newElementTasks = document.createElement("li")
    const newTask = userInputs.value
    console.log(newTask)
   if(newTask.length === 0){
    return
   }else {
    newElementTasks.innerHTML = `<div draggable=true>${newTask}</div>`
    blockUlExecute.append(newElementTasks)
    tasks.push(`${newTask}`)
}
}

btnAdd.addEventListener("click", addNewTask)