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

eval("var Ship = /** @class */ (function () {\n    function Ship(length, hits, sunk) {\n        if (hits === void 0) { hits = 0; }\n        if (sunk === void 0) { sunk = false; }\n        this.length = length;\n        this.hits = hits;\n        this.sunk = sunk;\n    }\n    Ship.prototype.hit = function () {\n        this.hits += 1;\n        if (this.hits === this.length)\n            this.isSunk();\n    };\n    Ship.prototype.isSunk = function () {\n        this.sunk = true;\n    };\n    return Ship;\n}());\nvar carrier = new Ship(5);\nconsole.log(carrier);\nvar Gameboard = /** @class */ (function () {\n    function Gameboard() {\n    }\n    return Gameboard;\n}());\n\n\n//# sourceURL=webpack://battleship/./src/index.ts?");

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