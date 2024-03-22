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

/***/ "./src/modules/gameboard.ts":
/*!**********************************!*\
  !*** ./src/modules/gameboard.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar ship_1 = __importDefault(__webpack_require__(/*! ./ship */ \"./src/modules/ship.ts\"));\nvar Gameboard = /** @class */ (function () {\n    function Gameboard() {\n        this.board = Array.from({\n            length: 10\n        }, function () { return Array(10).fill(false); });\n    }\n    Gameboard.prototype.placeShip = function (length, origin) {\n        var battleship = new ship_1[\"default\"](length, origin);\n    };\n    Gameboard.prototype.receiveAttack = function (x, y) {\n        // X and Y from top left corner\n    };\n    return Gameboard;\n}());\nexports[\"default\"] = Gameboard;\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.ts?");

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar gameboard_1 = __importDefault(__webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.ts\"));\nvar playerBoard = new gameboard_1[\"default\"]();\nconsole.log(playerBoard.board);\nplayerBoard.receiveAttack(5, 2);\nconsole.log(playerBoard.board);\n\n\n//# sourceURL=webpack://battleship/./src/modules/index.ts?");

/***/ }),

/***/ "./src/modules/ship.ts":
/*!*****************************!*\
  !*** ./src/modules/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Ship = /** @class */ (function () {\n    function Ship(length, origin, \n    // x,y\n    rotated, \n    // TRUE = x axis, false = y axis\n    hits, sunk) {\n        if (origin === void 0) { origin = [0, 0]; }\n        if (rotated === void 0) { rotated = true; }\n        if (hits === void 0) { hits = 0; }\n        if (sunk === void 0) { sunk = false; }\n        this.length = length;\n        this.hits = hits;\n        this.sunk = sunk;\n        this.origin = origin;\n        this.rotated = rotated;\n    }\n    Ship.prototype.hit = function () {\n        this.hits += 1;\n        if (this.hits === this.length)\n            this.isSunk();\n    };\n    Ship.prototype.isSunk = function () {\n        this.sunk = true;\n    };\n    return Ship;\n}());\nexports[\"default\"] = Ship;\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/index.ts");
/******/ 	
/******/ })()
;