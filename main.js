const input = document.getElementById("input-task")
const button = document.getElementById("add-button")
const list = document.getElementById("task-list")
const deleteAll = document.getElementById("deletAll")
const last = document.getElementById("last")

const tasks = []
var tasks1 = []
// localStorage.setItem('tasks', JSON.stringify(tasks));
let string = localStorage.getItem("tasks")
var myArray = JSON.parse(string)
last.innerHTML = "";
tasks1 = [...myArray]
console.log("d", tasks1);
tasks1.forEach((item, index) => {

    const taomoi1 = document.createElement("h1")
    taomoi1.innerHTML = `<h1>${item}</h1>
            <button class="delete-button" data-index=${index}>xóa</button>
            <button class="edit-button" data-index=${index}>edit</button>
        `
    last.appendChild(taomoi1)
})

function render() {
    list.innerHTML = "";


    tasks.forEach((item, index) => {
        if (item != null) {
            const taomoi = document.createElement("h1")
            taomoi.innerHTML = `<h1>${item}</h1>
        <button class="delete-button" data-index=${index}>xóa</button>
        <button class="edit-button" data-index=${index}>edit</button>
    `
            list.appendChild(taomoi)
            // let string = localStorage.getItem("tasks")
            // var myArray = JSON.parse(string)
            // tasks1 = [...myArray]

            // tasks1.splice(0, tasks1.length);

            // console.log("myArray2", tasks1);

            // tasks1.map((item) => {
            //     console.log(item);

            // })
        }
    })
}
// console.log("myArray12", tasks1);









function addTask() {
    const task = input.value
    if (task) {
        tasks.push(task)
        input.value = ""
        render()
        localStorage.setItem('tasks', JSON.stringify(tasks));

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

function XoaTatCa() {
    tasks.splice(0, tasks.length);
    deleteAll.style.color = "red"


    render()
}

deleteAll.addEventListener("click", XoaTatCa)


button.addEventListener("click", addTask)

list.addEventListener("click", event => {
    const target = event.target;
    console.log("target11", target);
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

// console.log("local", localStorage.getItem(0));
render();