const analogClock = document.querySelector("#analogClock");
const digitalClock = document.querySelector("#digitalClock");

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

setTimeOnDigitalClock();

/***********************************************/

/**
 * render hours, minutes and seconds on digital clock every second
 */
function setTimeOnDigitalClock() {
  formatSingleDigits();
  digitalClock.innerText = hours + ":" + minutes + ":" + seconds;

  setInterval(() => {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();

    formatSingleDigits();

    /**
     * render colons every other second on clock
     */
    if (digitalClock.innerText.includes(":")) {
      digitalClock.innerText = hours + " " + minutes + " " + seconds;
    } else {
      digitalClock.innerText = hours + ":" + minutes + ":" + seconds;
    }
  }, 1000);
}

function formatSingleDigits() {
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
}

//TODO
function setTimeOnAnalogClock() {}
