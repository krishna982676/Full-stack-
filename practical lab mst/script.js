let tasks = []

const taskName = document.getElementById("taskName")
const priority = document.getElementById("priority")
const taskList = document.getElementById("taskList")

document.getElementById("addBtn").addEventListener("click", addTask)
document.getElementById("showAll").addEventListener("click", () => displayTasks("all"))
document.getElementById("showCompleted").addEventListener("click", () => displayTasks("completed"))
document.getElementById("showPending").addEventListener("click", () => displayTasks("pending"))


function addTask(){

if(taskName.value === ""){
alert("Enter task name")
return
}

let task = {
name: taskName.value,
priority: priority.value,
completed: false
}

tasks.push(task)

taskName.value = ""

displayTasks("all")

}


function displayTasks(filter){

taskList.innerHTML = ""

tasks.forEach((task,index)=>{

if(filter === "completed" && !task.completed) return
if(filter === "pending" && task.completed) return

let li = document.createElement("li")

li.innerHTML = `
${task.name} - ${task.priority}
<button onclick="toggleTask(${index})">Complete</button>
<button onclick="deleteTask(${index})">Delete</button>
`

if(task.completed){
li.classList.add("completed")
}

taskList.appendChild(li)

})

}


function toggleTask(index){

tasks[index].completed = !tasks[index].completed

displayTasks("all")

}


function deleteTask(index){

tasks.splice(index,1)

displayTasks("all")

}