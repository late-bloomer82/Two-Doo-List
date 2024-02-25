import { taskContainer,addContent, noTasks,textContent } from "./toDo"
import { addTaskbutton, projectTitle } from "./dom";
import {lookForArrays } from "./storage";
export {displayHomeArray};

export const homeTasks = lookForArrays('homeTasks') || []


function displayHomeArray(){
    textContent(projectTitle,"Home");
    taskContainer.innerHTML ='';
    addTaskbutton.remove();
    if(homeTasks.length === 0){
        noTasks.style.display = 'flex'
    }
    else{
        
        noTasks.style.display = 'none'

        for(let i = 0 ; i<homeTasks.length ; i++){
            

        let taskObject = homeTasks[i];
        const taskTitle = taskObject.title;
        const taskDescription = taskObject.description;
        const taskDueDate = taskObject.dueDate;
        const taskPriority = taskObject.priority;
        const projectName = taskObject.projectName
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);
        textContent(projectTitle,"Home");

    }
}
}