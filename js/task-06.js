const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  let text = textInput.value;

  let dataLength = Number(textInput.dataset.length);

  text.length === dataLength
    ? textInput.setAttribute("class", "valid")
    : textInput.setAttribute("class", "invalid");
});
