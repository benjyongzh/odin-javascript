/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/eventManager.js":
/*!****************************************!*\
  !*** ./src/components/eventManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventItem": () => (/* binding */ eventItem),
/* harmony export */   "eventManager": () => (/* binding */ eventManager)
/* harmony export */ });
function eventItem(name) {
    const handlers = [];

    const addHandler = handler => {
        handlers.push(handler);
    }

    const removeHandler = handlerToRemove => {
        for (let i = 0; i < handlers.length; i++){
            if (handlers[i] == handlerToRemove){
                handlers.splice(i,1);
                break;
            }
        }
    }

    const fire = eventArgs => {
        handlers.forEach(handle => {
            handle(eventArgs);
        });
    }

    return {
        name,
        handlers,
        addHandler,
        removeHandler,
        fire
    }
}

function eventManager() {
    const events = [];

    const showEvents = () => events;

    const getEvent = (eventName) => {
        return events.filter(event => {
            event.name === eventName}
        )[0];
    };

    const publish = (eventName, eventArgs) => {
        let event = getEvent(eventName);

        if (!event) {
            event = eventItem(eventName);
            events.push(event);
        }
        event.fire(eventArgs);
    };

    const subscribe = (eventName, handler) => {
        let event = getEvent(eventName);
        if (!event){
            event = eventItem(eventName);
            events.push(event);
        }

        event.addHandler(handler);

    }

    return {
        showEvents,
        publish,
        subscribe
    }

};



/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectComponent)
/* harmony export */ });
//import { eventManager } from "../index";

const Project = (title="My Project", description="") => {

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

    return {
        setTitle,
        setDescription,

        getTitle,
        getDescription,
        
        addTask,
        removeTask,
        getTasks
    }

}

function projectComponent(){
    return Project();
}

/***/ }),

/***/ "./src/components/projectManager.js":
/*!******************************************!*\
  !*** ./src/components/projectManager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "default": () => (/* binding */ ProjectManagerComponent)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");



function ProjectManagerComponent() {
    
    const _projects = [];

    const getProjects = () => _projects;

    const addProject = project => {
        _projects.push(project);
    };

    const removeProject = project => {
        if (_projects.includes(project)) {
            _projects.splice(_projects.indexOf(project), 1);
        };
    };

    const init = () => {
        _index__WEBPACK_IMPORTED_MODULE_1__.eventManager.subscribe('addNewProject', addProject);
    }

    return {
        getProjects,
        addProject,
        removeProject,
        init
    };
};

function createProject(name){
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
    return project;
};

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskComponent)
/* harmony export */ });
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

function taskComponent(){
    return Task();
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventManager": () => (/* binding */ eventManager)
/* harmony export */ });
/* harmony import */ var _components_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/projectManager */ "./src/components/projectManager.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");
/* harmony import */ var _components_eventManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/eventManager */ "./src/components/eventManager.js");

//import projectComponent from "./components/project";




