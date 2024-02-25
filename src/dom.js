//import images
import webIcon from '../dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg';
import homeIcon from '../dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg';
import todayIcon from '../dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg';
import weekIcon from '../dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg';
import  {toDoDiv,  } from './toDo';

//import object function
import { createToDo } from './toDo';

//import function
import { addToDo,addTaskObjectToProject,toggleNoTasksDisplay } from './toDo';
import { displayHomeArray, homeTasks } from './home';
import { todayTasks } from './today';
import { weekTasks } from './week';
import {displayTodayArray} from './today';
import { displayWeekArray } from './week';
import { addTaskToRespectiveArray } from "./compareDates";

//Export functions
export {mainPageContent};

//import stuff
import { storedDivContent } from './toDo';
import { heading} from './toDo';
import { displayProject } from './displayProject';
import { lookForProjects,saveProject, lookForProjectssplayStorage, saveCalendarArray, saveProjectLiArray, retrieveProjectLi } from './storage';

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


export const addTaskbutton = document.createElement('button')


// Define an object to store tasks for each project
export let projects = lookForProjects() || {}; 



export let projectItems = retrieveProjectLi() || [];
console.log(projectItems)
    
function mainPageContent(){
    
    //Create necessary elements in global function scope
    const form = document.createElement('form');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');
    const buttonContainer = document.createElement('div');
   

    //Header Section

    const header = document.querySelector('header');
    const websiteLogo = document.createElement('img');
    websiteLogo.src = webIcon;
    websiteLogo.style.width = '80px';
    websiteLogo.style.height = '80px';
    websiteLogo.style.borderRadius = '20px'
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
    
    //style imgs
    homeImg.style.width = '40px';
    homeImg.style.height = '40px';
    

    todayImg.style.width = '40px';
    todayImg.style.height = '40px';
  

    weekImg.style.width = '40px';
    weekImg.style.height = '40px';
  
   
    //create h elements
    const homeHeading = document.createElement('h3');
    const todayHeading = document.createElement('h3');
    const weekHeading = document.createElement('h3');

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

        //Styling the elements
        input.type = 'text';
        input.placeholder = 'Enter your project name';
        input.style.borderRadius = '5px';
        input.style.height = '30px';
        input.style.width = '170px';
        
        
        buttonContainer.style.display ='flex';
        buttonContainer.style.marginTop = '10px';
        buttonContainer.style.gap = '20px';

        cancelButton.textContent = 'Cancel';
        cancelButton.style.color = 'white';
        cancelButton.style.backgroundColor = '#C576F6'
        cancelButton.style.border = '1px solid #C576F6';
        cancelButton.style.borderRadius = '10px'
        cancelButton.style.width = '75px';
        cancelButton.style.height = '30px';
        cancelButton.style.cursor = 'pointer';

        addButton.textContent ='Add';
        addButton.style.color ='white';
        addButton.style.backgroundColor = '#FFD700'
        addButton.style.border = '1px solid #FFD700';
        addButton.style.borderRadius = '10px';
        addButton.style.width = '75px';
        addButton.style.height = '30px';
        addButton.style.cursor = 'pointer';

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

//Handling errors
projectButton.disabled = false;
//Projects List
let projectItem = document.createElement('li');

projectItem.className ='projectItem';
value = input.value;
input.value = "";
projectItem.textContent = value;
projectList.appendChild(projectItem);

projectItems.push(projectItem.textContent);

saveProjectLiArray(projectItems)
console.log(projectItem);
console.log(projectItems);

projects[value] = [];
        
        
//Individual projects 
projectItem.addEventListener('click', (event)=>{
addTaskbutton.style.width = '100px';
addTaskbutton.style.height = '40px';
addTaskbutton.style.borderRadius = '15px';
addTaskbutton.style.marginTop = '15px';
addTaskbutton.textContent = 'Add Task';
// console.log('dog')
mainSectionHeader.style.display = 'flex';
mainSectionHeader.style.justifyContent = 'space-between';
mainSectionHeader.appendChild(addTaskbutton)
            
projectName = event.target.textContent;
projectTitle.textContent = projectName; 

toggleNoTasksDisplay(projectName)
displayProject(projectName)

        
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
taskModal.showModal();
})


//Form Add Button EL
formAddButton.addEventListener('click', (event)=>{
       
//Prevent page refresh upon click
event.preventDefault();

///Getting the value of each user input
const titleValue = document.getElementById('title').value;
const descriptionValue = document.getElementById('description').value
const priorityValue = document.getElementById('priority').value;
const dueDateValue = document.getElementById('dueDate').value;

toDo = createToDo(titleValue,descriptionValue,dueDateValue,priorityValue,projectName);
    
addTaskObjectToProject(toDo);
toggleNoTasksDisplay(projectName)
displayProject(projectName)

//Add Task Object to its calendar array.
addTaskToRespectiveArray()
saveCalendarArray('homeTasks',homeTasks)
saveCalendarArray('todayTasks',todayTasks)
saveCalendarArray('weekTasks',weekTasks)

 //Save global project object to Storage
 saveProject(projects);
 console.log('Projects after adding task:', projects);
taskModal.close();
    
})


//Preventing default refresh for the Dialog Modal X button
document.getElementById('closeFormButton').addEventListener('click',(event )=>{
event.preventDefault();
taskModal.close();
 })
    

//Form Cancel Button EL
formCancelButton.addEventListener('click', (event)=>{
        taskModal.close()
        
        //Prevent page refresh upon click
        event.preventDefault();

    })

    
}

