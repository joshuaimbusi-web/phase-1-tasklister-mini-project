document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
 
  form.addEventListener("submit", function (event) {
    event.preventDefault();

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

    taskInput.value = "";

  });

  const sortButton = document.getElementById("sort-tasks");
  sortButton.addEventListener("click", function () {
    const tasksArray = Array.from(taskList.children).map(li => ({
      element: li,
      priority: li.getAttribute('data-priority') || 'Medium'
    }));
    const sortedTasks = sortTasksByStringPriorityAscending(tasksArray);
    taskList.innerHTML = '';
    sortedTasks.forEach(task => taskList.appendChild(task.element));
  });

  function sortTasksByStringPriorityAscending(tasks) {
    const priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
    return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }

});

