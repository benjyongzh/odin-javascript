import projectComponent from "./project";
import { eventManager } from "../index";

export default function ProjectManagerComponent() {
    
    const _projects = [];

    const getProjects = () => _projects;

    const addProject = project => {
        _projects.push(project);
    };

    const removeProject = project => {
        if (_projects.includes(project)) {
            _projects.splice(_projects.indexOf(project), 1);
        };
    };

    const init = () => {
        eventManager.subscribe('addNewProject', addProject);
    }

    return {
        getProjects,
        addProject,
        removeProject,
        init
    };
};

export function createProject(name){
    const project = projectComponent(name);
    return project;
};