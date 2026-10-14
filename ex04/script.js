
// Select HTML elements

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

// Update total number of tasks

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}

// Add a new task

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    // Create li
    const li = document.createElement("li");
    li.classList.add("task-item");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Complete " + text);

    // Create task text
    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    // Handle completion
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    // Handle deletion
    deleteButton.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    // Assemble the new task
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Append it to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Update task counter
    updateTaskCount();
}

// Add by mouse click
addButton.addEventListener("click", addTask);

// Add by pressing Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateTaskCount();
