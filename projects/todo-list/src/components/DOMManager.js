import * as eventManager from "./eventManager";

const projects = document.querySelector('ul.project-list');

function addNewProjectDOM(eventArgs){
    const newProj = newProject(eventArgs);
    projects.appendChild(newProj);
    eventManager.publish('selectProject', eventArgs);
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
    const deleteButton = newButton('project-delete-buton', 'del');
    project.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        eventManager.publish('removeProject', eventArgs);
    })

    return project;
};

function getProjectDOMFromEvent(eventArgs){
    const allProjects = projects.querySelectorAll('.project-list-item');
    allProjects.forEach(project => {
        if (project.getAttribute('project-id') == eventArgs.projectID) {
            return project;
        };
    });
    return undefined;
}

function selectProjectDOM(eventArgs) {
    const projectDOM = getProjectDOMFromEvent(eventArgs);
    const allProjects = projects.querySelectorAll('.project-list-item');
    allProjects.forEach(project => {
        project.classList.remove('selected-project');
    });
    projectDOM.classList.add('selected-project');
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
});


console.log('DOMManager.js is run');