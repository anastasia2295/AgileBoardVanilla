const userInputs = document.querySelector(".inputText")
const btnAdd = document.getElementById("btnAdd")
const blockUlExecute = document.getElementById("task-execute")
const blockUlWork = document.getElementById("task-work")
const blockUlCheck = document.getElementById("task-check")
const blockUlGoot = document.getElementById("task-goot")

const tasks = [{}]
console.log(tasks)

const render = () => {
    tasks.forEach((title) => {
        if(title.status === "EXECUTE"){
            blockUlExecute.append(li);
        }else if (title.status === "WORK"){
            blockUlWork.append(li);
        }else if(title.status === "CHECK"){
            blockUlCheck.append(li)
        }else if(title.status === "EXECUTE"){
            blockUlGoot.append(li)
        }
    })    
}


const newTask = () =>{
    const userInpitValue = userInputs.value
    if(userInpitValue.lenght === 0) {
        return
    }else {  
    const li = document.createElement("li") 
    li.innerHTML = `<div draggable=true>${userInpitValue}</div>`
    blockUlExecute.append(li)
    li.addEventListener("dragstart", (ev) => {
        ev.currentTarget.classList.add("dragging")});
        console.log("dragstart")
        console.log("dragging")
    }
    tasks.push(`${userInpitValue}`)
}

btnAdd.addEventListener("click", newTask)


