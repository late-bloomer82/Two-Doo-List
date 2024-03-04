import { closeIcon } from "./index";
import { projects , projectItems, projectList, projectTitle,addTaskbutton} from "./dom";
import { addContent,closeProject, projectItemMouseOut, projectItemMouseover,noTasks ,appendToDom } from "./js_modules";
import { displayProject } from "./displayProject";
import { homeTasks } from "./home";

export {homeStorage,retrieveProjectLi,saveProject,lookForProjects,displayStorage,saveCalendarArray,lookForArrays,saveProjectLiArray}



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
            const id = taskObject.id
            addContent(taskTitle, taskPriority, projectName, taskDescription, taskDueDate, id);
    
           
            
        }
    }
    else{noTasks.style.display = 'flex';}

   
    
}

function homeStorage(){
    Object.keys(projects).forEach(projectName => {
        // Your code to work with each project
        displayStorage(projectName);
    });
    if(homeTasks.length === 0){
        noTasks.style.display = 'flex'
    }
    projectTitle.textContent = "Home";

}



function saveProjectLiArray(array){
    localStorage.setItem('projectList', JSON.stringify(array))
}

function retrieveProjectLi(){
    const projectLiArray = localStorage.getItem('projectList');
    return projectLiArray != null ? JSON.parse(projectLiArray) : []
    
    
}


function displayProjectItemsStorage(){

    projectItems.forEach((projectItem) =>{
       
        const project = document.createElement('li')
        project.className = 'projectItem';


        // Create close button
        const closeButton = document.createElement('img');
        closeButton.style.display = 'none';
        closeButton.src = closeIcon;
        
        let projectName = projectItem
        project.textContent = projectName;


        projectList.appendChild(project);
        appendToDom(closeButton,project);

        //Add mouse effect to show close button
        projectItemMouseover(project,closeButton);
        projectItemMouseOut(project,closeButton);

        //Event listener for closing the project
        closeButton.addEventListener('click', (event)=>{
            event.stopPropagation();
            closeProject(project,project.textContent)
        })
        
        
        project.addEventListener('click',()=>{
            if(projectItems.length>0){
                noTasks.style.display = 'none';
                addTaskbutton.style.display = 'flex';
                projectTitle.textContent =projectName;
                
                displayProject(projectName)
               
                
            }
            else{
                noTasks.style.display = 'flex';
            }
            
        })
})

  
}



document.addEventListener('DOMContentLoaded', displayProjectItemsStorage );

document.addEventListener('DOMContentLoaded', homeStorage);

