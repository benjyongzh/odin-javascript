import projectComponent from "./project";

const ProjectManager = () => {
    
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