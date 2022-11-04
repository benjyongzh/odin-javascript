const Dashboard = () => {
    
    const _projects = [];

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

export default function dashboardComponent(){
    return Dashboard;
}