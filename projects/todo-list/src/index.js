import projectManagerComponent, {createProject} from "./components/projectManager";
//import projectComponent from "./components/project";
import taskComponent from "./components/task";
import{eventItem as event, eventManager as eventAggregator} from "./components/eventManager";


const eventManager = eventAggregator();
const projectManager = projectManagerComponent();

const addProjectButton = document.querySelector("button.dashboard-add-project-button");
const newProjectInput = document.querySelector("#new-project-input");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', () => {
    addProject(newProjectInput.value);
});

/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */



function addProject(name) {
    const newProject = createProject(name);
    projectManager.addProject(newProject);
}

export {
    eventManager
}