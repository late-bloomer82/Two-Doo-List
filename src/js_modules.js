// imgs and stuff
import {priorityIconGreen,priorityIconYellow, priorityIconRed,priorityIconDarkRed,checkIcon,dotsIcon,completedCheck } from './index';

//arrays, functions and variables
import {projectItems,projectTitle, projects} from './dom'
import {saveCalendarArray, saveProject, saveProjectLiArray } from './storage';
import { displayTodayArray, todayTasks } from './today';
import { displayWeekArray, weekTasks } from './week';
import { displayHomeArray, homeTasks } from './home';


export {closeProject,projectItemMouseOut,projectItemMouseover,appendToDom,homeFindTaskById,weekFindTaskById,todayFindTaskById,toggleEdit,checkifProjectIsEmpty,updateTask,findTaskById,generateRandomId,dialogCloseButton,dialogCancelButton,textContent,toggleNoTasksDisplay,addContent,addTaskObjectToProject,createToDo, createTaskImgs, getPriority}


export const taskContainer = document.querySelector('.tasksContainer');
export const noTasks = document.querySelector('.noTasks');
export let taskDiv;
export let editMode;

let informationIconSection;


//Create factory function to create objects for each toDoItems
function createToDo(title,description,dueDate,priority,projectName,id,isCompleted){
   return{
    title,
    description,
    dueDate,
    priority,
    projectName,
    id,
    isCompleted 
   }
}

function createTaskDiv(){
let taskDiv = document.createElement('div');
taskDiv.className = 'taskDiv';

return taskDiv
}

function textContent(element, text){
   element.textContent = text
}



function addContent(title,priority,project,description,dueDate,id){
   const headingSection = document.createElement('div');
   headingSection.className = 'headingSection';

   const taskHeader = document.createElement('h2')
   taskHeader.className = 'taskHeader';
   taskHeader.textContent = title

   informationIconSection = document.createElement('div');
   informationIconSection.className = 'informationIconSection';
  

   const priorityImg = document.createElement('img');
   priorityImg.className = 'priorityImg'
   getPriority(priority,priorityImg);

   const projectParagraph = document.createElement('p');
   projectParagraph.className = 'projectParagraph';

   projectParagraph.textContent = project;

   projectTitle.textContent = project;

   const descriptionBox = document.createElement('p');
   descriptionBox.className = 'descriptionBox';
   descriptionBox.textContent = "Description : " + description;

   const dueDateParagraph = document.createElement('p');
   dueDateParagraph.className ='dueDateParagraph';
   dueDateParagraph.textContent = "Due Date : " + dueDate;



   const taskDiv = createTaskDiv();
   taskDiv.setAttribute('data-id',id)
   const taskImgs = createTaskImgs();
   const checkImg = taskImgs.checkImg

   const taskId = taskDiv.getAttribute('data-id')
   
   const taskObject = findTaskById(taskId)
   const homeTaskObject = homeFindTaskById(taskId);
   const todayTaskObject = todayFindTaskById(taskId);
   const weekTaskObject = weekFindTaskById(taskId);

   
   if(taskObject){checkIfCompleted(checkImg,taskDiv,taskObject.isCompleted)}
   else if(homeTaskObject){checkIfCompleted(checkImg,taskDiv,homeTaskObject.isCompleted)}
   else if(todayTaskObject){checkIfCompleted(checkImg,taskDiv,todayTaskObject.isCompleted)} 
   else if(weekTaskObject){checkIfCompleted(checkImg,taskDiv,weekTaskObject.isCompleted)}

   
   appendToDom(priorityImg,taskHeader);
   appendToDom(taskHeader,headingSection);
   appendToDom(taskImgs.dotsImg,informationIconSection);
   appendToDom(taskImgs.checkImg,informationIconSection);
   appendToDom(informationIconSection,headingSection)
   appendToDom(headingSection,taskDiv);
   appendToDom(projectParagraph,taskDiv);
   appendToDom(descriptionBox,taskDiv);
   appendToDom(dueDateParagraph,taskDiv);
   appendToDom(taskDiv,taskContainer);


}

function getPriority(priorityLevel,priorityImg){
   if (priorityLevel === 'Low'){
      priorityImg.src = priorityIconGreen
   }
   else if(priorityLevel === 'Medium'){
      priorityImg.src = priorityIconYellow
   }
   else if(priorityLevel === 'High'){
      priorityImg.src = priorityIconRed
   }
   else if(priorityLevel === 'Critical'){
      priorityImg.src = priorityIconDarkRed
   }
   

}

function appendToDom(element,targetContainer){
   targetContainer.appendChild(element)
}


