import { taskContainer,addContent,noTasks,textContent } from "./js_modules";
import { addTaskbutton, projectTitle } from "./dom";
import {lookForArrays} from "./storage";
export {displayWeekArray};

export const weekTasks = lookForArrays('weekTasks') || [];


function displayWeekArray(){
    textContent(projectTitle,"This Week");
    taskContainer.innerHTML ='';
    addTaskbutton.style.display = 'none'


    if(weekTasks.length === 0){
        noTasks.style.display = 'flex'
    }
    else{
        
        noTasks.style.display = 'none'
    
    for(let i = 0 ; i<weekTasks.length ; i++){

        let taskObject = weekTasks[i];
        const taskTitle = taskObject.title;
        const taskDescription = taskObject.description;
        const taskDueDate = taskObject.dueDate;
        const taskPriority = taskObject.priority;
        const projectName = taskObject.projectName
        const id = taskObject.id
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate,id);
        textContent(projectTitle,"This Week");
    }
}

}