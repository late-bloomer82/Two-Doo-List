import { taskContainer,addContent,noTasks, textContent } from "./toDo"
import { addTaskbutton, projectTitle } from "./dom";
export {displayTodayArray};

export const todayTasks = [];


function displayTodayArray(){
    textContent(projectTitle,"Today");
    taskContainer.innerHTML =''
    addTaskbutton.remove()

    if(todayTasks.length === 0){
        noTasks.style.display = 'flex'
    }
    else{
        noTasks.style.display = 'none'
    for(let i = 0 ; i<todayTasks.length ; i++){

        let taskObject = todayTasks[i];
        const taskTitle = taskObject.title;
        const taskDescription = taskObject.description;
        const taskDueDate = taskObject.dueDate;
        const taskPriority = taskObject.priority;
        const projectName = taskObject.projectName
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);

    }
}
}