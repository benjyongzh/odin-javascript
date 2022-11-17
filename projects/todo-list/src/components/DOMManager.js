import * as eventManager from "./eventManager";
import { add, format, formatDistanceToNow } from 'date-fns';

const projects = document.querySelector('ul.project-list');
let currentProject = {};

const addProjectInput = document.querySelector("input#new-project-input");
const addProjectButton = document.querySelector("button.dashboard-add-project-button");
addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    eventManager.publish('createProject', newProjectInput.value);
});

const taskList = document.querySelector('ul.task-list');
const addTaskButton = document.querySelector('button.add-task-button');
addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (addTaskButton.classList.contains('disabled') || currentProject == {}) return;
    eventManager.publish('createNewTask', getCurrentProject());
});

function getCurrentProject() {return currentProject};
function setCurrentProject(arg){currentProject = arg};

function getProjectCount(){
    const projectList = projects.querySelectorAll('.project-list-item');
    let count = 0;
    projectList.forEach(project => {
        count += 1;
    });
    //console.log(`there are ${count} projects now.`)
    return count;
}

function refreshAddTaskButton(){
    if (getProjectCount() <= 0){
        addTaskButton.classList.add('disabled');
    } else {
        addTaskButton.classList.remove('disabled');
    }
}

function addNewProjectDOM(eventArgs){
    const newProj = newProject(eventArgs);
    projects.appendChild(newProj);
    eventManager.publish('selectProject', eventArgs);
    addProjectInput.value = "";
}

function removeProjectDOM(eventArgs){
    projects.removeChild(getProjectDOMFromEvent(eventArgs));
};

function newProject(eventArgs){
    const project = document.createElement('div');
    project.classList.add('project-list-item');
    project.setAttribute('project-id', eventArgs.projectID);
    //for selection
    project.addEventListener('click', () => {
        eventManager.publish('selectProject', eventArgs);
    })

    //project title
    const title = newDivText('project-list-item-name', eventArgs.getTitle());
    project.appendChild(title);

    //project delete button
    const deleteButton = newButton('project-delete-button', 'del');
    project.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        eventManager.publish('removeProject', eventArgs);
    })

    return project;
};

function getProjectDOMFromEvent(eventArgs){
    const allProjects = projects.querySelectorAll('.project-list-item');
    let projectDOM = undefined;
    allProjects.forEach(project => {
        if (project.getAttribute('project-id') == eventArgs.projectID) {
            projectDOM = project;
        };
    });
    return projectDOM;
}

function selectProjectDOM(eventArgs) {
    const allProjects = projects.querySelectorAll('.project-list-item');
    allProjects.forEach(project => {
        project.classList.remove('selected-project');
    });

    const projectDOM = getProjectDOMFromEvent(eventArgs);
    if (projectDOM == undefined) {
        //console.log("projectDOM is undefined.");
        return;
    };

    projectDOM.classList.add('selected-project');
}

function updateTasklistDOM(){
    taskList.replaceChildren();
    if (Object.keys(getCurrentProject()).length === 0) {
        //console.log('no projects, so no task');
        makeEmptyTaskListDOM();
        return;
    }
    //console.log(`there are ${getCurrentProject().getTasks().length} tasks in this project.`)
    if (getCurrentProject().getTasks().length >= 1){
        for (let i = 0; i < getCurrentProject().getTasks().length; i++){
            populateTaskList(getCurrentProject().getTasks()[i]);
        };
    } else {
        makeEmptyTaskListDOM();
    };
};

function populateTaskList(task){
    const taskDOM = newTask(task);
    taskList.appendChild(taskDOM);
};

function makeEmptyTaskListDOM(){
    //make some image on taskList as a resting state.
    console.log("makeEmptyTaskListDOM is run.");
};

