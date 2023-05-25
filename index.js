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
   //code to manipulate the DOM here
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

// Add a click event listener to the sign now button here
signNowButton.addEventListener("click",addSignature);
