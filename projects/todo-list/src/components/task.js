const Task = (title="My Task", description=""/* , dueDate */, priority=1) => {

    let _isComplete = false;
    
    const setTitle = inputTitle => title = inputTitle;
    const setDescription = inputDescription => description = inputDescription;
    //const setDueDate = inputDueDate => dueDate = inputDueDate;
    const setPriority = inputPriority => priority = inputPriority;

    const setComplete = () => _isComplete = true;

    const getTitle = () => title;
    const getDescription = () => description;
    //const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {
        setTitle,
        setDescription,
        //setDueDate,
        setPriority,
        setComplete,

        getTitle,
        getDescription,
        //getDueDate,
        getPriority,
    };
};

export default function taskComponent(){
    return Task();
}