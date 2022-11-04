/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dashboardComponent)
/* harmony export */ });
const Dashboard = () => {
    
    const _projects = [];

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

function dashboardComponent(){
    return Dashboard;
}

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
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard */ "./src/components/dashboard.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project */ "./src/components/project.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");




(function () {

    const dashboard = (0,_components_dashboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

    //dashboard publish adding and removal of projects

    const newProject = (0,_components_project__WEBPACK_IMPORTED_MODULE_1__["default"])("myprojectname", "somedesc");
    const someTask = (0,_components_task__WEBPACK_IMPORTED_MODULE_2__["default"])("some task", "i gotta do this", "medium");
    newProject.addTask(someTask);
    console.log(newProject);

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDSjtBQUNOOztBQUU5Qzs7QUFFQSxzQkFBc0IsaUVBQWtCOztBQUV4Qzs7QUFFQSx1QkFBdUIsK0RBQWdCO0FBQ3ZDLHFCQUFxQiw0REFBYTtBQUNsQztBQUNBOztBQUVBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBfcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgX3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKF9wcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KSkge1xuICAgICAgICAgICAgX3Byb2plY3RzLnNwbGljZShfcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhc2hib2FyZENvbXBvbmVudCgpe1xuICAgIHJldHVybiBEYXNoYm9hcmQ7XG59IiwiY29uc3QgUHJvamVjdCA9ICh0aXRsZT1cIk15IFByb2plY3RcIiwgZGVzY3JpcHRpb249XCJcIikgPT4ge1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBpbnB1dFRpdGxlID0+IHRpdGxlID0gaW5wdXRUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IF90YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBfdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICBpZiAoX3Rhc2tzLmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICAgICAgICBfdGFza3Muc3BsaWNlKF90YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBfdGFza3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG5cbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0VGFza3NcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENvbXBvbmVudCgpe1xuICAgIHJldHVybiBQcm9qZWN0KCk7XG59IiwiY29uc3QgVGFzayA9ICh0aXRsZT1cIk15IFRhc2tcIiwgZGVzY3JpcHRpb249XCJcIi8qICwgZHVlRGF0ZSAqLywgcHJpb3JpdHk9MSkgPT4ge1xuXG4gICAgbGV0IF9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBpbnB1dFRpdGxlID0+IHRpdGxlID0gaW5wdXRUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uO1xuICAgIC8vY29uc3Qgc2V0RHVlRGF0ZSA9IGlucHV0RHVlRGF0ZSA9PiBkdWVEYXRlID0gaW5wdXREdWVEYXRlO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gaW5wdXRQcmlvcml0eSA9PiBwcmlvcml0eSA9IGlucHV0UHJpb3JpdHk7XG5cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9ICgpID0+IF9pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICAvL2NvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIC8vc2V0RHVlRGF0ZSxcbiAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIHNldENvbXBsZXRlLFxuXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgLy9nZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0NvbXBvbmVudCgpe1xuICAgIHJldHVybiBUYXNrKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGFzaGJvYXJkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZGFzaGJvYXJkXCI7XG5pbXBvcnQgcHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RcIjtcbmltcG9ydCB0YXNrQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza1wiO1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZGFzaGJvYXJkID0gZGFzaGJvYXJkQ29tcG9uZW50KCk7XG5cbiAgICAvL2Rhc2hib2FyZCBwdWJsaXNoIGFkZGluZyBhbmQgcmVtb3ZhbCBvZiBwcm9qZWN0c1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RDb21wb25lbnQoXCJteXByb2plY3RuYW1lXCIsIFwic29tZWRlc2NcIik7XG4gICAgY29uc3Qgc29tZVRhc2sgPSB0YXNrQ29tcG9uZW50KFwic29tZSB0YXNrXCIsIFwiaSBnb3R0YSBkbyB0aGlzXCIsIFwibWVkaXVtXCIpO1xuICAgIG5ld1Byb2plY3QuYWRkVGFzayhzb21lVGFzayk7XG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9