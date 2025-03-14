document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
});