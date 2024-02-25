import {projects} from "./dom";
import {addContent ,taskContainer} from "./toDo";

export {displayProject};


function displayProject(projectName) {
    
    //Clear Content
    taskContainer.innerHTML = '';

    for (let i = 0; i < projects[projectName].length; i++) {
        const taskObject = projects[projectName][i];
        const taskTitle = taskObject.title;
        const taskDescription = taskObject.description;
        const taskDueDate = taskObject.dueDate;
        const taskPriority = taskObject.priority;
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);

       
        
    }
     
   
}

