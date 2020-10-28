/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll(".landing__container");/*loop with for loop*/
const navigationBarList = document.querySelector('ul');
var activeElements = document.querySelectorAll('section');
var i = 0;
var scrollPos = (document.body.getBoundingClientRect()).top;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function inViewport(element){
 var vp = element.getBoundingClientRect();
 return (vp.top>0 || vp.bottom >150) ;
};
 
function onViewport(element){
    var vp = element.getBoundingClientRect();
    return (vp.top<0 || vp.bottom <300) ;
   };

function findPos (object){
    var currentTop = 0;
    if (object.offsetParent) {
            do {
                currentTop += object.offsetTop;
            } while (object = object.offsetParent);
        return [currentTop];
        }
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
 function buildNavBar(){
const navigationBar = document.querySelector(".navbar__menu");
for(const section of sections){
    const listItem = document.createElement('li');
    listItem.textContent = section.querySelector('h2').textContent;
    navigationBarList.appendChild(listItem);
} navigationBar.appendChild(navigationBarList);
}



// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function setActive(){
const listItems = document.querySelectorAll('li');
if((document.body.getBoundingClientRect().top)>scrollPos){
    if (i==-1){
        i++;
    }
if(onViewport(activeElements[i])){
    if(!activeElements[i].classList.contains("your-active-class")){
        activeElements[i].classList.add("your-active-class");
    } 
    for(const item of listItems){
        if(activeElements[i].querySelector('h2').textContent == item.textContent){
            item.classList.add("your-active-item"); /*Highlight section name in navigation bar */
        }
       
    }
    
}
else{
    activeElements[i].classList.remove("your-active-class");  
      for(const item of listItems){ 
            if(activeElements[i].querySelector('h2').textContent == item.textContent){
                item.classList.remove("your-active-item");
             
            }
        }
    i--;
}}
else{
    if (i==-1){
        i++;
    }
    if(inViewport(activeElements[i])){
        if(!activeElements[i].classList.contains("your-active-class")){
            activeElements[i].classList.add("your-active-class");
        } 
        for(const item of listItems){
            if(activeElements[i].querySelector('h2').textContent == item.textContent){
                item.classList.add("your-active-item"); /*Highlight section name in navigation bar */
               
            }
        }
    }
    else {
        activeElements[i].classList.remove("your-active-class");
        for(const item of listItems){
            if(activeElements[i].querySelector('h2').textContent == item.textContent){
                item.classList.remove("your-active-item");
               
            }
        }
        i++;
    }
}
scrollPos = (document.body.getBoundingClientRect()).top;
});

// Scroll to anchor ID using scrollIntoView event
function goToSection(event){

for(let i = 0; i<sections.length ; i++){
    if(event.target.textContent == sections[i].querySelector('h2').textContent){
       
        sections[i].scrollIntoView({
            block: 'end',
            behavior : 'smooth', 
            inline : 'center'});
        if(!sections[i].classList.contains("your-active-class")){
                activeElements[i].classList.add("your-active-class");
        }
        
    }
}
}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar());

// Scroll to section on link click
navigationBarList.addEventListener('click', goToSection );




