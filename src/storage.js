export {retrieveProjectLi,saveProject,lookForProjects,displayStorage,saveCalendarArray,lookForArrays,saveProjectLiArray}
import { projects , projectItems, projectList, projectTitle} from "./dom";
import { addContent } from "./toDo";
import { noTasks } from "./toDo";
import { displayProject } from "./displayProject";

function saveProject(projects){
    // Convert projects to JSON and store it in localStorage
    localStorage.setItem('projects', JSON.stringify(projects));

}

function saveCalendarArray(itemName, array){
    localStorage.setItem(itemName, JSON.stringify(array))
}

function lookForArrays(array) {
    const storedData = localStorage.getItem(array);

    // Check if storedData is not null before parsing
    return storedData !== null ? JSON.parse(storedData) : [];
}



function lookForProjects(){
    const storedProjects = localStorage.getItem('projects');
    return storedProjects !=null ? JSON.parse(storedProjects) : {};
}


function displayStorage(projectName){
    if(Object.keys(projects).length >0){
        noTasks.style.display = 'none';

        for (let i = 0; i < projects[projectName].length; i++) {
            const taskObject = projects[projectName][i];
            const taskTitle = taskObject.title;
            const taskDescription = taskObject.description;
            const taskDueDate = taskObject.dueDate;
            const taskPriority = taskObject.priority;
            addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);
    
           
            
        }
    }
    else{noTasks.style.display = 'flex';}

   
    
}

function homeStorage(){
    Object.keys(projects).forEach(projectName => {
        // Your code to work with each project
        displayStorage(projectName);
    });

}



function saveProjectLiArray(project){
    localStorage.setItem('projectList', JSON.stringify(project))
}

function retrieveProjectLi(){
    const projectLiArray = localStorage.getItem('projectList');
    return projectLiArray != null ? JSON.parse(projectLiArray) : []
    
    
}

function displayProjectItemsStorage(){

    projectItems.forEach((projectItem) =>{
       
        const project = document.createElement('li')
        project.className = 'projectItem';
        const text = projectItem
        console.log(text)
        project.textContent = text;
        projectList.appendChild(project);

        project.addEventListener('click',()=>{
            if(projectItems.length>0){
                noTasks.style.display = 'none';
                displayProject(text)
            }
            else{
                noTasks.style.display = 'flex';
            }
            
        })
})
}
document.addEventListener('DOMContentLoaded', homeStorage);

document.addEventListener('DOMContentLoaded', displayProjectItemsStorage );