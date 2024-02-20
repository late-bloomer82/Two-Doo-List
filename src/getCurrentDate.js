export {currentDateToString};

function getCurrentDate(){
    const currentDate = new Date()
    return currentDate
}

function currentDateToString(){
    const currentDate = getCurrentDate();
    const date =currentDate.toISOString().split('T')[0];
    return date;
}
