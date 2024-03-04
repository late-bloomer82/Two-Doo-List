import {currentDateToString} from './getCurrentDate';
import  {add, isWithinInterval} from 'date-fns';
import {toDo} from './dom';

import { homeTasks } from './home';
import { todayTasks } from './today';
import { weekTasks } from './week';

export{addTaskToRespectiveArray, editTaskArray};






//GetDate

function convertDateToString(){
    let currentStringDate = currentDateToString();
    return currentStringDate;
}



function getWeekInterval(){


const currentDate = new Date();

const SevenDaysAfterCurrentDate = add(currentDate,{days:7});

const taskDueDate = new Date(toDo.dueDate)

let Week = isWithinInterval(taskDueDate, {start: currentDate, end: SevenDaysAfterCurrentDate });
return Week;
}

function addTaskToRespectiveArray(){
     
    const currentStringDate = convertDateToString()
    const getWeek = getWeekInterval()

    //Home
    homeTasks.push(toDo)

    //Today
    if(toDo.dueDate == currentStringDate){
        todayTasks.push(toDo)
    }
    //Week
    if(getWeek){
       
       weekTasks.push(toDo);
    }
    
 
 }

 function editTaskArray(task, taskId){
    const currentStringDate = convertDateToString()
    
    const currentDate = new Date();
        
    const SevenDaysAfterCurrentDate = add(currentDate,{days:7});
        
    const taskDueDate = new Date(task.dueDate)
      
    let Week = isWithinInterval(taskDueDate, {start: currentDate, end: SevenDaysAfterCurrentDate });
   
    //Remove from current calendar arrays
    removeTaskFromCalendarArray(taskId)

    
    //Add to updated calendar arrays
    homeTasks.push(task)

    if(task.dueDate == currentStringDate){
        todayTasks.push(task)
    }
    
    if(Week){
       
       weekTasks.push(task);
    }
 }




 function removeTaskFromCalendarArray(taskId){
    
    const homeIndexToRemove = homeTasks.findIndex(task => task.id === taskId);

    const todayIndexToRemove = todayTasks.findIndex(task => task.id === taskId);

    const weekIndexToRemove = weekTasks.findIndex(task => task.id === taskId);

    if (homeIndexToRemove !== -1) {
        homeTasks.splice(homeIndexToRemove, 1);
    }

    if (todayIndexToRemove !== -1) {
        todayTasks.splice(todayIndexToRemove, 1);
    }

    if (weekIndexToRemove !== -1) {
        weekTasks.splice(weekIndexToRemove, 1);
    }
}
 
