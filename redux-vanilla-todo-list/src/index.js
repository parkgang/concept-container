const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (todo) => {
  const li = document.createElement("li");
  li.innerText = todo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  createToDo(todo);
};

form.addEventListener("submit", onSubmit);