function createTaskImgs(){
//Icon imgs
const checkImg = document.createElement('img');
const dotsImg = document.createElement('img');

checkImg.className = 'checkImg';
checkImg.src = checkIcon
addEventListenerCheckImg(checkImg)

dotsImg.className = 'checkImg';
dotsImg.src = dotsIcon
createTaskOptions(dotsImg)

return {
   checkImg: checkImg,
   dotsImg: dotsImg,
 };
}

function addEventListenerCheckImg(img){
   img.addEventListener('click', (event)=>{
      let taskNode = event.currentTarget.closest('[data-id]')
      const taskId = taskNode.getAttribute('data-id')
      const taskObject = findTaskById(taskId)
      toggleIsCompletedBoolean(taskObject)
      saveProject(projects)
      const isCompletedBoolean = taskObject.isCompleted
      checkIfCompleted(img,taskNode,isCompletedBoolean)
   })
}
function checkIfCompleted(img,taskNode,isCompleted){
   if(isCompleted === true){
      img.src = completedCheck
      taskNode.style.textDecoration = 'line-through';

      
      

   }
   else if(isCompleted === false){
      img.src = checkIcon
      taskNode.style.textDecoration ='none';
      
   }
   
}

function toggleIsCompletedBoolean(taskObject) {
   taskObject.isCompleted = !taskObject.isCompleted;
 }
 

 function createTaskOptions(img){
   //Create the options interface
  

   const taskOptions = document.createElement('div');
   taskOptions.className ='taskOptions';
   appendToDom(taskOptions,informationIconSection)
  
   
   const editOption = document.createElement('p');
   editOption.className = 'editOption';
   textContent(editOption, 'Edit')
   appendToDom(editOption,taskOptions)
   editOption.addEventListener('click',(event)=>{
       const taskModal = document.getElementById('taskModal');
       taskModal.style.display = 'flex';
       editMode = true;
       taskDiv = event.currentTarget.closest('[data-id]');
       
      

       dialogCloseButton(taskModal)
       dialogCancelButton(taskModal)
     
    })
      
  
   const deletedOption = document.createElement('p');
   deletedOption.className = 'deletedOption';
   textContent(deletedOption, 'Delete')
   appendToDom(deletedOption,taskOptions)
   deletedOption.addEventListener('click', (event)=>{
      
      
       taskDiv = event.currentTarget.closest('[data-id]');
       const projectParagraph = taskDiv.querySelector('.projectParagraph');
       const taskProjectName = projectParagraph.textContent
       const taskId = taskDiv.getAttribute('data-id');
      
       
     
       
       const project = projects[taskProjectName]
       

       taskDiv.remove();
       

       const indexToRemove = project.findIndex(item => item.id === taskId);
       const homeIndexToRemove = homeTasks.findIndex(item => item.id === taskId);
       const todayIndexToRemove = todayTasks.findIndex(item => item.id === taskId);
       const weekIndexToRemove = weekTasks.findIndex(item => item.id === taskId);

       
       project.splice(indexToRemove, 1);

       if(homeIndexToRemove != -1){homeTasks.splice(homeIndexToRemove,1)}
       if(todayIndexToRemove != -1){todayTasks.splice(todayIndexToRemove,1)}
       if(weekIndexToRemove != -1){weekTasks.splice(weekIndexToRemove,1)}
       
       saveProject(projects)
       saveCalendarArray('homeTasks',homeTasks)
       saveCalendarArray('todayTasks',todayTasks)
       saveCalendarArray('weekTasks',weekTasks)

    
      if(checkifProjectIsEmpty(taskProjectName) && (document.querySelector('.tasksContainer').innerHTML ==='')){
         noTasks.style.display = 'flex'
      }
   })
// localStorage.clear();

   img.addEventListener('click', (event)=>{
      
      taskOptions.style.display = 'flex';
      //Stop the img click from reaching the entire document body to not trigger both event listeners at the same time
      event.stopPropagation();
      document.body.addEventListener('click',()=>{
         taskOptions.style.display = 'none'
       })
   })
 }


 function findTaskById(taskId) {
   // Iterate through projects and tasks to find the matching task
   for (const project in projects) {
       const projectTasks = projects[project];
       const foundTask = projectTasks.find(task => task.id === taskId);
       if(foundTask){
       return foundTask;
       }
     
   }

  
}


function homeFindTaskById(taskId) {
   // Use find method on the homeTasks array
   const foundTask = homeTasks.find(task => task.id === taskId);

 
   return foundTask || null;
}


function todayFindTaskById(taskId) {
   
       
       const foundTask = todayTasks.find(task => task.id === taskId);
       return foundTask || null;
      
     
   }

  

function weekFindTaskById(taskId) {
 
   const foundTask = weekTasks.find(task => task.id === taskId)
   return foundTask || null;

  
}




