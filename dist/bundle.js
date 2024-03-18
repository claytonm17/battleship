/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var Ship = /** @class */ (function () {\n    function Ship() {\n    }\n    Ship.prototype.hit = function () {\n        this.hits += 1;\n        if (this.hits === this.length)\n            this.isSunk();\n    };\n    Ship.prototype.isSunk = function () {\n        this.sunk = true;\n    };\n    return Ship;\n}());\nvar carrier = new Ship;\ncarrier.length = 5;\ncarrier.hits = 0;\ncarrier.sunk = false;\nconsole.log(carrier);\ncarrier.hit();\ncarrier.hit();\ncarrier.hit();\ncarrier.hit();\nconsole.log(carrier);\ncarrier.hit();\nconsole.log(carrier);\n\n\n//# sourceURL=webpack://battleship/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;