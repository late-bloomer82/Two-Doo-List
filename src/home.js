import { taskContainer,addContent, noTasks,textContent } from "./js_modules"
import { addTaskbutton, projectTitle } from "./dom";
import {lookForArrays} from "./storage";
export {displayHomeArray};


export const homeTasks = lookForArrays('homeTasks') || []


function displayHomeArray(){
    textContent(projectTitle,"Home");
    taskContainer.innerHTML ='';
    addTaskbutton.style.display = 'none'
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
        const id = taskObject.id
        
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate,id);
        textContent(projectTitle,"Home");

    }
}

}


