import * as eventManager from "./eventManager";

const projects = document.querySelector('ul.project-list');
let currentProject = {};

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
    eventManager.publish('createNewTask', currentProject);
});

function getProjectCount(){
    const projectList = projects.querySelectorAll('.project-list-item');
    let count = 0;
    projectList.forEach(project => {
        count += 1;
    });
    console.log(`there are ${count} projects now.`)
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
}

function removeProjectDOM(eventArgs){
    projects.removeChild(getProjectDOMFromEvent(eventArgs));
    if (getProjectCount() <= 0) {
        currentProject = {};
        //console.log('no projects remaining');
    } else {
        //console.log('some projects remaining');
        //selectProjectDOM()
    };
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
    const deleteButton = newButton('project-delete-buton', 'del');
    project.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
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
    const projectDOM = getProjectDOMFromEvent(eventArgs);
    if (projectDOM == undefined) {
        console.log("projectDOM is undefined.");
        return;
    };

    const allProjects = projects.querySelectorAll('.project-list-item');
    allProjects.forEach(project => {
        project.classList.remove('selected-project');
    });
    projectDOM.classList.add('selected-project');
}

function updateTasklistDOM(){
    taskList.replaceChildren();
    if (currentProject == {}) {
        makeEmptyTaskListDOM();
        return;
    }
    console.log(`there are ${currentProject.getTasks().length} tasks in this project.`)
    if (currentProject.getTasks().length >= 1){
        for (let i = 0; i < currentProject.getTasks().length; i++){
            populateTaskList(currentProject.getTasks()[i]);
        };
    } else {
        makeEmptyTaskListDOM();
    };
};

function populateTaskList(task){
    const taskDOM = newTask(task);
    taskList.appendChild(taskDOM);
}

function makeEmptyTaskListDOM(){
    //make some image on taskList as a resting state.
}

function newTask(task){
    const taskDOM = document.createElement('div');
    taskDOM.classList.add('task-list-item');
    //taskDOM.setAttribute('task-id', eventArgs.projectID);

    //project title
    const title = newDivText('task-item-name', task.getTitle());
    taskDOM.appendChild(title);

    //project delete button
    const deleteButton = newButton('task-delete-buton', 'del');
    taskDOM.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        eventManager.publish('removeTask', task);
    })

    return taskDOM;
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
    currentProject = eventArgs;
    eventManager.publish('requestTaskDOMUpdate', eventArgs);
    refreshAddTaskButton();
});

eventManager.subscribe('requestTaskDOMUpdate', eventArgs => {
    updateTasklistDOM();
});

/* eventManager.subscribe('removeTask', eventArgs => {
    updateTasklistDOM(eventArgs);
});
 */

refreshAddTaskButton();

console.log('DOMManager.js is running');