import projectComponent from "./project";
import { eventManager } from "../index";

const ProjectManager = () => {
    
    const _projects = [];

    const getProjects = () => _projects;

    eventManager.subscribe('addNewProject', addProject);
    const addProject = project => {
        _projects.push(project);
    };

    const removeProject = project => {
        if (_projects.includes(project)) {
            _projects.splice(_projects.indexOf(project), 1);
        };
    };

    return {
        getProjects,
        addProject,
        removeProject
    };
};

export default function projectManagerComponent(){
    return ProjectManager;
};

export function createProject(name){
    const project = projectComponent(name);
    return project;
};