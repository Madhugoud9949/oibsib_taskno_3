document.addEventListener("DOMContentLoaded", function () {
  const taskTitle = document.getElementById("task-input");
  const taskDescription = document.getElementById("task-description");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");
  const pendingList = document.getElementById("pending-list");
  const completedList = document.getElementById("completed-list");

  addButton.addEventListener("click", function () {
      const taskText = taskTitle.value;
      const descriptionText = taskDescription.value;
      if (taskText.trim() !== "") {
          addTask(taskText, descriptionText);
          taskTitle.value = "";
          taskDescription.value = "";
      }
  });

  function addTask(taskText, descriptionText) {
      const li = document.createElement("li");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const completeButton = document.createElement("button");

      li.innerHTML = `${taskText}<br>${descriptionText}`;
      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";
      completeButton.textContent = "Complete";

      editButton.addEventListener("click", function () {
        const newTaskText = prompt("Edit Task Title:", taskText);
        const newDescriptionText = prompt("Edit Task Description:", descriptionText);

        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskText = newTaskText;
            descriptionText = newDescriptionText;
            li.innerHTML = `${taskText}<br>${descriptionText}`;
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            li.appendChild(completeButton);
        }
    });

      deleteButton.addEventListener("click", function () {
          li.remove();
      });

      completeButton.addEventListener("click", function () {
          li.classList.toggle("completed");
          if (li.classList.contains("completed")) {
              completeButton.textContent = "Incomplete";
              completedList.appendChild(li);
          } else {
              completeButton.textContent = "Complete";
              pendingList.appendChild(li);
          }
      });

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      li.appendChild(completeButton);
      taskList.appendChild(li);
      pendingList.appendChild(li);
  }
});
