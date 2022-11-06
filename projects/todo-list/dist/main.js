/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/eventItem.js":
/*!*************************************!*\
  !*** ./src/components/eventItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eventItem)
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
    

/***/ }),

/***/ "./src/components/eventManager.js":
/*!****************************************!*\
  !*** ./src/components/eventManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEvent": () => (/* binding */ getEvent),
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
/* harmony import */ var _eventItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventItem */ "./src/components/eventItem.js");
/* export default function eventManager() {
    const events = [];

    const getEvents = () => {
        return events;
        //events.forEach(event => console.log(event.name));
    }

    const getEvent = eventName => {
        const eventList = events.filter(event => {
            event.name === eventName}
        );
        return eventList[0];
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
        getEvents,
        publish,
        subscribe
    }

}; */



const events = [];

function getEvents() {
    return events;
}

function getEvent (eventName) {
    const eventList = events.filter(event => {
        event.name === eventName}
    );
    return eventList[0];
};

function publish(eventName, eventArgs) {
    let event = getEvent(eventName);

    if (!event) {
        event = (0,_eventItem__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName);
        events.push(event);
    }
    event.fire(eventArgs);
};

function subscribe(eventName, handler) {
    let event = getEvent(eventName);
    if (!event){
        event = (0,_eventItem__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName);
        events.push(event);
    }

    event.addHandler(handler);
}



/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectItem": () => (/* binding */ projectItem)
/* harmony export */ });
//import { eventManager } from "../index";

function projectItem(title="My Project", description="") {

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



/***/ }),

/***/ "./src/components/projectManager.js":
/*!******************************************!*\
  !*** ./src/components/projectManager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectManagerComponent": () => (/* binding */ projectManagerComponent)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventManager */ "./src/components/eventManager.js");



function projectManagerComponent() {
    
    const _projects = [];

    const getProjects = () => _projects;

    const createProject = projectName => {
        const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.projectItem)(projectName);
        _eventManager__WEBPACK_IMPORTED_MODULE_1__.publish('addNewProject', project);
    }

    /* const addProject = project => {
        _projects.push(project);
    }; */

    const removeProject = project => {
        if (_projects.includes(project)) {
            _projects.splice(_projects.indexOf(project), 1);
        };
    };

    const init = () => {
        _eventManager__WEBPACK_IMPORTED_MODULE_1__.subscribe('addNewProject', eventArgs => {
            _projects.push(eventArgs);
        });
    }

    return {
        getProjects,
        createProject,
        //addProject,
        removeProject,
        init
    };
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/projectManager */ "./src/components/projectManager.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");
/* harmony import */ var _components_eventManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/eventManager */ "./src/components/eventManager.js");

//import projectComponent from "./components/project";



const projectManager = _components_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManagerComponent();
projectManager.init();

const addProjectButton = document.querySelector("button.dashboard-add-project-button");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    projectManager.createProject(newProjectInput.value);

    console.log(_components_eventManager__WEBPACK_IMPORTED_MODULE_2__.getEvents());
    console.log(projectManager.getProjects());
});

