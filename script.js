const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      ul.removeChild(li);
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Please enter a task.");
  }
}
