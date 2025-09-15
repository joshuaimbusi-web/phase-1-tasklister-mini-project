document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskDescription = taskInput.value.trim();
    if (taskDescription === "") {
      alert("Please enter a task description.");
      return;
    }
    const listItem = document.createElement("li");
    listItem.textContent = taskDescription;

     const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear the input field after adding the task
  });
  function sortTasksByStringPriorityAscending(tasks) {
    const priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
    return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }

});