function updateTask(task,taskId ){
   
   ///Getting the value of each user input
   const titleValue = document.getElementById('title').value;
   const descriptionValue = document.getElementById('description').value
   const priorityValue = document.getElementById('priority').value;
   const dueDateValue = document.getElementById('dueDate').value;

   
   // Update task properties
   task.title = titleValue;
   task.description = descriptionValue;
   task.priority = priorityValue;
   task.dueDate = dueDateValue;

  


// Now, update the corresponding DOM elements
updateTaskDOM(taskId,titleValue,descriptionValue,priorityValue,dueDateValue);
}

function updateTaskDOM(taskId,newTitle,newDescription,newPriority,newDueDate) {
   //Select the task div node
   const taskDiv = document.querySelector(`[data-id="${taskId}"]`);

   //Select task elements
   const taskHeader = taskDiv.querySelector('.taskHeader')
   const priorityImg = taskDiv.querySelector('.priorityImg');
  
   const projectParagraph = taskDiv.querySelector('.projectParagraph');
   const descriptionBox = taskDiv.querySelector('.descriptionBox');
   const dueDateParagraph = taskDiv.querySelector('.dueDateParagraph')
   
   //Update dom elements
   textContent(taskHeader,newTitle);
   getPriority(newPriority,priorityImg);
   textContent(projectParagraph,projectTitle.textContent);
   textContent(descriptionBox,"Description: " + newDescription);
   textContent(dueDateParagraph,"Due Date : " + newDueDate);
   
   //Append img to dom container
   appendToDom(priorityImg,taskHeader);
}


 function dialogCloseButton(dialog){
  
      document.getElementById('closeFormButton').addEventListener('click',(event )=>{
      event.preventDefault();
      dialog.style.display = 'none'
 })
}

 function dialogCancelButton(dialog){
   //Form Cancel Button EL
   const formCancelButton = document.getElementById('formCancelButton');
   formCancelButton.addEventListener('click', (event)=>{
   dialog.style.display = 'none';
   
   //Prevent page refresh upon click
   event.preventDefault();

})

}


function toggleNoTasksDisplay(projectName){
   if(projects[projectName].length===0){
      noTasks.style.display = 'flex'
  }
  else{
      noTasks.style.display = 'none';
  }
}

function addTaskObjectToProject(object){

   const title = document.getElementById('project-title');
   let titleContent = title.textContent;

   projects[titleContent].push(object);

  
}




const generateRandomId = () => {
	return Math.random().toString(36).substring(2);
};
 
function checkifProjectIsEmpty(projectName){
   if(Object.keys(projects[projectName]).length === 0){
      return true;
   }
  else{return false}
}

function toggleEdit(){
   editMode = !editMode;
} 

function projectItemMouseover(projectItem,closeButton){
   projectItem.addEventListener('mouseover', ()=>{
      closeButton.style.display = 'inline';
   })
}

function projectItemMouseOut(projectItem, closeButton){
   projectItem.addEventListener('mouseout', ()=>{
      closeButton.style.display = 'none';
   })
}

function closeProject(projectNode, projectName){
   
      
      projectNode.remove();

      //Remove project from projectItems array
      const indexToRemove = projectItems.findIndex((project) => project === projectName);
      projectItems.splice(indexToRemove,1);
      

      //Remove project from projects object
      delete projects[projectName];

      //Remove all project tasks from calendar arrays
      const homeIndexesToRemove = 
      homeTasks.map((project, index) => (project.projectName === projectName ? index : -1))
      .filter(index => index !== -1);

      const todayIndexesToRemove = todayTasks.map((project, index) => (project.projectName === projectName ? index : -1))
      .filter(index => index !== -1);

      const weekIndexesToRemove = weekTasks.map((project, index) => (project.projectName === projectName ? index : -1))
      .filter(index => index !== -1);

      if(homeIndexesToRemove){homeIndexesToRemove.forEach(index => homeTasks.splice(index, 1))}
      if(todayIndexesToRemove){todayIndexesToRemove.forEach(index => todayTasks.splice(index, 1));}
      if(weekIndexesToRemove){weekIndexesToRemove.forEach(index => weekTasks.splice(index, 1));}

      //Save updated arrays and object.
      saveProject(projects)
      saveProjectLiArray(projectItems)
      
      saveCalendarArray('homeTasks',homeTasks)
      saveCalendarArray('todayTasks',todayTasks)
      saveCalendarArray('weekTasks',weekTasks)

       //Update display
      if(projectTitle.textContent === "Home"){displayHomeArray()}
      else if(projectTitle.textContent === "Today"){displayTodayArray()}
      else if(projectTitle.textContent === "This Week"){displayWeekArray()}
      else{displayHomeArray()}
   
      
   
}

