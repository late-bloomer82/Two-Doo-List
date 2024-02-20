import { taskContainer,addContent,noTasks,textContent } from "./toDo";
import { addTaskbutton, projectTitle } from "./dom";
export {displayWeekArray};

export const weekTasks = [];


function displayWeekArray(){
    textContent(projectTitle,"Week");
    taskContainer.innerHTML ='';
    addTaskbutton.remove();


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
        addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);

    }
}
}