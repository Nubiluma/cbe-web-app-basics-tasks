const body = document.querySelector("body");
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

setRandomColorOnStart();
setHexColorValue();
updateBackgroundColor();

/********************************************/

function setHexColorValue() {
  hexValue.innerText =
    "#" + convertRgbToHex(sliderRed.value, sliderGreen.value, sliderBlue.value);
}

function updateBackgroundColor() {
  body.setAttribute(
    "bgColor",
    convertRgbToHex(sliderRed.value, sliderGreen.value, sliderBlue.value)
  );
}

function setRandomColorOnStart() {
  for (const slider of sliders) {
    slider.setAttribute("value", Math.random() * 255);
  }
}

function convertRgbToHex(r, g, b) {
  return (
    convertValueToHex(parseInt(r)) +
    convertValueToHex(parseInt(g)) +
    convertValueToHex(parseInt(b))
  );
}

function convertValueToHex(value) {
  return value.toString(MAX_HEX);
}
