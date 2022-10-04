const inputRange = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
});
