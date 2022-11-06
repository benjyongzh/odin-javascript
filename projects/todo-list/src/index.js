import projectManagerComponent, {createProject} from "./components/projectManager";
//import projectComponent from "./components/project";
import taskComponent from "./components/task";
import{eventItem as event, eventManager as eventAggregator} from "./components/eventManager";


const eventManager = eventAggregator();
const projectManager = projectManagerComponent();
projectManager.init();

const addProjectButton = document.querySelector("button.dashboard-add-project-button");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    addProject(newProjectInput.value);
});

/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */

console.log(eventManager.showEvents());

function addProject(name) {
    const newProject = createProject(name);
    //projectManager.addProject(newProject);
    eventManager.publish('addNewProject', newProject);
    console.log(eventManager.showEvents());
    console.log(projectManager.getProjects());
}

export {
    eventManager
}