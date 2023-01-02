const header = document.querySelector("header");
const sliderRed = document.querySelector("#sliderRed");
const sliderGreen = document.querySelector("#sliderGreen");
const sliderBlue = document.querySelector("#sliderBlue");
const hexValue = document.querySelector("#hexValue");
const MAX_HEX = 16;

const sliders = [sliderRed, sliderGreen, sliderBlue];

for (const slider of sliders) {
  slider.addEventListener("input", setHexValue);
}

setHexValue();

/********************************************/

function setHexValue() {
  hexValue.innerText =
    "#" +
    convertRgbToHex(
      parseInt(sliderRed.value),
      parseInt(sliderGreen.value),
      parseInt(sliderBlue.value)
    );
}

function convertRgbToHex(r, g, b) {
  return convertValueToHex(r) + convertValueToHex(g) + convertValueToHex(b);
}

function convertValueToHex(value) {
  return value.toString(MAX_HEX);
}
