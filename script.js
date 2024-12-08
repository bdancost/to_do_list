// Encapsula o código para evitar poluir o escopo global
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton");
  const dateElement = document.getElementById("date");

  // Exibe a data atual no elemento #date
  function setDate() {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateElement.textContent = today.toLocaleDateString("en-US", options);
  }

  // Adiciona uma nova tarefa à lista
  function addTask(taskText) {
    const li = document.createElement("li");

    const markDoneButton = createMarkDoneButton();
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const deleteButton = createDeleteButton();

    li.appendChild(markDoneButton);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }

  // Cria o botão de marcar como concluído com evento associado
  function createMarkDoneButton() {
    const button = document.createElement("div");
    button.className = "mark-done";
    button.ariaLabel = "Mark task as done";
    button.addEventListener("click", (event) => {
      const li = event.target.parentElement;
      const taskSpan = li.querySelector("span");
      taskSpan.classList.toggle("completed");
      button.classList.toggle("completed");
    });
    return button;
  }

  // Cria o botão de deletar com evento associado
  function createDeleteButton() {
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.ariaLabel = "Delete Task";
    button.addEventListener("click", (event) => {
      const li = event.target.parentElement;
      taskList.removeChild(li);
    });
    return button;
  }

  // Lida com o evento de adicionar tarefa
  function handleAddTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    addTask(taskText);
    taskInput.value = "";
  }

  // Evento de clique no botão de adicionar
  addTaskButton.addEventListener("click", handleAddTask);

  // Adicona tarefa ao pressionar Enter
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  });

  setDate();
});
