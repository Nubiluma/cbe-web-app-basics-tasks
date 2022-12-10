let counter = 0;

const clickArea = document.getElementById("click-area");
const counterDisplay = document.getElementById("counter-label");

clickArea.addEventListener("click", () => {
  counter++;
  counterDisplay.innerText = counter;
});

//use global scope for keyboard input
document.addEventListener("keyup", () => {
  counter++;
  counterDisplay.innerText = counter;
});

/******************************************************/

function changeColorAtCount() {}
