
import priorityIconGreen from './images/priorityIconGreen.svg';
import priorityIconYellow from './images/priorityIconYellow.svg';
import priorityIconRed from './images/priorityIconRed.svg';
import priorityIconDarkRed from './images/priorityIconDarkRed.svg';
import checkIcon from './images/check-circle.svg';
import dotsIcon from './images/dots-horizontal.svg';
import {mainSectionContainer,toDo,projectItem, projectTasks,value, projectName, projects} from './dom'


export {textContent,toggleNoTasksDisplay,addContent,addTaskObjectToProject,createToDo, createTaskImgs, getPriority}

export const taskContainer = document.querySelector('.tasksContainer');
export const noTasks = document.querySelector('.noTasks');

//Create factory function to create objects for each toDoItems

function createToDo(title,description,dueDate,priority,projectName){
   return{
    title,
    description,
    dueDate,
    priority,
    projectName
   }
}

function createTaskDiv(){
let taskDiv = document.createElement('div');
taskDiv.className = 'taskDiv';
styleDiv(taskDiv)
return taskDiv
}

function textContent(element, text){
   element.textContent = text
}


function styleDiv(div){
div.style.width = '760px';
div.style.height = '200px';
div.style.backgroundColor = '#f0f5fe';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'center';
div.style.borderRadius ='10px';
div.style.padding ='20px';
div.style.marginBottom = '20px';  
div.style.marginTop = '70px' 
}


function addContent(title,priority,project,description,dueDate){
   const headingSection = document.createElement('div');
   headingSection.className = 'headingSection';

   const taskHeader = document.createElement('h2')
   taskHeader.className = 'taskHeader';
   taskHeader.textContent = title

   const informationIconSection = document.createElement('div');
   informationIconSection.className = 'informationIconSection';
  

   const priorityImg = document.createElement('img');
   getPriority(priority,priorityImg);

   const projectParagraph = document.createElement('p');
   projectParagraph.textContent = project;

   const descriptionBox = document.createElement('p');
   descriptionBox.textContent = "Description : " + description;

   const dueDateParagraph = document.createElement('p');
   dueDateParagraph.textContent = "Due Date : " + dueDate;



   const taskDiv = createTaskDiv();
   const taskImgs = createTaskImgs();
   
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

checkImg.src = checkIcon
checkImg.style.width = '30px'
checkImg.style.height = '30px'

dotsImg.src = dotsIcon
dotsImg.style.width = '30px'
dotsImg.style.height = '30px'

return {
   checkImg: checkImg,
   dotsImg: dotsImg,
 };
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

