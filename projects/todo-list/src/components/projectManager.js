import projectItem from "./project";
import * as eventManager from "./eventManager";

const _projects = [];
let _currentProject = {};

let _projectIDNext = "00001";

function getProjects() {return _projects};

function getCurrentProject(){
    return _currentProject;
}

function createProject (projectName) {
    const project = projectItem(projectName);
    project.projectID = _projectIDNext;
    //project = project.bind(project);
    eventManager.publish('addNewProject', project);
}

function removeProject (project){
    if (_projects.includes(project)) {
        _projects.splice(_projects.indexOf(project), 1);
    };
};

function projectIDIncrement() {
    let nextID = parseInt(_projectIDNext);
    nextID += 1;
    _projectIDNext = makeIntegerIntoID(nextID);
}

function makeIntegerIntoID(id){
    let string = id.toString();
    while (string.length < _projectIDNext.length){
        string = "0" + string;
    };
    return string;
};

eventManager.subscribe('createProject', eventArgs => {
    createProject (eventArgs);
});

eventManager.subscribe('addNewProject', eventArgs => {
    _projects.push(eventArgs);
    projectIDIncrement();
    /* _projects.forEach(project => {
        console.log(project.getTitle());
    }) */
});

eventManager.subscribe('removeProject', eventArgs => {
    _projects.splice(_projects.indexOf(eventArgs), 1);
    let tempProj = {};
    if (_projects.length>0){
        tempProj = _projects[0];
    };
    eventManager.publish('selectProject', tempProj);
});

eventManager.subscribe('selectProject', eventArgs => {
    _currentProject = eventArgs;
});

eventManager.subscribe('createNewTask', eventArgs => {
    if (getCurrentProject() == eventArgs) getCurrentProject().createNewTask();
})

eventManager.subscribe('setTaskValues', eventArgs => {
    if (getCurrentProject() == eventArgs) getCurrentProject().setTaskValues(eventArgs);
})


console.log('projectManager.js is running');

export {
    getCurrentProject,
    getProjects,
    createProject,
    removeProject
}