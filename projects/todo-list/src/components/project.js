import * as eventManager from "./eventManager";
import taskItem from "./task";

export default function projectItem(title="My Project", description="") {


    let projectID;
    //this.projectID;

    const getProjectID = () => projectID;

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

    const setTaskValues = eventArgs => {
        getTasks().forEach(task => {
            if (task == eventArgs.task){
                task.setTaskValues(eventArgs);
            };
        });
    };

    const getTasks = () => _tasks;

    /* eventManager.subscribe('createNewTask', eventArgs => {
        console.log(eventArgs.projectID);
        //console.log(getProjectID());
        //console.log(this);
        if (eventArgs.projectID != projectID) return;
        
    }); */

    const createNewTask = () => {
        const task = taskItem();
        addTask(task);
    }

    eventManager.subscribe('removeTask', eventArgs => {
        removeTask(eventArgs);
    });



    return {
        getProjectID,
        //projectID,
        setTitle,
        setDescription,

        getTitle,
        getDescription,
        
        createNewTask,
        addTask,
        removeTask,
        setTaskValues,
        getTasks,

    }

}

//projectItem = projectItem.bind(projectItem);



/* export const projectItem = {

    projectID,
    title,
    description,
    tasks: [],

    get title(){
        return this.title;
    },

    set title(text){
        this.title = text;
    },

    get description(){
        return this.description;
    },

    set description(text){
        this.description = text;
    },

    get projectID(){
        return this.projectID;
    },

    set projectID(id){
        this.projectID = id;
    },

    get tasks() {
        return this.tasks;
    },

    addTask = task => {
        this.tasks.push(task);
        eventManager.publish('requestTaskDOMUpdate', {});
    },

    removeTask = task => {
        if (this.tasks.includes(task)) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            eventManager.publish('requestTaskDOMUpdate', {});
        };
    },

    // (() => {
    //     eventManager.subscribe('createNewTask', eventArgs => {
    //         console.log(eventArgs.projectID);
    //         console.log(this);
    //         if (eventArgs.projectID != this.projectID) return;
    //         const task = taskItem();
    //         addTask(task);
    //     })
    // })(),

    // eventManager.subscribe('removeTask', eventArgs => {
    //     removeTask(eventArgs);
    // });

} */