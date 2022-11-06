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
const eventItem = (name) => {
    handlers = [];

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

const eventManager = () => {
    const events = [];

    const showEvents = () => events;

    const getEvent = (eventName) => {
        return events.filter(event => {
            event.name === eventName}
        )[0];
    };

    const publish = (eventName, eventArgs) => {
        const event = getEvent(eventName);

        if (!event) {
            event = eventItem(eventName);
            events.push(event);
        }
        event.fire(eventArgs);
    };

    const subscribe = (eventName, handler) => {
        const event = getEvent(eventName);
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
/* harmony export */   "default": () => (/* binding */ projectManagerComponent)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");



const ProjectManager = () => {
    
    const _projects = [];

    const getProjects = () => _projects;

    _index__WEBPACK_IMPORTED_MODULE_1__.eventManager.subscribe('addNewProject', addProject);
    const addProject = project => {
        _projects.push(project);
    };

    const removeProject = project => {
        if (_projects.includes(project)) {
            _projects.splice(_projects.indexOf(project), 1);
        };
    };

    return {
        getProjects,
        addProject,
        removeProject
    };
};

function projectManagerComponent(){
    return ProjectManager;
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

const addProjectButton = document.querySelector("button.dashboard-add-project-button");
//const addTaskButton = document.querySelector("button.add-task-button");

addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newProjectInput = event.target.parentElement.querySelector("#new-project-input");
    //console.log(newProjectInput.value);
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
    eventManager.publish('addNewProject', newProject)
    console.log(eventManager)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQSxXQUFXLGVBQWU7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN5QztBQUNEOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSwwREFBc0I7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFTztBQUNQLG9CQUFvQixvREFBZ0I7QUFDcEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDbUY7QUFDbkY7QUFDOEM7QUFDK0M7OztBQUc3RixxQkFBcUIsc0VBQWU7QUFDcEMsdUJBQXVCLHNFQUF1Qjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0EsdUJBQXVCLHlFQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudEl0ZW0gPSAobmFtZSkgPT4ge1xuICAgIGhhbmRsZXJzID0gW107XG5cbiAgICBjb25zdCBhZGRIYW5kbGVyID0gaGFuZGxlciA9PiB7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9IGhhbmRsZXJUb1JlbW92ZSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09IGhhbmRsZXJUb1JlbW92ZSl7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaXJlID0gZXZlbnRBcmdzID0+IHtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGUgPT4ge1xuICAgICAgICAgICAgaGFuZGxlKGV2ZW50QXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGhhbmRsZXJzLFxuICAgICAgICBhZGRIYW5kbGVyLFxuICAgICAgICByZW1vdmVIYW5kbGVyLFxuICAgICAgICBmaXJlXG4gICAgfVxufVxuXG5jb25zdCBldmVudE1hbmFnZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBzaG93RXZlbnRzID0gKCkgPT4gZXZlbnRzO1xuXG4gICAgY29uc3QgZ2V0RXZlbnQgPSAoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50Lm5hbWUgPT09IGV2ZW50TmFtZX1cbiAgICAgICAgKVswXTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGV2ZW50QXJncykgPT4ge1xuICAgICAgICBjb25zdCBldmVudCA9IGdldEV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudEl0ZW0oZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5maXJlKGV2ZW50QXJncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRJdGVtKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd0V2ZW50cyxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgc3Vic2NyaWJlXG4gICAgfVxuXG59O1xuXG5leHBvcnQge1xuICAgIGV2ZW50SXRlbSxcbiAgICBldmVudE1hbmFnZXJcbn0iLCIvL2ltcG9ydCB7IGV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlPVwiTXkgUHJvamVjdFwiLCBkZXNjcmlwdGlvbj1cIlwiKSA9PiB7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IGlucHV0VGl0bGUgPT4gdGl0bGUgPSBpbnB1dFRpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgX3Rhc2tzID0gW107XG5cbiAgICBjb25zdCBhZGRUYXNrID0gdGFzayA9PiB7XG4gICAgICAgIF90YXNrcy5wdXNoKHRhc2spO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gdGFzayA9PiB7XG4gICAgICAgIGlmIChfdGFza3MuaW5jbHVkZXModGFzaykpIHtcbiAgICAgICAgICAgIF90YXNrcy5zcGxpY2UoX3Rhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IF90YXNrcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcblxuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICByZW1vdmVUYXNrLFxuICAgICAgICBnZXRUYXNrc1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q29tcG9uZW50KCl7XG4gICAgcmV0dXJuIFByb2plY3QoKTtcbn0iLCJpbXBvcnQgcHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBldmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgUHJvamVjdE1hbmFnZXIgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgX3Byb2plY3RzID0gW107XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuICAgIGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2FkZE5ld1Byb2plY3QnLCBhZGRQcm9qZWN0KTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIF9wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChfcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0cy5zcGxpY2UoX3Byb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0TWFuYWdlckNvbXBvbmVudCgpe1xuICAgIHJldHVybiBQcm9qZWN0TWFuYWdlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpe1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0Q29tcG9uZW50KG5hbWUpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufTsiLCJjb25zdCBUYXNrID0gKHRpdGxlPVwiTXkgVGFza1wiLCBkZXNjcmlwdGlvbj1cIlwiLyogLCBkdWVEYXRlICovLCBwcmlvcml0eT0xKSA9PiB7XG5cbiAgICBsZXQgX2lzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBzZXRUaXRsZSA9IGlucHV0VGl0bGUgPT4gdGl0bGUgPSBpbnB1dFRpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb247XG4gICAgLy9jb25zdCBzZXREdWVEYXRlID0gaW5wdXREdWVEYXRlID0+IGR1ZURhdGUgPSBpbnB1dER1ZURhdGU7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5ID0+IHByaW9yaXR5ID0gaW5wdXRQcmlvcml0eTtcblxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKCkgPT4gX2lzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIC8vY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcbiAgICAgICAgLy9zZXREdWVEYXRlLFxuICAgICAgICBzZXRQcmlvcml0eSxcbiAgICAgICAgc2V0Q29tcGxldGUsXG5cbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICAvL2dldER1ZURhdGUsXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrQ29tcG9uZW50KCl7XG4gICAgcmV0dXJuIFRhc2soKTtcbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXJDb21wb25lbnQsIHtjcmVhdGVQcm9qZWN0fSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyXCI7XG4vL2ltcG9ydCBwcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdFwiO1xuaW1wb3J0IHRhc2tDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy90YXNrXCI7XG5pbXBvcnR7ZXZlbnRJdGVtIGFzIGV2ZW50LCBldmVudE1hbmFnZXIgYXMgZXZlbnRBZ2dyZWdhdG9yfSBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50TWFuYWdlclwiO1xuXG5cbmNvbnN0IGV2ZW50TWFuYWdlciA9IGV2ZW50QWdncmVnYXRvcigpO1xuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBwcm9qZWN0TWFuYWdlckNvbXBvbmVudCgpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kYXNoYm9hcmQtYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy9jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdGFzay1idXR0b25cIik7XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtaW5wdXRcIik7XG4gICAgLy9jb25zb2xlLmxvZyhuZXdQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgIGFkZFByb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlKTtcbn0pO1xuXG4vKiBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdENvbXBvbmVudChcIm15cHJvamVjdG5hbWVcIiwgXCJzb21lZGVzY1wiKTtcbmNvbnN0IHNvbWVUYXNrID0gdGFza0NvbXBvbmVudChcInNvbWUgdGFza1wiLCBcImkgZ290dGEgZG8gdGhpc1wiLCBcIm1lZGl1bVwiKTtcbm5ld1Byb2plY3QuYWRkVGFzayhzb21lVGFzayk7XG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KTsgKi9cblxuY29uc29sZS5sb2coZXZlbnRNYW5hZ2VyLnNob3dFdmVudHMoKSk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIC8vcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBldmVudE1hbmFnZXIucHVibGlzaCgnYWRkTmV3UHJvamVjdCcsIG5ld1Byb2plY3QpXG4gICAgY29uc29sZS5sb2coZXZlbnRNYW5hZ2VyKVxufVxuXG5leHBvcnQge1xuICAgIGV2ZW50TWFuYWdlclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=