let scaleFactor= 1;
let modalImage = document.querySelector('.modal img');
// Query for button with id theme-button
let themeButton = document.getElementById("theme-button");

//Dark mode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

// click event listener for theme button
themeButton.addEventListener("click",toggleDarkMode);
// query for the sign now button 
const signNowButton = document.querySelector('#sign-now-button');

/*
This function add signatures contatiners in Document Object Model
*/
const addSignature = (person) => {
  //code to manipulate the DOM 
  const hometown=document.querySelector('#hometown').value;
  const signaturesContainer = document.querySelector(".signatures");
  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${hometown} support this`;
  signaturesContainer.appendChild(newSignature);

  // Clear the form inputs
  document.querySelector('#name').value='';
  document.querySelector('#hometown').value='';
}

// This function form inputs and perform action based on result
const validateForm =() => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name:petitionInputs[0].value// acesses and save value of first input
  }
  
  //Loop through all inputs
  for(let i=0; i< petitionInputs.length;i++){
    if (petitionInputs[i].value.length<2){
      petitionInputs[i].classList.add('error');
      containsErrors =true;
    }
    else{
      petitionInputs[i].classList.remove('error');
    }
  }
  //call add signature and clear fields if no error
  if(containsErrors== false){
    addSignature(person);
    toggleModal(person);
    for (let index = 0; index < petitionInputs.length; index++) {
      petitionInputs[index].value ="";
      containsErrors=false;
    }
  }
}
signNowButton.addEventListener('click',validateForm);
// contain values for scrolling animation
let animation ={
  revealDistance: 150,
  intialOpacity:0,
  transitionDelay:0,
  transitionDuration:'6s',
  transitionProperty:'all',
  transitionTimingFunction:'ease'
}
let revealableContainers = document.querySelectorAll('.revealable');

//This function will contain a loop that check each revealable container to see if it is in the right position to be reavealed
function reveal () {
  for (i=0; i< revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance){
      /*add the active class to revealableContainer's classlist*/
      revealableContainers[i].classList.add('active');
    } else{
      /* remove the active class to the revealableContainer's classslist */
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll',reveal);

//This function toggles a model and perform an animation on image element with the modal
const toggleModal= (person) =>{
  //thanks modal element
  let modal = document.getElementById("thanks-modal");
  //select thanks content modal element
  let modalContent = document.getElementById("thanks-modal-content");
  let intervalId;
  modal.style.display="flex";
  //set text content of modal with thank you message
  modalContent.textContent = `Thank you ${person.name} for signing the petition!`;
  
  intervalId = setInterval(() => {
    scaleImage();
  },500);

  //stop the animation 
  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display ="none";
  }, 4000);  
}
//This function scales the image dispalyed in the modal
const scaleImage=() =>{
  if (scaleFactor == 1){
    scaleFactor= 0.8;
  }
  else{
    scaleFactor =1;
  }
  //apply the scale factor to image
  modalImage.style.transform =`scale(${scaleFactor})`;
}