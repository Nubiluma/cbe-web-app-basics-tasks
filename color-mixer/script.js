const body = document.querySelector("body");
const form = document.querySelector("#headerForm");
const refreshBtn = document.querySelector(".refreshBtn");
const sliderRed = document.querySelector("#sliderRed");
const sliderGreen = document.querySelector("#sliderGreen");
const sliderBlue = document.querySelector("#sliderBlue");
const hexValue = document.querySelector("#hexValue");
const MAX_HEX = 16;

const sliders = [sliderRed, sliderGreen, sliderBlue];

for (const slider of sliders) {
  slider.addEventListener("input", setHexColorValue);
  slider.addEventListener("input", updateBackgroundColor);
}

refreshBtn.addEventListener("click", getRandomColorFromAPI);

getRandomColorFromAPI();
updateBackgroundColor();

/********************************************/

/**
 * update background color of app
 */
function updateBackgroundColor() {
  body.setAttribute(
    "bgColor",
    convertRgbToHex(sliderRed.value, sliderGreen.value, sliderBlue.value)
  );
}

/**
 * render hex color code
 */
function setHexColorValue() {
  hexValue.innerText =
    "#" + convertRgbToHex(sliderRed.value, sliderGreen.value, sliderBlue.value);
}

/**
 * fetch random color from api
 * then update sliders, render hex code and update background color accordingly
 */
function getRandomColorFromAPI() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      sliderRed.setAttribute("value", data.rgb.r);
      sliderGreen.setAttribute("value", data.rgb.g);
      sliderBlue.setAttribute("value", data.rgb.b);
      hexValue.innerText = data.color;
      updateBackgroundColor();
    });
}

/**
 * convert rgb value to hex value
 * @param {*} r red value
 * @param {*} g green value
 * @param {*} b blue value
 * @returns
 */
function convertRgbToHex(r, g, b) {
  return (
    convertValueToHex(parseInt(r)) +
    convertValueToHex(parseInt(g)) +
    convertValueToHex(parseInt(b))
  );
}

/**
 * convert single value to hex code
 * @param {*} value r, g or b
 * @returns hex code
 */
function convertValueToHex(value) {
  return value.toString(MAX_HEX);
}

/* function setRandomColor() {
  for (const slider of sliders) {
    slider.setAttribute("value", Math.random() * 255);
  }
}
 */
