import * as eventManager from "./eventManager";

export default function taskItem(title="My New Task", description=""/* , dueDate */, priority=1) {

    let _isComplete = false;
    
    const setTitle = inputTitle => title = inputTitle;
    //const setDescription = inputDescription => description = inputDescription;
    //const setDueDate = inputDueDate => dueDate = inputDueDate;
    const setPriority = inputPriority => priority = inputPriority;

    const setCompletion = status => _isComplete = status;

    const setTaskValues = eventArgs => {
        setTitle(eventArgs.title);
        eventManager.publish('refreshTask', eventArgs.task);
    }

    const getTitle = () => title;
    //const getDescription = () => description;
    //const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCompletion = () => _isComplete;

    // eventManager.subscribe('setTaskValues', eventArgs => {
    //     setValues(eventArgs);
    // })

    return {
        setTitle,
        //setDescription,
        //setDueDate,
        setPriority,
        setCompletion,
        setTaskValues,

        getTitle,
        //getDescription,
        //getDueDate,
        getPriority,
        getCompletion
    };
};