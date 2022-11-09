import projectItem from "./project";
import * as eventManager from "./eventManager";

// function projectManagerComponent() {
    
//     const _projects = [];

//     const getProjects = () => _projects;

//     const createProject = projectName => {
//         const project = projectItem(projectName);
//         eventManager.publish('addNewProject', project);
//     }

//     /* const addProject = project => {
//         _projects.push(project);
//     }; */

//     const removeProject = project => {
//         if (_projects.includes(project)) {
//             _projects.splice(_projects.indexOf(project), 1);
//         };
//     };

//     const init = () => {
//         eventManager.subscribe('addNewProject', eventArgs => {
//             _projects.push(eventArgs);
//         });
//     }

//     return {
//         getProjects,
//         createProject,
//         //addProject,
//         removeProject,
//         init
//     };
// };

// export {
//     projectManagerComponent,
// }

const _projects = [];

let _projectIDNext = "00001";

function getProjects() {return _projects};

function createProject (projectName) {
    const project = projectItem(projectName);
    project.projectID = _projectIDNext;
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

eventManager.subscribe('addNewProject', eventArgs => {
    _projects.push(eventArgs);
    projectIDIncrement();
    /* _projects.forEach(project => {
        console.log(project.getTitle());
    }) */
});

eventManager.subscribe('removeProject', eventArgs => {
    _projects.splice(_projects.indexOf(eventArgs), 1);
    /* _projects.forEach(project => {
        console.log(project.getTitle());
    }) */
});


console.log('projectManager.js is running');

export {
    getProjects,
    createProject,
    removeProject
}