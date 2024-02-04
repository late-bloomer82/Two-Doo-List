//import images
import webIcon from '../dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg';
import homeIcon from '../dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg';
import todayIcon from '../dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg';
import weekIcon from '../dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg';

//Export function
export {mainPageContent};


function mainPageContent(){

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

    today.appendChild(todayImg);
    today.appendChild(todayHeading);
    today.style.display = 'flex';

    week.appendChild(weekImg);
    week.appendChild(weekHeading);
    week.style.display = 'flex';


    //Create and select necessary elements
    const projectButton = document.getElementById('projectButton');
    const projectSection = document.querySelector('.project');
    const projectList = document.querySelector('.project-list');
    const projectContainer = document.querySelector('.project-container')

    const form = document.createElement('form');
    const input = document.createElement('input');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');
    const buttonContainer = document.createElement('div');



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
        let value = input.value;
        input.value = "";
        form.remove()

        //Create project
        const projectItem = document.createElement('li');

        projectItem.textContent = value;
        projectItem.style.cursor = 'pointer';
        projectItem.style.borderRadius = '8px';
        projectItem.style.padding = '10px';
        projectList.appendChild(projectItem);

        // Add an event listener for mouseover (hover)
        projectItem.addEventListener('mouseover', function() {
           projectItem.style.backgroundColor ='#e6ebf4'
        });

        // Add an event listener for mouseout (mouseleave)
        projectItem.addEventListener('mouseout', function() {
            projectItem.style.backgroundColor = '#f0f5fe';
        });


        
    })

    //Cancel Button Event Listener
    cancelButton.addEventListener('click', function(event){

        //Prevent page refresh upon click
        event.preventDefault();

        
        projectButton.disabled = false;
        form.remove();
        
        
    })


}

