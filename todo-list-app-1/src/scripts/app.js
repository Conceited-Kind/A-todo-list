// This file contains the JavaScript code for the todo list application.

const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.text;
        taskItem.className = task.completed ? 'completed' : '';

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
        toggleButton.onclick = () => toggleTaskCompletion(index);

        taskItem.appendChild(toggleButton);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Initial render
renderTasks();