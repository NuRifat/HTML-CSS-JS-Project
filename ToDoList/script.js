//get element
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click',addTask)

//add task to the list
function addTask() {
    const inputValue = taskInput.value.trim();

    //if input value is null show alert
    if(inputValue == ""){
        alert("Pleas enter a task");
        return;
    }

    //create new element 
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');
    //adding class to delBtn
    delButton.classList.add('delBtn');
    //adding event listener to delButton
    delButton.addEventListener('click',delTask)

    //setting text content
    span.textContent = inputValue;
    delButton.textContent = "Delete";

    // Append span and delete button to li
    li.append(span);
    li.append(delButton);

    ////adding event listener to li
    li.addEventListener('click',togglecomplete);
    // Append li to the task list
    taskList.append(li);

    taskInput.value = "";
}

function delTask(event){
    const delTarget = event.target;
    const taskItem = delTarget.parentElement;
    taskList.removeChild(taskItem);
}

function togglecomplete(event){
    const taskItem = event.target;
    if(taskItem.tagName == 'LI'){
        taskItem.classList.toggle('completed');
    }
}