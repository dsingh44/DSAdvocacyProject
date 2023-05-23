// Query for button with id theme-button

let themeButton = document.getElementById("theme-button");

//Dark mode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
// click event listener for theme button
themeButton.addEventListener("click",toggleDarkMode);