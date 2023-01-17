const analogClock = document.querySelector("#analogClock");
const digitalClock = document.querySelector("#digitalClock");

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

let pointerSecondsDegree = 0;
let pointerMinutesDegree = 0;
let pointerHoursDegree = 0;

setTimeOnClocks();
setPointerDegreesOnCustomProperty();

/***********************************************/

/**
 * render hours, minutes and seconds on digital clock every second
 */
function setTimeOnClocks() {
  formatSingleDigits();
  digitalClock.innerText = hours + ":" + minutes + ":" + seconds;

  setInterval(() => {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();

    formatSingleDigits();
    setPointerDegreesOnCustomProperty();

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

function calculatePointerDegrees() {
  pointerSecondsDegree = (360 / 60) * seconds + 180;
  pointerMinutesDegree = (360 / 60) * minutes + 180;
  pointerHoursDegree = (360 / 12) * hours + 180;
}

function setPointerDegreesOnCustomProperty() {
  calculatePointerDegrees();
  document.documentElement.style.setProperty(
    "--pointer-seconds-degree",
    pointerSecondsDegree + "deg"
  );
  document.documentElement.style.setProperty(
    "--pointer-minutes-degree",
    pointerMinutesDegree + "deg"
  );
  document.documentElement.style.setProperty(
    "--pointer-hours-degree",
    pointerHoursDegree + "deg"
  );
}
