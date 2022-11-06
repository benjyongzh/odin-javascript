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



const _events = [];

function getEvents() {
    return _events;
}

function getEvent(eventName) {
    //console.log(events);
    const tempList = [];
    console.log(_events);
    _events.forEach(event => {
        console.log(event.name);
        if (event.name == eventName){
            tempList.push(event);
        }
    })

    console.log(tempList);
    return tempList[0];
};

function publish(eventName, eventArgs) {
    let event = getEvent(eventName);
    if (!event) {
        event = (0,_eventItem__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName);
        _events.push(event);
    }

    event.fire(eventArgs);
};

function subscribe(eventName, handler) {
    let event = getEvent(eventName);
    if (!event){
        event = (0,_eventItem__WEBPACK_IMPORTED_MODULE_0__["default"])(eventName);
        _events.push(event);
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

    //console.log(eventManager.getEvents());
    //console.log(projectManager.getProjects());
});

/* const newProject = projectComponent("myprojectname", "somedesc");
const someTask = taskComponent("some task", "i gotta do this", "medium");
newProject.addTask(someTask);
console.log(newProject); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRWlDOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckZBLFdBQVcsZUFBZTs7QUFFWDs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Db0M7QUFDVzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQSxvQkFBb0Isb0RBQVc7QUFDL0IsSUFBSSxrREFBb0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBc0I7QUFDdEI7QUFDQSxDQUFDOzs7Ozs7OztVQzVERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044RDtBQUM5RDtBQUMwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUE0Qjs7QUFFaEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZXZlbnRJdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudEl0ZW0obmFtZSkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW107XG5cbiAgICBjb25zdCBhZGRIYW5kbGVyID0gaGFuZGxlciA9PiB7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9IGhhbmRsZXJUb1JlbW92ZSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09IGhhbmRsZXJUb1JlbW92ZSl7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaXJlID0gZXZlbnRBcmdzID0+IHtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGUgPT4ge1xuICAgICAgICAgICAgaGFuZGxlKGV2ZW50QXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGhhbmRsZXJzLFxuICAgICAgICBhZGRIYW5kbGVyLFxuICAgICAgICByZW1vdmVIYW5kbGVyLFxuICAgICAgICBmaXJlXG4gICAgfVxufVxuICAgICIsIi8qIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50TWFuYWdlcigpIHtcbiAgICBjb25zdCBldmVudHMgPSBbXTtcblxuICAgIGNvbnN0IGdldEV2ZW50cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcbiAgICAgICAgLy9ldmVudHMuZm9yRWFjaChldmVudCA9PiBjb25zb2xlLmxvZyhldmVudC5uYW1lKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgICBjb25zdCBldmVudExpc3QgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50Lm5hbWUgPT09IGV2ZW50TmFtZX1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50TGlzdFswXTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGV2ZW50QXJncykgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuXG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuZmlyZShldmVudEFyZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmICghZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudEl0ZW0oZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LmFkZEhhbmRsZXIoaGFuZGxlcik7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRFdmVudHMsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHN1YnNjcmliZVxuICAgIH1cblxufTsgKi9cblxuaW1wb3J0IGV2ZW50SXRlbSBmcm9tIFwiLi9ldmVudEl0ZW1cIjtcblxuY29uc3QgX2V2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRFdmVudHMoKSB7XG4gICAgcmV0dXJuIF9ldmVudHM7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGV2ZW50TmFtZSkge1xuICAgIC8vY29uc29sZS5sb2coZXZlbnRzKTtcbiAgICBjb25zdCB0ZW1wTGlzdCA9IFtdO1xuICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIF9ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50Lm5hbWUpO1xuICAgICAgICBpZiAoZXZlbnQubmFtZSA9PSBldmVudE5hbWUpe1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2codGVtcExpc3QpO1xuICAgIHJldHVybiB0ZW1wTGlzdFswXTtcbn07XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBldmVudEFyZ3MpIHtcbiAgICBsZXQgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgZXZlbnQgPSBldmVudEl0ZW0oZXZlbnROYW1lKTtcbiAgICAgICAgX2V2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5maXJlKGV2ZW50QXJncyk7XG59O1xuXG5mdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgbGV0IGV2ZW50ID0gZ2V0RXZlbnQoZXZlbnROYW1lKTtcbiAgICBpZiAoIWV2ZW50KXtcbiAgICAgICAgZXZlbnQgPSBldmVudEl0ZW0oZXZlbnROYW1lKTtcbiAgICAgICAgX2V2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRIYW5kbGVyKGhhbmRsZXIpO1xufVxuXG5leHBvcnQge1xuICAgIGdldEV2ZW50cyxcbiAgICBnZXRFdmVudCxcbiAgICBwdWJsaXNoLFxuICAgIHN1YnNjcmliZVxufTsiLCIvL2ltcG9ydCB7IGV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0SXRlbSh0aXRsZT1cIk15IFByb2plY3RcIiwgZGVzY3JpcHRpb249XCJcIikge1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBpbnB1dFRpdGxlID0+IHRpdGxlID0gaW5wdXRUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IF90YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBfdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBpZiAoX3Rhc2tzLmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICAgICAgICBfdGFza3Muc3BsaWNlKF90YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBfdGFza3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG5cbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0VGFza3NcbiAgICB9XG5cbn0iLCJpbXBvcnQgcHJvamVjdEl0ZW0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0ICogYXMgZXZlbnRNYW5hZ2VyIGZyb20gXCIuL2V2ZW50TWFuYWdlclwiO1xuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TWFuYWdlckNvbXBvbmVudCgpIHtcbiAgICBcbi8vICAgICBjb25zdCBfcHJvamVjdHMgPSBbXTtcblxuLy8gICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gX3Byb2plY3RzO1xuXG4vLyAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHByb2plY3ROYW1lID0+IHtcbi8vICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJdGVtKHByb2plY3ROYW1lKTtcbi8vICAgICAgICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2FkZE5ld1Byb2plY3QnLCBwcm9qZWN0KTtcbi8vICAgICB9XG5cbi8vICAgICAvKiBjb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4vLyAgICAgICAgIF9wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuLy8gICAgIH07ICovXG5cbi8vICAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4vLyAgICAgICAgIGlmIChfcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbi8vICAgICAgICAgICAgIF9wcm9qZWN0cy5zcGxpY2UoX3Byb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuLy8gICAgICAgICB9O1xuLy8gICAgIH07XG5cbi8vICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuLy8gICAgICAgICBldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhZGROZXdQcm9qZWN0JywgZXZlbnRBcmdzID0+IHtcbi8vICAgICAgICAgICAgIF9wcm9qZWN0cy5wdXNoKGV2ZW50QXJncyk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGdldFByb2plY3RzLFxuLy8gICAgICAgICBjcmVhdGVQcm9qZWN0LFxuLy8gICAgICAgICAvL2FkZFByb2plY3QsXG4vLyAgICAgICAgIHJlbW92ZVByb2plY3QsXG4vLyAgICAgICAgIGluaXRcbi8vICAgICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBwcm9qZWN0TWFuYWdlckNvbXBvbmVudCxcbi8vIH1cblxuY29uc3QgX3Byb2plY3RzID0gW107XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge3JldHVybiBfcHJvamVjdHN9O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0IChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgZXZlbnRNYW5hZ2VyLnB1Ymxpc2goJ2FkZE5ld1Byb2plY3QnLCBwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCAocHJvamVjdCl7XG4gICAgaWYgKF9wcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KSkge1xuICAgICAgICBfcHJvamVjdHMuc3BsaWNlKF9wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICB9O1xufTtcblxuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYWRkTmV3UHJvamVjdCcsIGV2ZW50QXJncyA9PiB7XG4gICAgX3Byb2plY3RzLnB1c2goZXZlbnRBcmdzKTtcbn0pO1xuXG5leHBvcnQge1xuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0TWFuYWdlclwiO1xuLy9pbXBvcnQgdGFza0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tcIjtcbmltcG9ydCAqIGFzIGV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50TWFuYWdlclwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kYXNoYm9hcmQtYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy9jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdGFzay1idXR0b25cIik7XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhldmVudE1hbmFnZXIuZ2V0RXZlbnRzKCkpO1xuICAgIC8vY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKSk7XG59KTtcblxuLyogY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RDb21wb25lbnQoXCJteXByb2plY3RuYW1lXCIsIFwic29tZWRlc2NcIik7XG5jb25zdCBzb21lVGFzayA9IHRhc2tDb21wb25lbnQoXCJzb21lIHRhc2tcIiwgXCJpIGdvdHRhIGRvIHRoaXNcIiwgXCJtZWRpdW1cIik7XG5uZXdQcm9qZWN0LmFkZFRhc2soc29tZVRhc2spO1xuY29uc29sZS5sb2cobmV3UHJvamVjdCk7ICovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=