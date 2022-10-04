const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBodyColor() {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

btnChangeColor.addEventListener("click", onChangeBodyColor);
