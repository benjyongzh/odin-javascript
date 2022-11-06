import {projectItem} from "./project";
import * as eventManager from "./eventManager";

function projectManagerComponent() {
    
    const _projects = [];

    const getProjects = () => _projects;

    const createProject = projectName => {
        const project = projectItem(projectName);
        eventManager.publish('addNewProject', project);
    }

    /* const addProject = project => {
        _projects.push(project);
    }; */

    const removeProject = project => {
        if (_projects.includes(project)) {
            _projects.splice(_projects.indexOf(project), 1);
        };
    };

    const init = () => {
        eventManager.subscribe('addNewProject', eventArgs => {
            _projects.push(eventArgs);
        });
    }

    return {
        getProjects,
        createProject,
        //addProject,
        removeProject,
        init
    };
};

export {
    projectManagerComponent,
}