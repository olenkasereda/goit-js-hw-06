const refs = {
  divBoxes: document.querySelector("#boxes"),
  inputNumber: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", cleanerFunc);

function createBoxes() {
  const items = [];
  for (let i = 0; i < refs.inputNumber.value; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    item.style.width = `${20 + i * 10}px`;
    item.style.height = `${20 + i * 10}px`;
    item.style.backgroundColor = color;
    items.push(item);
  }
  refs.divBoxes.append(...items);
  refs.inputNumber.value = "";
  console.log(items);
}

function cleanerFunc() {
  refs.divBoxes.innerHTML = "";
  refs.inputNumber.value = "";
}
