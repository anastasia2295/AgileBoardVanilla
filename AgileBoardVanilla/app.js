const userInputs = document.querySelector(".inputText")
const btnAdd = document.getElementById("btnAdd")
const blockUl = document.getElementById("task-execute")

task = []


const addNewTask = () => {
    const newElementTasks = document.createElement("li")
    const newTask = userInputs.value
    newElementTasks.innerHTML = newTask
    console.log(newTask)
   if(newTask.length === 0){
    return
   }else {
    newElementTasks.innerHTML = `<div draggable=true>${newTask}</div>`
    blockUl.append(newElementTasks)
    task.push(newElementTasks)
console.log(task)
}
// function dragstart_handler(ev) {
//     // Добавить id целевого элемента в объект передачи данных
//     ev.newElementTasks.setData("text/plain", ev.target.id);
//   }
//   window.addEventListener("DOMContentLoaded", () => {
    
//     // Добавить обработчик события `dragstart`
//     newElementTasks.addEventListener("dragstart", dragstart_handler);
//   });


}


btnAdd.addEventListener("click", addNewTask)