import * as eventManager from "./eventManager";

export default function projectItem(title="My Project", description="") {

    let projectID;

    const setTitle = inputTitle => title = inputTitle;
    const setDescription = inputDescription => description = inputDescription;
    const getTitle = () => title;
    const getDescription = () => description;
    

    const _tasks = [];

    const addTask = task => {
        _tasks.push(task);
    };

    const removeTask = task => {
        if (_tasks.includes(task)) {
            _tasks.splice(_tasks.indexOf(task), 1);
        };
    };

    const getTasks = () => _tasks;

    eventManager.subscribe('createTask', eventArgs => {
        console.log('task shall be created in this project');
    });

    return {
        projectID,
        setTitle,
        setDescription,

        getTitle,
        getDescription,
        
        addTask,
        removeTask,
        getTasks
    }

}