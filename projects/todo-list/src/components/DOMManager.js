import * as eventManager from "./eventManager";

const projects = document.querySelector('ul.project-list');

function newProject(eventArgs){
    const project = document.createElement('div');
    project.classList.add('project-list-item');
    project.textContent = eventArgs.name;
    console.log(project);
    return project;
}

eventManager.subscribe('addNewProject', eventArgs => {
    //create a project DOM with the eventArgs (name)
    projects.appendChild(newProject(eventArgs));
    console.log('dom manager subscribed');
});


console.log('DOMManager.js is run');