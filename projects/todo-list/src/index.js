import dashboardComponent from "./components/dashboard";
import projectComponent from "./components/project";
import taskComponent from "./components/task";
import{eventItem as event, eventManager as eventAggregator} from "./components/eventManager";



(function () {
    const eventManager = eventAggregator();
    const dashboard = dashboardComponent();

    //dashboard publish adding and removal of projects

    const newProject = projectComponent("myprojectname", "somedesc");
    const someTask = taskComponent("some task", "i gotta do this", "medium");
    newProject.addTask(someTask);
    console.log(newProject);

})();