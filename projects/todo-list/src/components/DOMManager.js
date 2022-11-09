import * as eventManager from "./eventManager";

const projects = document.querySelector('ul.project-list');
let currentProject = {};

const addProjectButton = document.querySelector("button.dashboard-add-project-button");
addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    eventManager.publish('createProject', newProjectInput.value);
});

const tasks = document.querySelector('ul.task-list');
const addTaskButton = document.querySelector('button.add-task-button');
addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    eventManager.publish('createTask', currentProject);
});

function addNewProjectDOM(eventArgs){
    const newProj = newProject(eventArgs);
    projects.appendChild(newProj);
    eventManager.publish('selectProject', eventArgs);
}

function removeProjectDOM(eventArgs){
    projects.removeChild(getProjectDOMFromEvent(eventArgs));
    const remainingProjects = projects.querySelectorAll('.project-list-item');
    let projectCount = 0;
    remainingProjects.forEach(project => {
        projectCount += 1;
    });
    if (projectCount <= 0) {
        currentProject = {};
        console.log('no projects remaining');
    } else {
        console.log('some projects remaining');
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

function updateTasklistDOM(eventArgs){
    console.log(eventArgs);
    if (eventArgs.getTasks().length >= 1){
        console.log("there are tasks to do");
    } else {
        console.log("empty project. No tasks yet.");
    };
};

function addNewTask(){

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
});

eventManager.subscribe('selectProject', eventArgs => {
    selectProjectDOM(eventArgs);
    currentProject = eventArgs;
    updateTasklistDOM(eventArgs);
});


console.log('DOMManager.js is running');