const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value); // принимает что вводится в инпут
  refs.output.textContent = event.currentTarget.value || "Anonymous"; // то что вводится в инпут пишем в span ИЛИ
}                                                         // Если инпут пустой - отображаться строка "Anonymous".
