import * as eventManager from "./eventManager";
import taskItem from "./task";

export default function projectItem(title="My Project", description="") {

    let projectID;

    const setTitle = inputTitle => title = inputTitle;
    const setDescription = inputDescription => description = inputDescription;
    const getTitle = () => title;
    const getDescription = () => description;
    

    const _tasks = [];

    const addTask = task => {
        _tasks.push(task);
        eventManager.publish('requestTaskDOMUpdate', {});
    };

    const removeTask = task => {
        if (_tasks.includes(task)) {
            _tasks.splice(_tasks.indexOf(task), 1);
            eventManager.publish('requestTaskDOMUpdate', {});
        };
    };

    const getTasks = () => _tasks;

    eventManager.subscribe('createNewTask', eventArgs => {
        const task = taskItem();
        addTask(task);
    });

    eventManager.subscribe('removeTask', eventArgs => {
        removeTask(eventArgs);
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