/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRWlDOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQSxXQUFXLGVBQWU7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNzQztBQUNTOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IscURBQVc7QUFDbkMsUUFBUSxrREFBb0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0RBQXNCO0FBQzlCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmlFO0FBQ2pFO0FBQzhDO0FBQ1k7O0FBRTFELHVCQUF1QiwrRUFBeUM7QUFDaEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsK0RBQXNCO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdO1xuXG4gICAgY29uc3QgYWRkSGFuZGxlciA9IGhhbmRsZXIgPT4ge1xuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUhhbmRsZXIgPSBoYW5kbGVyVG9SZW1vdmUgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXSA9PSBoYW5kbGVyVG9SZW1vdmUpe1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmlyZSA9IGV2ZW50QXJncyA9PiB7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlID0+IHtcbiAgICAgICAgICAgIGhhbmRsZShldmVudEFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBoYW5kbGVycyxcbiAgICAgICAgYWRkSGFuZGxlcixcbiAgICAgICAgcmVtb3ZlSGFuZGxlcixcbiAgICAgICAgZmlyZVxuICAgIH1cbn1cbiAgICAiLCIvKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudE1hbmFnZXIoKSB7XG4gICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBnZXRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBldmVudHM7XG4gICAgICAgIC8vZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQubmFtZSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gZXZlbnRzLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5uYW1lID09PSBldmVudE5hbWV9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBldmVudExpc3RbMF07XG4gICAgfTtcblxuICAgIGNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBldmVudEFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcblxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmZpcmUoZXZlbnRBcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RXZlbnRzLFxuICAgICAgICBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmVcbiAgICB9XG5cbn07ICovXG5cbmltcG9ydCBldmVudEl0ZW0gZnJvbSBcIi4vZXZlbnRJdGVtXCI7XG5cbmNvbnN0IGV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRFdmVudHMoKSB7XG4gICAgcmV0dXJuIGV2ZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQgKGV2ZW50TmFtZSkge1xuICAgIGNvbnN0IGV2ZW50TGlzdCA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5uYW1lID09PSBldmVudE5hbWV9XG4gICAgKTtcbiAgICByZXR1cm4gZXZlbnRMaXN0WzBdO1xufTtcblxuZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGV2ZW50QXJncykge1xuICAgIGxldCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICB9XG4gICAgZXZlbnQuZmlyZShldmVudEFyZ3MpO1xufTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGxldCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgaWYgKCFldmVudCl7XG4gICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRIYW5kbGVyKGhhbmRsZXIpO1xufVxuXG5leHBvcnQge1xuICAgIGdldEV2ZW50cyxcbiAgICBnZXRFdmVudCxcbiAgICBwdWJsaXNoLFxuICAgIHN1YnNjcmliZVxufTsiLCIvL2ltcG9ydCB7IGV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5mdW5jdGlvbiBwcm9qZWN0SXRlbSh0aXRsZT1cIk15IFByb2plY3RcIiwgZGVzY3JpcHRpb249XCJcIikge1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBpbnB1dFRpdGxlID0+IHRpdGxlID0gaW5wdXRUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IF90YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBfdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBpZiAoX3Rhc2tzLmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICAgICAgICBfdGFza3Muc3BsaWNlKF90YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBfdGFza3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG5cbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0VGFza3NcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0SXRlbVxufSIsImltcG9ydCB7cHJvamVjdEl0ZW19IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIGV2ZW50TWFuYWdlciBmcm9tIFwiLi9ldmVudE1hbmFnZXJcIjtcblxuZnVuY3Rpb24gcHJvamVjdE1hbmFnZXJDb21wb25lbnQoKSB7XG4gICAgXG4gICAgY29uc3QgX3Byb2plY3RzID0gW107XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBwcm9qZWN0TmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdhZGROZXdQcm9qZWN0JywgcHJvamVjdCk7XG4gICAgfVxuXG4gICAgLyogY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgICAgICBfcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9OyAqL1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgICAgICBpZiAoX3Byb2plY3RzLmluY2x1ZGVzKHByb2plY3QpKSB7XG4gICAgICAgICAgICBfcHJvamVjdHMuc3BsaWNlKF9wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYWRkTmV3UHJvamVjdCcsIGV2ZW50QXJncyA9PiB7XG4gICAgICAgICAgICBfcHJvamVjdHMucHVzaChldmVudEFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgLy9hZGRQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBpbml0XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdE1hbmFnZXJDb21wb25lbnQsXG59IiwiY29uc3QgVGFzayA9ICh0aXRsZT1cIk15IFRhc2tcIiwgZGVzY3JpcHRpb249XCJcIi8qICwgZHVlRGF0ZSAqLywgcHJpb3JpdHk9MSkgPT4ge1xuXG4gICAgbGV0IF9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBpbnB1dFRpdGxlID0+IHRpdGxlID0gaW5wdXRUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uO1xuICAgIC8vY29uc3Qgc2V0RHVlRGF0ZSA9IGlucHV0RHVlRGF0ZSA9PiBkdWVEYXRlID0gaW5wdXREdWVEYXRlO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gaW5wdXRQcmlvcml0eSA9PiBwcmlvcml0eSA9IGlucHV0UHJpb3JpdHk7XG5cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9ICgpID0+IF9pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICAvL2NvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIC8vc2V0RHVlRGF0ZSxcbiAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIHNldENvbXBsZXRlLFxuXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgLy9nZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0NvbXBvbmVudCgpe1xuICAgIHJldHVybiBUYXNrKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0TWFuYWdlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyXCI7XG4vL2ltcG9ydCBwcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdFwiO1xuaW1wb3J0IHRhc2tDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy90YXNrXCI7XG5pbXBvcnQgKiBhcyBldmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9ldmVudE1hbmFnZXJcIjtcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBwcm9qZWN0TWFuYWdlbWVudC5wcm9qZWN0TWFuYWdlckNvbXBvbmVudCgpO1xucHJvamVjdE1hbmFnZXIuaW5pdCgpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kYXNoYm9hcmQtYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy9jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdGFzay1idXR0b25cIik7XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuXG4gICAgY29uc29sZS5sb2coZXZlbnRNYW5hZ2VyLmdldEV2ZW50cygpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbn0pO1xuXG4vKiBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdENvbXBvbmVudChcIm15cHJvamVjdG5hbWVcIiwgXCJzb21lZGVzY1wiKTtcbmNvbnN0IHNvbWVUYXNrID0gdGFza0NvbXBvbmVudChcInNvbWUgdGFza1wiLCBcImkgZ290dGEgZG8gdGhpc1wiLCBcIm1lZGl1bVwiKTtcbm5ld1Byb2plY3QuYWRkVGFzayhzb21lVGFzayk7XG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KTsgKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==