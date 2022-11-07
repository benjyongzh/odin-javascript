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



const _events = [];

function getEvent(eventName) {
    //console.log(events);
    const tempList = [];
    //console.log(events.length);
    _events.forEach(event => {

        //console.log(events.length);
        if (event.name == eventName){
            tempList.push(event);
        }
    })

    //console.log(tempList);
    return tempList[0];
};

function publish(eventName, eventArgs) {
    let event = getEvent(eventName);
    if (!event) {
        event = (0,_eventItem__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName);
        _events.push(event);
    }
    /* console.log(event);
    console.log(events.length); */

    event.fire(eventArgs);
};

function subscribe(eventName, handler) {
    let event = getEvent(eventName);
    if (!event){
        event = (0,_eventItem__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName);
        _events.push(event);
    }

    //console.log(events);

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
    /* _projects.forEach(project => {
        console.log(project.getTitle());
    }) */
});



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
/* harmony import */ var _components_eventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/eventManager */ "./src/components/eventManager.js");

//import taskComponent from "./components/task";


const addProjectButton = document.querySelector("button.dashboard-add-project-button");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    _components_projectManager__WEBPACK_IMPORTED_MODULE_0__.createProject(newProjectInput.value);

    //console.log(eventManager.events);
    console.log(_components_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects());
});

/* export {
    eventManager
} */

