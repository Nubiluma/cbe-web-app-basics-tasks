// Vanilla JS
//let counter = 0;

// const resetBtn = document.querySelector(".reset-btn");
// const clickArea = document.querySelector(".click-area");
// const counterDisplay = document.querySelector(".counter-label");

// clickArea.addEventListener("click", count);

//use global scope for keyboard input
//document.addEventListener("keyup", count);

// resetBtn.addEventListener("click", () => {
//   counter = 0;
//   counterDisplay.innerText = counter;
//   changeColorAtCount();
// });

// changeColorAtCount();
// /******************************************************/

// function count() {
//   if (counter < 100) {
//     counter++;
//   } else {
//     counter = 0;
//   }
//   counterDisplay.innerText = counter;
//   changeColorAtCount();
// }

// function changeColorAtCount() {
//   clickArea.style.backgroundSize = `${counter}% 100%`;
// }

Vue.createApp({
  data() {
    return {
      counter: 0,
      backgroundSize: "0% 100%",
    };
  },
  methods: {
    count() {
      if (this.counter < 100) {
        this.counter++;
      } else {
        this.counter = 0;
      }
      this.backgroundSize = `${this.counter}% 100%`;
    },
    resetCounter() {
      this.counter = 0;
      this.backgroundSize = `${this.counter}% 100%`;
    },
  },
}).mount("#app");
