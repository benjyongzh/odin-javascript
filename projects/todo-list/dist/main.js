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
/* harmony export */   "default": () => (/* binding */ projectItem)
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
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventManager */ "./src/components/eventManager.js");



// function projectManagerComponent() {
    
//     const _projects = [];

//     const getProjects = () => _projects;

//     const createProject = projectName => {
//         const project = projectItem(projectName);
//         eventManager.publish('addNewProject', project);
//     }

//     /* const addProject = project => {
//         _projects.push(project);
//     }; */

//     const removeProject = project => {
//         if (_projects.includes(project)) {
//             _projects.splice(_projects.indexOf(project), 1);
//         };
//     };

//     const init = () => {
//         eventManager.subscribe('addNewProject', eventArgs => {
//             _projects.push(eventArgs);
//         });
//     }

//     return {
//         getProjects,
//         createProject,
//         //addProject,
//         removeProject,
//         init
//     };
// };

// export {
//     projectManagerComponent,
// }

const _projects = [];

function getProjects() {return _projects};

function createProject (projectName) {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName);
    _eventManager__WEBPACK_IMPORTED_MODULE_1__.publish('addNewProject', project);
}

function removeProject (project){
    if (_projects.includes(project)) {
        _projects.splice(_projects.indexOf(project), 1);
    };
};

_eventManager__WEBPACK_IMPORTED_MODULE_1__.subscribe('addNewProject', eventArgs => {
    _projects.push(eventArgs);
});



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



const addProjectButton = document.querySelector("button.dashboard-add-project-button");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    _components_projectManager__WEBPACK_IMPORTED_MODULE_0__.createProject(newProjectInput.value);

    console.log(_components_eventManager__WEBPACK_IMPORTED_MODULE_2__.getEvents());
    console.log(_components_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects());
});

