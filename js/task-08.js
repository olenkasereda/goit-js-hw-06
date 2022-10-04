const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements; //Деструктуризация объектов

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  event.currentTarget.reset(); // очищает поля ввода input
}
