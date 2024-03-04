//import images
import { webIcon, homeIcon, todayIcon, weekIcon,closeIcon } from './index';

//import functions and stuff
import { closeProject,taskDiv, updateTask,  appendToDom,projectItemMouseOut,projectItemMouseover,generateRandomId,addTaskObjectToProject,toggleNoTasksDisplay,createToDo,dialogCancelButton, dialogCloseButton, editMode, findTaskById, homeFindTaskById,todayFindTaskById, toggleEdit, weekFindTaskById} from './js_modules';
import { displayHomeArray, homeTasks } from './home';
import { todayTasks,displayTodayArray } from './today';
import { weekTasks,displayWeekArray} from './week';
import { addTaskToRespectiveArray, editTaskArray } from "./compareDates";
import { displayProject } from './displayProject';
import { lookForProjects,saveProject, saveCalendarArray, saveProjectLiArray, retrieveProjectLi } from './storage';

//Export functions
export {mainPageContent};

//Global variables for reusability
export let value
export let toDo;
export let projectName;


    
//Select necessary elements in global scope
const projectButton = document.getElementById('projectButton');
export const projectList = document.querySelector('.project-list');
const projectContainer = document.querySelector('.project-container');
const mainSectionHeader = document.querySelector('.main-section-header');
export const mainSection = document.querySelector('.main-section');
export const projectTitle = document.getElementById('project-title');
export const taskModal = document.getElementById('taskModal');
const formCancelButton = document.getElementById('formCancelButton');
const formAddButton = document.getElementById('formAddButton');
export const mainSectionContainer = document.querySelector('.main-section-container')


 
 
// Retrieve projects object from localStorage
export let projects = lookForProjects() || {}; 

// Retrieve project items array from localStorage
export let projectItems = retrieveProjectLi() || [];

