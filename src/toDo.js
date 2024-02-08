export {createToDo};

//Create factory function to create objects for each toDoItems

function createToDo(title,description,dueDate,priority){
   return{
    title,
    description,
    dueDate,
    priority
   }
}