/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFaUM7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBUztBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkEsV0FBVyxlQUFlOztBQUVYOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNvQztBQUNXOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBLG9CQUFvQixvREFBVztBQUMvQixJQUFJLGtEQUFvQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7VUMvREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEQ7QUFDOUQ7QUFDMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBNEI7O0FBRWhDO0FBQ0EsZ0JBQWdCLG1FQUEwQjtBQUMxQyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ldmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdO1xuXG4gICAgY29uc3QgYWRkSGFuZGxlciA9IGhhbmRsZXIgPT4ge1xuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUhhbmRsZXIgPSBoYW5kbGVyVG9SZW1vdmUgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXSA9PSBoYW5kbGVyVG9SZW1vdmUpe1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmlyZSA9IGV2ZW50QXJncyA9PiB7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlID0+IHtcbiAgICAgICAgICAgIGhhbmRsZShldmVudEFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBoYW5kbGVycyxcbiAgICAgICAgYWRkSGFuZGxlcixcbiAgICAgICAgcmVtb3ZlSGFuZGxlcixcbiAgICAgICAgZmlyZVxuICAgIH1cbn1cbiAgICAiLCIvKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudE1hbmFnZXIoKSB7XG4gICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBnZXRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBldmVudHM7XG4gICAgICAgIC8vZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQubmFtZSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gZXZlbnRzLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5uYW1lID09PSBldmVudE5hbWV9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBldmVudExpc3RbMF07XG4gICAgfTtcblxuICAgIGNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBldmVudEFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcblxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmZpcmUoZXZlbnRBcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RXZlbnRzLFxuICAgICAgICBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmVcbiAgICB9XG5cbn07ICovXG5cbmltcG9ydCBldmVudEl0ZW0gZnJvbSBcIi4vZXZlbnRJdGVtXCI7XG5cbmNvbnN0IF9ldmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZlbnROYW1lKSB7XG4gICAgLy9jb25zb2xlLmxvZyhldmVudHMpO1xuICAgIGNvbnN0IHRlbXBMaXN0ID0gW107XG4gICAgLy9jb25zb2xlLmxvZyhldmVudHMubGVuZ3RoKTtcbiAgICBfZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChldmVudC5uYW1lID09IGV2ZW50TmFtZSl7XG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvL2NvbnNvbGUubG9nKHRlbXBMaXN0KTtcbiAgICByZXR1cm4gdGVtcExpc3RbMF07XG59O1xuXG5mdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZXZlbnRBcmdzKSB7XG4gICAgbGV0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgIF9ldmVudHMucHVzaChldmVudCk7XG4gICAgfVxuICAgIC8qIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZyhldmVudHMubGVuZ3RoKTsgKi9cblxuICAgIGV2ZW50LmZpcmUoZXZlbnRBcmdzKTtcbn07XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgIGlmICghZXZlbnQpe1xuICAgICAgICBldmVudCA9IGV2ZW50SXRlbShldmVudE5hbWUpO1xuICAgICAgICBfZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coZXZlbnRzKTtcblxuICAgIGV2ZW50LmFkZEhhbmRsZXIoaGFuZGxlcik7XG59XG5cbmV4cG9ydCB7XG4gICAgLy9ldmVudHMsXG4gICAgZ2V0RXZlbnQsXG4gICAgcHVibGlzaCxcbiAgICBzdWJzY3JpYmVcbn07IiwiLy9pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEl0ZW0odGl0bGU9XCJNeSBQcm9qZWN0XCIsIGRlc2NyaXB0aW9uPVwiXCIpIHtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gaW5wdXRUaXRsZSA9PiB0aXRsZSA9IGlucHV0VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBfdGFza3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrID0+IHtcbiAgICAgICAgX3Rhc2tzLnB1c2godGFzayk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSB0YXNrID0+IHtcbiAgICAgICAgaWYgKF90YXNrcy5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgICAgICAgX3Rhc2tzLnNwbGljZShfdGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gX3Rhc2tzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGdldFRhc2tzXG4gICAgfVxuXG59IiwiaW1wb3J0IHByb2plY3RJdGVtIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIGV2ZW50TWFuYWdlciBmcm9tIFwiLi9ldmVudE1hbmFnZXJcIjtcblxuLy8gZnVuY3Rpb24gcHJvamVjdE1hbmFnZXJDb21wb25lbnQoKSB7XG4gICAgXG4vLyAgICAgY29uc3QgX3Byb2plY3RzID0gW107XG5cbi8vICAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuLy8gICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBwcm9qZWN0TmFtZSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SXRlbShwcm9qZWN0TmFtZSk7XG4vLyAgICAgICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdhZGROZXdQcm9qZWN0JywgcHJvamVjdCk7XG4vLyAgICAgfVxuXG4vLyAgICAgLyogY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3QgPT4ge1xuLy8gICAgICAgICBfcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbi8vICAgICB9OyAqL1xuXG4vLyAgICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuLy8gICAgICAgICBpZiAoX3Byb2plY3RzLmluY2x1ZGVzKHByb2plY3QpKSB7XG4vLyAgICAgICAgICAgICBfcHJvamVjdHMuc3BsaWNlKF9wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbi8vICAgICAgICAgZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYWRkTmV3UHJvamVjdCcsIGV2ZW50QXJncyA9PiB7XG4vLyAgICAgICAgICAgICBfcHJvamVjdHMucHVzaChldmVudEFyZ3MpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBnZXRQcm9qZWN0cyxcbi8vICAgICAgICAgY3JlYXRlUHJvamVjdCxcbi8vICAgICAgICAgLy9hZGRQcm9qZWN0LFxuLy8gICAgICAgICByZW1vdmVQcm9qZWN0LFxuLy8gICAgICAgICBpbml0XG4vLyAgICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgcHJvamVjdE1hbmFnZXJDb21wb25lbnQsXG4vLyB9XG5cbmNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtyZXR1cm4gX3Byb2plY3RzfTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEl0ZW0ocHJvamVjdE5hbWUpO1xuICAgIGV2ZW50TWFuYWdlci5wdWJsaXNoKCdhZGROZXdQcm9qZWN0JywgcHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QgKHByb2plY3Qpe1xuICAgIGlmIChfcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgICAgX3Byb2plY3RzLnNwbGljZShfcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgfTtcbn07XG5cbmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2FkZE5ld1Byb2plY3QnLCBldmVudEFyZ3MgPT4ge1xuICAgIF9wcm9qZWN0cy5wdXNoKGV2ZW50QXJncyk7XG4gICAgLyogX3Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGl0bGUoKSk7XG4gICAgfSkgKi9cbn0pO1xuXG5leHBvcnQge1xuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0TWFuYWdlclwiO1xuLy9pbXBvcnQgdGFza0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tcIjtcbmltcG9ydCAqIGFzIGV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50TWFuYWdlclwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kYXNoYm9hcmQtYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy9jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdGFzay1idXR0b25cIik7XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhldmVudE1hbmFnZXIuZXZlbnRzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbn0pO1xuXG4vKiBleHBvcnQge1xuICAgIGV2ZW50TWFuYWdlclxufSAqL1xuXG4vKiBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdENvbXBvbmVudChcIm15cHJvamVjdG5hbWVcIiwgXCJzb21lZGVzY1wiKTtcbmNvbnN0IHNvbWVUYXNrID0gdGFza0NvbXBvbmVudChcInNvbWUgdGFza1wiLCBcImkgZ290dGEgZG8gdGhpc1wiLCBcIm1lZGl1bVwiKTtcbm5ld1Byb2plY3QuYWRkVGFzayhzb21lVGFzayk7XG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KTsgKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==