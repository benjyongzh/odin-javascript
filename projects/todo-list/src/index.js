const Project = () => {
    const tasks = [];

    const addTask = task => {
        tasks.push(task);
    };

    const removeTask = task => {
        if (tasks.includes(task)) {
            tasks.splice(tasks.indexOf(task), 1);
        };
    };
}

const Task = (title="My Task", description=""/* , dueDate */, priority="low") => {
    
    const setTitle = inputTitle => title = inputTitle;
    const setDescription = inputDescription => description = inputDescription;
    //const setDueDate = inputDueDate => dueDate = inputDueDate;
    const setPriority = inputPriority => priority = inputPriority;


    const getTitle = () => title;
    const getDescription = () => description;
    //const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {
        setTitle,
        setDescription,
        //setDueDate,
        setPriority,

        getTitle,
        getDescription,
        //getDueDate,
        getPriority,
    };
};

const lolThisTask = Task();
const lolThatTask = Task("loltask", "loldesc");
