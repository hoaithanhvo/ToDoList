const input = document.getElementById("input-task")
const button = document.getElementById("add-button")
const list = document.getElementById("task-list")
const tasks = []


function render() {
    list.innerHTML = "";
    tasks.forEach((item, index) => {
        if (item != null) {
            const li = document.createElement("h1")
            li.innerHTML = `<span>${item}</span> 
            <h1>${index}</h1>
        <button class="edit-button" data-index=${index}>edit</button>
        <button  class="delete-button" data-index=${index}>Delete</button>`
            list.appendChild(li)
        }
    })
}

function addTask() {
    const task = input.value
    if (task) {
        tasks.push(task)
        input.value = ""
        render()
    }
}
function edit(index) {
    const newTask = prompt("Enter new task:");
    if (newTask) {
        tasks[index] = newTask.trim();
        render();
    }
}
function deleteTask(index) {
    tasks[index] = null;
    render();
}

button.addEventListener("click", addTask)

list.addEventListener("click", event => {
    const target = event.target;
    if (target.classList.contains("edit-button")) {
        const index = parseInt(target.dataset.index);
        console.log("index", index);
        edit(index);
    } else if (target.classList.contains("delete-button")) {
        const index = parseInt(target.dataset.index);
        console.log("index1", index);
        deleteTask(index);
    }
})
render();