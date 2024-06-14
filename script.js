const newTask = document.querySelector(".input_text");
const addButton = document.querySelector(".add_button");
addButton.addEventListener("click", (event) => {
  const taskText = newTask.value;
  if (taskText.trim()) {
    addTask(taskText);
    newTask.value = "";
  }
});
const addTask = (text) => {
  const newListElem = document.createElement("li");
  newListElem.textContent = text;

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteButton.classList.add("delete_btn");

  deleteButton.addEventListener("click", () => {
    newListElem.remove();
  });
  newListElem.appendChild(deleteButton);

  document.querySelector(".todo_list").appendChild(newListElem);
};

document.querySelector(".todo_list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