export const addTaskbutton = document.createElement('button')
addTaskbutton.className = 'addTaskButton'
addTaskbutton.textContent = 'Add Task';
mainSectionHeader.appendChild(addTaskbutton)



    
function mainPageContent(){
    
    //Create necessary elements in global function scope
    const form = document.createElement('form');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'projectButtonContainer';

    
   //Header Section

    const header = document.querySelector('header');

    const websiteLogo = document.createElement('img');
    websiteLogo.className = 'websiteLogo';
    websiteLogo.src = webIcon;
    
    header.appendChild(websiteLogo)
    header.style.display = 'flex';
    header.style.justifyContent = 'center';


    //Sidebar

    //Select necessary elements
    const home = document.getElementById('home');
    const today = document.getElementById('today');
    const week = document.getElementById('week');

    //Display calendar panels
    home.addEventListener('click', displayHomeArray )
    today.addEventListener('click', displayTodayArray)
    week.addEventListener('click', displayWeekArray)
    
    //create images
    const homeImg = document.createElement('img');
    const todayImg = document.createElement('img');
    const weekImg = document.createElement('img');

    homeImg.src = homeIcon;
    todayImg.src = todayIcon;
    weekImg.src = weekIcon;
    
    
    //create h elements
    const homeHeading = document.createElement('h4');
    const todayHeading = document.createElement('h4');
    const weekHeading = document.createElement('h4');

    homeHeading.textContent = 'Home';
    todayHeading.textContent = 'Today';
    weekHeading.textContent = 'Week';

    //Append everythin
    home.appendChild(homeImg);
    home.appendChild(homeHeading);
    home.style.display = 'flex';
    home.style.cursor = 'pointer';

    today.appendChild(todayImg);
    today.appendChild(todayHeading);
    today.style.display = 'flex';
    today.style.cursor = 'pointer';


    week.appendChild(weekImg);
    week.appendChild(weekHeading);
    week.style.display = 'flex';
    week.style.cursor = 'pointer';



    
 
  
    projectButton.addEventListener('click', ()=>{

        //Creating project form 
        input.className = 'projectInput';
        input.type = 'text';
        input.placeholder = 'Enter project name...';
       
      
        
        cancelButton.className = 'projectCancelButton';
        cancelButton.textContent = 'Cancel';
        

        addButton.className = 'projectAddButton';
        addButton.textContent ='Add';
        
        //Appendin everythin
        projectContainer.appendChild(form);
        form.appendChild(input);
        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(addButton);
        form.appendChild(buttonContainer);
        

        projectButton.disabled = true;

        
    })
  

//Add Button Event Listener
addButton.addEventListener('click', function(event){

//Prevent page refresh upon click
event.preventDefault();

//Error handling for if user enters an empty string.
if(input.value.trim() === ""){
    return
}
//Disabling project button
projectButton.disabled = false;

//Projects List
let projectItem = document.createElement('li');

// Create close button
const closeButton = document.createElement('img');
closeButton.style.display = 'none';
closeButton.src = closeIcon;


projectItem.className ='projectItem';
value = input.value;

input.value = "";
projectItem.textContent = value;

projectList.appendChild(projectItem);
appendToDom(closeButton,projectItem)

//Add mouse effect to show close button
projectItemMouseover(projectItem,closeButton);
projectItemMouseOut(projectItem,closeButton);

//Event listener for closing the project
closeButton.addEventListener('click', (event)=>{
    event.stopPropagation();
    closeProject(projectItem,projectItem.textContent)
})

        
//Pushing project to projectItems array and saving it.
projectItems.push(projectItem.textContent);
saveProjectLiArray(projectItems)

//Add empty array project to projects object
projects[value] = [];

//Save projects object
saveProject(projects)

projectItem.addEventListener('click', (event)=>{
    
    
    addTaskbutton.style.display = 'flex';
    projectName = event.target.textContent;
    
    
    toggleNoTasksDisplay(projectName)
    displayProject(projectName)
    projectTitle.textContent = projectName; 
  
   
            
    })
        

//remove project form
form.remove()
 
})




//Cancel Button Event Listener
cancelButton.addEventListener('click', function(event){
//Prevent page refresh upon click
event.preventDefault();
projectButton.disabled = false;
form.remove();
         
    })


 //Add Task Event Listener
addTaskbutton.addEventListener('click', ()=>{
taskModal.style.display = 'flex'
})


//Form Add Button EL
formAddButton.addEventListener('click', (event)=>{
       
//Prevent page refresh upon click
event.preventDefault();

const key = projectTitle.textContent


///Getting the value of each user input
const titleValue = document.getElementById('title').value;
const descriptionValue = document.getElementById('description').value
const priorityValue = document.getElementById('priority').value;
const dueDateValue = document.getElementById('dueDate').value;
const id = generateRandomId()

if (editMode) {
    // Handle Update Logic
    const dueDateValue = document.getElementById('dueDate').value;
    const taskId = taskDiv.getAttribute('data-id');
    
    const task = findTaskById(taskId);
    const homeTask = homeFindTaskById(taskId);
    const todayTask = todayFindTaskById(taskId);
    
    const weekTask = weekFindTaskById(taskId);

    updateTask(task, taskId, titleValue, descriptionValue, dueDateValue, priorityValue);
    updateTask(homeTask, taskId, titleValue, descriptionValue, dueDateValue, priorityValue);
    if(todayTask){updateTask(todayTask, taskId, titleValue, descriptionValue, dueDateValue, priorityValue)};
    if(weekTask){updateTask(weekTask, taskId, titleValue, descriptionValue, dueDateValue, priorityValue)};

    editTaskArray(task, taskId)
   
    //Save calendar arrays
    saveCalendarArray('homeTasks',homeTasks)
    saveCalendarArray('todayTasks',todayTasks)
    saveCalendarArray('weekTasks',weekTasks)


    //Update display
    if(projectTitle.textContent === "Home"){displayHomeArray()};
    if(projectTitle.textContent === "Today"){displayTodayArray()};
    if(projectTitle.textContent === "This Week"){displayWeekArray()};

    //Save projects object
    saveProject(projects)
   
    taskModal.style.display = 'none'
    
    // Reset the edit mode
    toggleEdit()

   
   
}


else{
toDo = createToDo(titleValue,descriptionValue,dueDateValue,priorityValue,key,id,false);

addTaskObjectToProject(toDo);
toggleNoTasksDisplay(key)

displayProject(key)

//Add Task Object to its respective calendar array.
addTaskToRespectiveArray()

//Save all
saveCalendarArray('homeTasks',homeTasks)
saveCalendarArray('todayTasks',todayTasks)
saveCalendarArray('weekTasks',weekTasks)


const taskForm = document.getElementById('addTaskForm')
// Clear form inputs
taskForm.querySelectorAll('input, textarea, select').forEach((element) => {
    element.value = '';
  });
}
 //Save global project object to Storage
 saveProject(projects);

 taskModal.style.display = 'none'

    
})



//Closing dialog event listener for X button
dialogCloseButton(taskModal)
    

//Closing dialog event listener for Cancel Button
dialogCancelButton(taskModal)

}
