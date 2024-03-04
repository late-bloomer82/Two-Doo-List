import {projects} from "./dom";
import {addContent,noTasks,taskContainer,checkifProjectIsEmpty} from "./js_modules";


export {displayProject};


function displayProject(projectName) {
    
     //Clear Content
     taskContainer.innerHTML = '';
     if(checkifProjectIsEmpty(projectName)){
        noTasks.style.display ='flex';
     }
   
   
    else{
    for (let i = 0; i < projects[projectName].length; i++) {
        const taskObject = projects[projectName][i];
        const taskTitle = taskObject.title;
        const taskDescription = taskObject.description;
        const taskDueDate = taskObject.dueDate;
        const taskPriority = taskObject.priority;
        const id = taskObject.id
        
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate,id);
        
        
       
        
    }
}
    
   
}

