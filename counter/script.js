let counter = 0;

const clickArea = document.getElementById("click-area");
const bar = document.getElementById("bar");
const counterDisplay = document.getElementById("counter-label");

clickArea.addEventListener("click", () => {
  counter++;
  counterDisplay.innerText = counter;
  changeColorAtCount();
});

//use global scope for keyboard input
document.addEventListener("keyup", () => {
  counter++;
  counterDisplay.innerText = counter;
});

changeColorAtCount();
/******************************************************/

function changeColorAtCount() {
  clickArea.style.backgroundSize = `${counter}% 100%`;
}
