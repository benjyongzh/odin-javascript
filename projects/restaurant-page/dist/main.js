/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerComponent)\n/* harmony export */ });\nfunction headerComponent(tabs) {\n  //body\n  const main = document.createElement('div');\n  main.classList.add(\"header\");\n  //title\n  const title = document.createElement('div');\n  title.classList.add(\"header-title\");\n  title.textContent = \"I am the header. Look at me.\";\n  main.appendChild(title);\n  //tab button area\n  const ul = document.createElement('ul');\n  ul.classList.add(\"tabs\");\n  main.appendChild(ul);\n  //tabs\n  for (let i = 0; i < tabs.length; i++){\n    const tab = document.createElement('li');\n    tab.classList.add(\"tab\");\n    const tabButton = document.createElement('button');\n    tabButton.classList.add(\"tabButton\");\n    tabButton.textContent = tabs[i];\n    tab.appendChild(tabButton);\n    ul.appendChild(tab);\n    if (i == 0) tab.classList.add(\"tab-selected\");\n  }\n\n  return main;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/menu-content.js":
/*!****************************************!*\
  !*** ./src/components/menu-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuContentComponent)\n/* harmony export */ });\n/* harmony import */ var _menu_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.js */ \"./src/components/menu-item.js\");\n\n\nfunction menuContentComponent() {\n    const main = document.createElement('div');\n    main.classList.add(\"menu-content\");\n\n    main.appendChild((0,_menu_item_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  \n    return main;\n  }\n\n//# sourceURL=webpack://restaurant-page/./src/components/menu-content.js?");

/***/ }),

/***/ "./src/components/menu-item.js":
/*!*************************************!*\
  !*** ./src/components/menu-item.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuItemComponent)\n/* harmony export */ });\nfunction menuItemComponent() {\n  const main = document.createElement('div');\n  main.classList.add(\"menu-item\");\n  //img\n\n  //title\n  const title = document.createElement('div');\n  title.classList.add(\"menu-item-title\");\n  title.textContent = \"Spaghetti\";\n  main.appendChild(title);\n  //text\n  const text = document.createElement('div');\n  text.classList.add(\"menu-item-text\");\n  text.textContent = \"Some tasty shit right here.\";\n  main.appendChild(text);\n\n  return main;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/menu-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_menu_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu-content */ \"./src/components/menu-content.js\");\n\n\n\n/* function component() {\n    const element = document.createElement('.content');\n  \n    // Lodash, currently included via a script, is required for this line to work\n    element.textContent = \"Hello this is from index.js\";\n  \n    return element;\n  } */\n\nconst tabNames = ['Home', 'Contact', 'About'];\n\ndocument.body.appendChild((0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabNames));\ndocument.body.appendChild((0,_components_menu_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;