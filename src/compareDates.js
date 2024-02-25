import {currentDateToString} from './getCurrentDate';
import  {add, isWithinInterval, sub } from 'date-fns';
import { toDo , projects} from './dom';
import { displayProject } from './displayProject';
import { homeTasks } from './home';
import { todayTasks } from './today';
import { weekTasks } from './week';

export{addTaskToRespectiveArray};






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
    if(1===1){
        homeTasks.push(toDo)
        
    }
    
    //Today
    if(toDo.dueDate == currentStringDate){
        todayTasks.push(toDo)
    }
    //Week
    if(getWeek){
       
       weekTasks.push(toDo);
    }
    
 
 }




 