import * as eventManager from "./eventManager";

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

    //task desc
    // const description = newDivText('task-item-desc', task.getDescription());
    // textsDiv.appendChild(description);

    //task edit button
    const editButton = newButton('task-edit-button', 'edit');
    taskDOM.appendChild(editButton);
    editButton.addEventListener('click', () => {
        eventManager.publish('editTask', task);
    })

    //task delete button
    const deleteButton = newButton('task-delete-button', 'del');
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
    setCurrentProject(eventArgs);
    //console.log(`current project is ${getCurrentProject().getTitle()}`);
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