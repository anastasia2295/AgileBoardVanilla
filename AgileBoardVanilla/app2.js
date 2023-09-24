const userInputs = document.querySelector(".inputText")
const btnAdd = document.getElementById("btnAdd")
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

    const deleteElement = () => {

    }

const addNewTask = () => {
    const newElementTasks = document.createElement("li")
    const newTask = userInputs.value
    console.log(newTask)
   if(newTask.length === 0){
    return
   }else {
    newElementTasks.innerHTML = newTask
    blockUlExecute.append(newElementTasks)
    tasks.push(`${newTask}`)

    let currentDroppable = null;

    newElementTasks.onmousedown = function(event) {

      let shiftX = event.clientX - newElementTasks.getBoundingClientRect().left;
      let shiftY = event.clientY - newElementTasks.getBoundingClientRect().top;

      newElementTasks.style.position = 'absolute';
      newElementTasks.style.zIndex = 1000;
      document.body.append(newElementTasks);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        newElementTasks.style.left = pageX - shiftX + 'px';
        newElementTasks.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        newElementTasks.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        newElementTasks.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null если мы были не над droppable до этого события
            // (например, над пустым пространством)
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
            // (например, только что покинули droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      newElementTasks.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        newElementTasks.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
        blockUlWork = elem
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
        blockUlWork = elem
      elem.style.background = '';
    }

    newElementTasks.ondragstart = function() {
      return false;
    };
}
}

btnAdd.addEventListener("click", addNewTask)