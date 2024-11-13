document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const removeButton = document.createElement("span");
    removeButton.textContent = "✖";
    removeButton.className = "remove-task";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  }
});