const eventManager = (0,_components_eventManager__WEBPACK_IMPORTED_MODULE_2__.eventManager)();
const projectManager = (0,_components_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    const newProject = (0,_components_projectManager__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
    //projectManager.addProject(newProject);
    eventManager.publish('addNewProject', newProject);
    console.log(eventManager.showEvents());
    console.log(projectManager.getProjects());
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQSxXQUFXLGVBQWU7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN5QztBQUNEOztBQUV6QjtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUFzQjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9CQUFvQixvREFBZ0I7QUFDcEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDbUY7QUFDbkY7QUFDOEM7QUFDK0M7OztBQUc3RixxQkFBcUIsc0VBQWU7QUFDcEMsdUJBQXVCLHNFQUF1QjtBQUM5Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0EsdUJBQXVCLHlFQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGV2ZW50SXRlbShuYW1lKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXTtcblxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSBoYW5kbGVyID0+IHtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gaGFuZGxlclRvUmVtb3ZlID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0gPT0gaGFuZGxlclRvUmVtb3ZlKXtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpcmUgPSBldmVudEFyZ3MgPT4ge1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZSA9PiB7XG4gICAgICAgICAgICBoYW5kbGUoZXZlbnRBcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGFuZGxlcnMsXG4gICAgICAgIGFkZEhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUhhbmRsZXIsXG4gICAgICAgIGZpcmVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50TWFuYWdlcigpIHtcbiAgICBjb25zdCBldmVudHMgPSBbXTtcblxuICAgIGNvbnN0IHNob3dFdmVudHMgPSAoKSA9PiBldmVudHM7XG5cbiAgICBjb25zdCBnZXRFdmVudCA9IChldmVudE5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQubmFtZSA9PT0gZXZlbnROYW1lfVxuICAgICAgICApWzBdO1xuICAgIH07XG5cbiAgICBjb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZSwgZXZlbnRBcmdzKSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudEl0ZW0oZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5maXJlKGV2ZW50QXJncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFldmVudCl7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuYWRkSGFuZGxlcihoYW5kbGVyKTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dFdmVudHMsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHN1YnNjcmliZVxuICAgIH1cblxufTtcblxuZXhwb3J0IHtcbiAgICBldmVudEl0ZW0sXG4gICAgZXZlbnRNYW5hZ2VyXG59IiwiLy9pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgUHJvamVjdCA9ICh0aXRsZT1cIk15IFByb2plY3RcIiwgZGVzY3JpcHRpb249XCJcIikgPT4ge1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBpbnB1dFRpdGxlID0+IHRpdGxlID0gaW5wdXRUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IF90YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBfdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBpZiAoX3Rhc2tzLmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICAgICAgICBfdGFza3Muc3BsaWNlKF90YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBfdGFza3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG5cbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0VGFza3NcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENvbXBvbmVudCgpe1xuICAgIHJldHVybiBQcm9qZWN0KCk7XG59IiwiaW1wb3J0IHByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNYW5hZ2VyQ29tcG9uZW50KCkge1xuICAgIFxuICAgIGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHM7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIF9wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChfcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0cy5zcGxpY2UoX3Byb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhZGROZXdQcm9qZWN0JywgYWRkUHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdHMsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGluaXRcbiAgICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RDb21wb25lbnQobmFtZSk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59OyIsImNvbnN0IFRhc2sgPSAodGl0bGU9XCJNeSBUYXNrXCIsIGRlc2NyaXB0aW9uPVwiXCIvKiAsIGR1ZURhdGUgKi8sIHByaW9yaXR5PTEpID0+IHtcblxuICAgIGxldCBfaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IHNldFRpdGxlID0gaW5wdXRUaXRsZSA9PiB0aXRsZSA9IGlucHV0VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbjtcbiAgICAvL2NvbnN0IHNldER1ZURhdGUgPSBpbnB1dER1ZURhdGUgPT4gZHVlRGF0ZSA9IGlucHV0RHVlRGF0ZTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IGlucHV0UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5O1xuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiBfaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgLy9jb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICAvL3NldER1ZURhdGUsXG4gICAgICAgIHNldFByaW9yaXR5LFxuICAgICAgICBzZXRDb21wbGV0ZSxcblxuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIC8vZ2V0RHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHksXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tDb21wb25lbnQoKXtcbiAgICByZXR1cm4gVGFzaygpO1xufSIsImltcG9ydCBwcm9qZWN0TWFuYWdlckNvbXBvbmVudCwge2NyZWF0ZVByb2plY3R9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdE1hbmFnZXJcIjtcbi8vaW1wb3J0IHByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQgdGFza0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tcIjtcbmltcG9ydHtldmVudEl0ZW0gYXMgZXZlbnQsIGV2ZW50TWFuYWdlciBhcyBldmVudEFnZ3JlZ2F0b3J9IGZyb20gXCIuL2NvbXBvbmVudHMvZXZlbnRNYW5hZ2VyXCI7XG5cblxuY29uc3QgZXZlbnRNYW5hZ2VyID0gZXZlbnRBZ2dyZWdhdG9yKCk7XG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IHByb2plY3RNYW5hZ2VyQ29tcG9uZW50KCk7XG5wcm9qZWN0TWFuYWdlci5pbml0KCk7XG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRhc2hib2FyZC1hZGQtcHJvamVjdC1idXR0b25cIik7XG4vL2NvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC10YXNrLWJ1dHRvblwiKTtcblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1pbnB1dFwiKTtcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3RJbnB1dC52YWx1ZSk7XG59KTtcblxuLyogY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RDb21wb25lbnQoXCJteXByb2plY3RuYW1lXCIsIFwic29tZWRlc2NcIik7XG5jb25zdCBzb21lVGFzayA9IHRhc2tDb21wb25lbnQoXCJzb21lIHRhc2tcIiwgXCJpIGdvdHRhIGRvIHRoaXNcIiwgXCJtZWRpdW1cIik7XG5uZXdQcm9qZWN0LmFkZFRhc2soc29tZVRhc2spO1xuY29uc29sZS5sb2cobmV3UHJvamVjdCk7ICovXG5cbmNvbnNvbGUubG9nKGV2ZW50TWFuYWdlci5zaG93RXZlbnRzKCkpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAvL3Byb2plY3RNYW5hZ2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2FkZE5ld1Byb2plY3QnLCBuZXdQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhldmVudE1hbmFnZXIuc2hvd0V2ZW50cygpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbn1cblxuZXhwb3J0IHtcbiAgICBldmVudE1hbmFnZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9