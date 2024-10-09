let tasks = [];
const taskList = document.getElementById('taskList');

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTask = prompt('Edit your task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}