function newTask(task){
    const taskDOM = document.createElement('div');
    taskDOM.classList.add('task-list-item');
    //taskDOM.setAttribute('task-id', eventArgs.projectID);

    //task text div
    const textsDiv = newDivText('task-item-texts-section', "");
    taskDOM.appendChild(textsDiv);

    //task title
    const title = newDivText('task-item-name', task.getTitle());
    textsDiv.appendChild(title);

    //title edit form
    const titleEdit = newInputText('task-item-edit-title-input', "Task name");
    textsDiv.appendChild(titleEdit);


    //task desc
    // const description = newDivText('task-item-desc', task.getDescription());
    // textsDiv.appendChild(description);

    // task dueDate
    const duedate = newDivText('task-item-duedate', `Due: ${formatDateForHuman(task.getDueDate())}, (${stringEstimateTimeFromPresent(task.getDueDate())})`);
    textsDiv.appendChild(duedate);

    //duedate edit input
    //const editForm = newForm('task-item-editform');
    const dueDateEdit = newInputText('task-item-edit-duedate-input', formatDateToInput(task.getDueDate()));
    dueDateEdit.setAttribute('type', 'date');
    textsDiv.appendChild(dueDateEdit);

    //task edit button
    const editButton = newButton('task-edit-button', 'edit');
    taskDOM.appendChild(editButton);
    editButton.addEventListener('click', () => {
        if (taskDOM.classList.contains('disabled')) return;
        eventManager.publish('editTaskStart', {task, taskDOM});
    })

    //task edit confirm button
    const editConfirmButton = newButton('task-edit-confirm-button', 'confirm');
    taskDOM.appendChild(editConfirmButton);
    editConfirmButton.addEventListener('click', () => {
        if (taskDOM.classList.contains('disabled')) return;
        eventManager.publish('editTaskEnd', {task, taskDOM, change: true});
    })

    //task cancel button
    const editCancelButton = newButton('task-edit-cancel-button', 'cancel');
    taskDOM.appendChild(editCancelButton);
    editCancelButton.addEventListener('click', () => {
        if (taskDOM.classList.contains('disabled')) return;
        eventManager.publish('editTaskEnd', {task, taskDOM, change: false});
    })

    //task delete button
    const deleteButton = newButton('task-delete-button', 'del');
    taskDOM.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        if (taskDOM.classList.contains('disabled')) return;
        eventManager.publish('removeTask', task);
    })

    return taskDOM;
}

function enableAllTasks(bool){
    const tasks = taskList.querySelectorAll('.task-list-item');
    tasks.forEach(task => {
        bool ? task.classList.remove('disabled') : task.classList.add('disabled');
    });
};

function enableTask(eventArgs, bool){
    const taskDOM = eventArgs.taskDOM;
    bool ? taskDOM.classList.remove('disabled') : taskDOM.classList.add('disabled');
};

function editTaskStart(eventArgs){
    const taskDOM = eventArgs.taskDOM;
    taskDOM.classList.add('editing-task');
    const inputTitle = taskDOM.querySelector('.task-item-edit-title-input');
    inputTitle.placeholder = eventArgs.task.getTitle();
    const inputDate = taskDOM.querySelector('.task-item-edit-duedate-input');
    inputDate.value = formatDateToInput(eventArgs.task.getDueDate());
}

function editTaskEnd(eventArgs){
    const taskDOM = eventArgs.taskDOM;
    taskDOM.classList.remove('editing-task');
    const titleInput = taskDOM.querySelector('.task-item-edit-title-input');
    const dateInput = taskDOM.querySelector('.task-item-edit-duedate-input');
    if (titleInput.value == "") titleInput.value = eventArgs.task.getTitle();
    if (!dateInput.checkValidity()) dateInput.value = formatDateToInput(eventArgs.task.getDueDate());
    if (eventArgs.change == true){
        eventManager.publish('setTaskValues', {task: eventArgs.task, title: titleInput.value, duedate: new Date(dateInput.value)});
    };
    titleInput.value = "";
    dateInput.value = formatDateToInput(eventArgs.task.getDueDate());
};

function formatDateForHuman(date){
    return format(date, 'dd/MM/yyyy');
}

function stringEstimateTimeFromPresent(date){
    return formatDistanceToNow(date, {addSuffix: true});
}

function formatDateToInput(date){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

function formatInputDateToDate(value){
    // const array = value.split("-");
    // const year = parseInt(array[0]);
    // const month = parseInt(array[1]) - 1;
    // const day = parseInt(array[2]);
    return new Date(value);
}

function newInputText(classname, placeholder){
    const input = document.createElement('input');
    input.classList.add(classname);
    input.placeholder = placeholder;
    return input;
}

function newDivText(classname, text){
    const div = document.createElement('div');
    div.classList.add(classname);
    div.textContent = text;
    return div;
}

function newButton(classname, text){
    const button = document.createElement('button');
    button.classList.add(classname);
    button.textContent = text;
    return button;
}

eventManager.subscribe('addNewProject', eventArgs => {
    addNewProjectDOM(eventArgs);
});

eventManager.subscribe('removeProject', eventArgs => {
    removeProjectDOM(eventArgs);
    refreshAddTaskButton();
});

eventManager.subscribe('selectProject', eventArgs => {
    selectProjectDOM(eventArgs);
    setCurrentProject(eventArgs);
    //console.log(`current project is ${getCurrentProject().getTitle()}`);
    eventManager.publish('requestTaskDOMUpdate', eventArgs);
    refreshAddTaskButton();
});

eventManager.subscribe('requestTaskDOMUpdate', eventArgs => {
    updateTasklistDOM();
});

eventManager.subscribe('editTaskStart', eventArgs => {
    //cancelAllTaskEditing();
    enableAllTasks(false);
    enableTask(eventArgs, true);
    editTaskStart(eventArgs);
});

eventManager.subscribe('editTaskEnd', eventArgs => {
    enableAllTasks(true);
    editTaskEnd(eventArgs);
});

eventManager.subscribe('refreshTask', eventArgs => {
    updateTasklistDOM();
});

refreshAddTaskButton();

console.log('DOMManager.js is running');