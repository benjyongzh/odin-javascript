import * as eventManager from "./eventManager";

const projects = document.querySelector('ul.project-list');

function addNewProjectDOM(eventArgs){
    projects.appendChild(newProject(eventArgs));
}

function removeProjectDOM(eventArgs){
    const allProjects = projects.querySelectorAll('.project-list-item');
    console.log(allProjects);
    allProjects.forEach(project => {
        //use an ID
        if (project.textContent == eventArgs.getTitle()) {
            projects.removeChild(project);
        };
    });
};

function newProject(eventArgs){
    const project = document.createElement('div');
    project.classList.add('project-list-item');
    project.textContent = eventArgs.getTitle();
    const deleteButton = newButton('project-delete-buton', 'del');
    project.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        eventManager.publish('removeProject', eventArgs);
    })
    return project;
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


console.log('DOMManager.js is run');