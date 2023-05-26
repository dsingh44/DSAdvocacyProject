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

const addSignature = () => {
  //code to manipulate the DOM 
  const name = document.querySelector('#name').value;
  const hometown=document.querySelector('#hometown').value;

  const signaturesContainer = document.querySelector(".signatures");
  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${name} from ${hometown} support this`;
  signaturesContainer.appendChild(newSignature);

  // Clear the form inputs
  document.querySelector('#name').value='';
  document.querySelector('#hometown').value='';
}

// validation form function
const validateForm =() => {
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

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
    addSignature();
    for (let index = 0; index < petitionInputs.length; index++) {
      petitionInputs[i].value ="";
      containsErrors=false;
    }
  }
}
signNowButton.addEventListener('click',validateForm);