/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRWlDOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQSxXQUFXLGVBQWU7O0FBRVg7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ29DO0FBQ1c7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0Esb0JBQW9CLG9EQUFXO0FBQy9CLElBQUksa0RBQW9CO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQXNCO0FBQ3RCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVERDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEQ7QUFDOUQ7QUFDOEM7QUFDWTs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUE0Qjs7QUFFaEMsZ0JBQWdCLCtEQUFzQjtBQUN0QyxnQkFBZ0IsbUVBQTBCO0FBQzFDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZXZlbnRJdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50SXRlbShuYW1lKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXTtcblxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSBoYW5kbGVyID0+IHtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gaGFuZGxlclRvUmVtb3ZlID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0gPT0gaGFuZGxlclRvUmVtb3ZlKXtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpcmUgPSBldmVudEFyZ3MgPT4ge1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZSA9PiB7XG4gICAgICAgICAgICBoYW5kbGUoZXZlbnRBcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGFuZGxlcnMsXG4gICAgICAgIGFkZEhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUhhbmRsZXIsXG4gICAgICAgIGZpcmVcbiAgICB9XG59XG4gICAgIiwiLyogZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRNYW5hZ2VyKCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0RXZlbnRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnRzO1xuICAgICAgICAvL2V2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50Lm5hbWUpKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50TGlzdCA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQubmFtZSA9PT0gZXZlbnROYW1lfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZXZlbnRMaXN0WzBdO1xuICAgIH07XG5cbiAgICBjb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZSwgZXZlbnRBcmdzKSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudEl0ZW0oZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5maXJlKGV2ZW50QXJncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFldmVudCl7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuYWRkSGFuZGxlcihoYW5kbGVyKTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEV2ZW50cyxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlXG4gICAgfVxuXG59OyAqL1xuXG5pbXBvcnQgZXZlbnRJdGVtIGZyb20gXCIuL2V2ZW50SXRlbVwiO1xuXG5jb25zdCBldmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0RXZlbnRzKCkge1xuICAgIHJldHVybiBldmVudHM7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50IChldmVudE5hbWUpIHtcbiAgICBjb25zdCBldmVudExpc3QgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQubmFtZSA9PT0gZXZlbnROYW1lfVxuICAgICk7XG4gICAgcmV0dXJuIGV2ZW50TGlzdFswXTtcbn07XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBldmVudEFyZ3MpIHtcbiAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuXG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgfVxuICAgIGV2ZW50LmZpcmUoZXZlbnRBcmdzKTtcbn07XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgIGlmICghZXZlbnQpe1xuICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuYWRkSGFuZGxlcihoYW5kbGVyKTtcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRFdmVudHMsXG4gICAgZ2V0RXZlbnQsXG4gICAgcHVibGlzaCxcbiAgICBzdWJzY3JpYmVcbn07IiwiLy9pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEl0ZW0odGl0bGU9XCJNeSBQcm9qZWN0XCIsIGRlc2NyaXB0aW9uPVwiXCIpIHtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gaW5wdXRUaXRsZSA9PiB0aXRsZSA9IGlucHV0VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBfdGFza3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrID0+IHtcbiAgICAgICAgX3Rhc2tzLnB1c2godGFzayk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSB0YXNrID0+IHtcbiAgICAgICAgaWYgKF90YXNrcy5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgICAgICAgX3Rhc2tzLnNwbGljZShfdGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gX3Rhc2tzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGdldFRhc2tzXG4gICAgfVxuXG59IiwiaW1wb3J0IHByb2plY3RJdGVtIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIGV2ZW50TWFuYWdlciBmcm9tIFwiLi9ldmVudE1hbmFnZXJcIjtcblxuLy8gZnVuY3Rpb24gcHJvamVjdE1hbmFnZXJDb21wb25lbnQoKSB7XG4gICAgXG4vLyAgICAgY29uc3QgX3Byb2plY3RzID0gW107XG5cbi8vICAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuLy8gICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBwcm9qZWN0TmFtZSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SXRlbShwcm9qZWN0TmFtZSk7XG4vLyAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdhZGROZXdQcm9qZWN0JywgcHJvamVjdCk7XG4vLyAgICAgfVxuXG4vLyAgICAgLyogY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3QgPT4ge1xuLy8gICAgICAgICBfcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbi8vICAgICB9OyAqL1xuXG4vLyAgICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuLy8gICAgICAgICBpZiAoX3Byb2plY3RzLmluY2x1ZGVzKHByb2plY3QpKSB7XG4vLyAgICAgICAgICAgICBfcHJvamVjdHMuc3BsaWNlKF9wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbi8vICAgICAgICAgZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYWRkTmV3UHJvamVjdCcsIGV2ZW50QXJncyA9PiB7XG4vLyAgICAgICAgICAgICBfcHJvamVjdHMucHVzaChldmVudEFyZ3MpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBnZXRQcm9qZWN0cyxcbi8vICAgICAgICAgY3JlYXRlUHJvamVjdCxcbi8vICAgICAgICAgLy9hZGRQcm9qZWN0LFxuLy8gICAgICAgICByZW1vdmVQcm9qZWN0LFxuLy8gICAgICAgICBpbml0XG4vLyAgICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgcHJvamVjdE1hbmFnZXJDb21wb25lbnQsXG4vLyB9XG5cbmNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtyZXR1cm4gX3Byb2plY3RzfTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEl0ZW0ocHJvamVjdE5hbWUpO1xuICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdhZGROZXdQcm9qZWN0JywgcHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QgKHByb2plY3Qpe1xuICAgIGlmIChfcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgICAgX3Byb2plY3RzLnNwbGljZShfcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgfTtcbn07XG5cbmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2FkZE5ld1Byb2plY3QnLCBldmVudEFyZ3MgPT4ge1xuICAgIF9wcm9qZWN0cy5wdXNoKGV2ZW50QXJncyk7XG59KTtcblxuZXhwb3J0IHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3Rcbn0iLCJjb25zdCBUYXNrID0gKHRpdGxlPVwiTXkgVGFza1wiLCBkZXNjcmlwdGlvbj1cIlwiLyogLCBkdWVEYXRlICovLCBwcmlvcml0eT0xKSA9PiB7XG5cbiAgICBsZXQgX2lzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBzZXRUaXRsZSA9IGlucHV0VGl0bGUgPT4gdGl0bGUgPSBpbnB1dFRpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb247XG4gICAgLy9jb25zdCBzZXREdWVEYXRlID0gaW5wdXREdWVEYXRlID0+IGR1ZURhdGUgPSBpbnB1dER1ZURhdGU7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5ID0+IHByaW9yaXR5ID0gaW5wdXRQcmlvcml0eTtcblxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKCkgPT4gX2lzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIC8vY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcbiAgICAgICAgLy9zZXREdWVEYXRlLFxuICAgICAgICBzZXRQcmlvcml0eSxcbiAgICAgICAgc2V0Q29tcGxldGUsXG5cbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICAvL2dldER1ZURhdGUsXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrQ29tcG9uZW50KCl7XG4gICAgcmV0dXJuIFRhc2soKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdE1hbmFnZXJcIjtcbi8vaW1wb3J0IHByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQgdGFza0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tcIjtcbmltcG9ydCAqIGFzIGV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50TWFuYWdlclwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kYXNoYm9hcmQtYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy9jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdGFzay1idXR0b25cIik7XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuXG4gICAgY29uc29sZS5sb2coZXZlbnRNYW5hZ2VyLmdldEV2ZW50cygpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbn0pO1xuXG4vKiBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdENvbXBvbmVudChcIm15cHJvamVjdG5hbWVcIiwgXCJzb21lZGVzY1wiKTtcbmNvbnN0IHNvbWVUYXNrID0gdGFza0NvbXBvbmVudChcInNvbWUgdGFza1wiLCBcImkgZ290dGEgZG8gdGhpc1wiLCBcIm1lZGl1bVwiKTtcbm5ld1Byb2plY3QuYWRkVGFzayhzb21lVGFzayk7XG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KTsgKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==