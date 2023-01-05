const analogClock = document.querySelector("#analogClock");
const digitalClock = document.querySelector("#digitalClock");

setTimeOnDigitalClock();

/***********************************************/

/**
 * render hours, minutes and seconds on digital clock every second
 */
function setTimeOnDigitalClock() {
  setInterval(() => {
    let hours = new Date().getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = new Date().getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let seconds = new Date().getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

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

//TODO
function setTimeOnAnalogClock() {}
