'use strict';

console.log('soy color palette');

const inputPalette1 = document.querySelector(".js-palette1");
const inputPalette2 = document.querySelector(".js-palette2");
const inputPalette3 = document.querySelector(".js-palette3");
const cardElement = document.querySelector(".js-card");

function paintPalette() {
  cardElement.classList.remove("js-card-palette1");
  cardElement.classList.remove("js-card-palette2");
  cardElement.classList.remove("js-card-palette3");
  let selectedPalette = document.querySelector(".js-radio:checked");
  console.log(selectedPalette);
  selectedPalette = selectedPalette.value;
  console.log(selectedPalette);
  cardElement.classList.add("js-card-palette" + selectedPalette);
  localStorage.setItem("palette", selectedPalette);

}

inputPalette1.addEventListener("click", paintPalette);
inputPalette2.addEventListener("click", paintPalette);
inputPalette3.addEventListener("click", paintPalette);