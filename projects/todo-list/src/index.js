import * as projectManager from "./components/projectManager";
import * as DOMManager from "./components/DOMManager";
//import taskComponent from "./components/task";
//import * as eventManager from "./components/eventManager";


const addProjectButton = document.querySelector("button.dashboard-add-project-button");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    projectManager.createProject(newProjectInput.value);
});


/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */
