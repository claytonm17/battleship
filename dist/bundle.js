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
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Gameboard = /** @class */ (function () {\n    function Gameboard() {\n        this.board = Array.from({ length: 10 }, function () { return Array(10).fill(0); });\n        this.ships = [];\n    }\n    Gameboard.prototype.placeShip = function (ship) {\n        if (ship.direction === \"V\") {\n            for (var i = 0; i < ship.length; i++) {\n                // Add check to confirm no other ship in spot\n                if (this.board[ship.origin[1] + i][ship.origin[0]] !== 0) {\n                    return null;\n                }\n                this.board[ship.origin[1] + i][ship.origin[0]] = ship.id;\n            }\n            this.ships.push(ship);\n        }\n        else if (ship.direction === \"H\") {\n            for (var i = 0; i < ship.length; i++) {\n                if (this.board[ship.origin[1] + i][ship.origin[0]] !== 0) {\n                    return null;\n                }\n                this.board[ship.origin[1]][ship.origin[0] + i] = ship.id;\n            }\n            this.ships.push(ship);\n        }\n    };\n    Gameboard.prototype.receiveAttack = function (coordinates) {\n        var ATTACKED = -1;\n        var EMPTY = 0;\n        // Check if spot is not occupied\n        if (this.board[coordinates[1]][coordinates[0]] === ATTACKED) {\n            return null; // cannot attack same spot twice\n        }\n        else if (this.board[coordinates[1]][coordinates[0]] !== EMPTY) {\n            // Hit a ship\n            // TAKE HEALTH FROM SHIP HIT\n            for (var i = 0; i < this.ships.length; i++) {\n                if (this.ships[i].id === this.board[coordinates[1]][coordinates[0]]) {\n                    this.ships[i].health -= 1;\n                }\n            }\n            this.board[coordinates[1]][coordinates[0]] = ATTACKED;\n            return true;\n        }\n        else { // Miss\n            this.board[coordinates[1]][coordinates[0]] = ATTACKED;\n            return false;\n        }\n    };\n    Gameboard.prototype.checkShipsSunk = function () {\n        var count = 0;\n        for (var i = 0; i < this.ships.length; i++) {\n            if (this.ships[i].isSunk()) {\n                count += 1;\n            }\n        }\n        return (count === this.ships.length);\n    };\n    return Gameboard;\n}());\nexports[\"default\"] = Gameboard;\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.ts?");

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar player_1 = __importDefault(__webpack_require__(/*! ../modules/player */ \"./src/modules/player.ts\"));\nvar humanPlayer = new player_1[\"default\"](\"Charlie\");\nvar computerPlayer = new player_1[\"default\"](\"Computer\", true);\n\n\n//# sourceURL=webpack://battleship/./src/modules/index.ts?");

/***/ }),

/***/ "./src/modules/player.ts":
/*!*******************************!*\
  !*** ./src/modules/player.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar ship_1 = __importDefault(__webpack_require__(/*! ../modules/ship */ \"./src/modules/ship.ts\"));\nvar gameboard_1 = __importDefault(__webpack_require__(/*! ../modules/gameboard */ \"./src/modules/gameboard.ts\"));\nvar Player = /** @class */ (function () {\n    function Player(name, isComputer) {\n        this.name = name;\n        this.isComputer = isComputer || false;\n        this.gameboard = new gameboard_1[\"default\"]();\n    }\n    Player.prototype.attack = function (coordinates, target) {\n        target.gameboard.receiveAttack(coordinates);\n        // Add condition if recieve null to redo\n    };\n    Player.prototype.createCarrier = function (origin, direction) {\n        var ship = new ship_1[\"default\"](1, 5, origin, direction);\n        if (this.gameboard.placeShip(ship) === null) {\n            // loop until no longer an issue?\n        }\n        else {\n            this.gameboard.placeShip(ship);\n        }\n    };\n    Player.prototype.createBattleship = function (origin, direction) {\n        var ship = new ship_1[\"default\"](2, 4, origin, direction);\n        if (this.gameboard.placeShip(ship) === null) {\n            // loop until no longer an issue?\n        }\n        else {\n            this.gameboard.placeShip(ship);\n        }\n    };\n    Player.prototype.createSubmarine = function (origin, direction) {\n        var ship = new ship_1[\"default\"](3, 3, origin, direction);\n        if (this.gameboard.placeShip(ship) === null) {\n            // loop until no longer an issue?\n        }\n        else {\n            this.gameboard.placeShip(ship);\n        }\n    };\n    Player.prototype.createDestroyer = function (origin, direction) {\n        var ship = new ship_1[\"default\"](4, 3, origin, direction);\n        if (this.gameboard.placeShip(ship) === null) {\n            // loop until no longer an issue?\n        }\n        else {\n            this.gameboard.placeShip(ship);\n        }\n    };\n    Player.prototype.createCruiser = function (origin, direction) {\n        var ship = new ship_1[\"default\"](5, 2, origin, direction);\n        if (this.gameboard.placeShip(ship) === null) {\n            // loop until no longer an issue?\n        }\n        else {\n            this.gameboard.placeShip(ship);\n        }\n    };\n    return Player;\n}());\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.ts?");

/***/ }),

/***/ "./src/modules/ship.ts":
/*!*****************************!*\
  !*** ./src/modules/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Ship = /** @class */ (function () {\n    function Ship(id, length, origin, // Will always be going top to bottom or left to right\n    direction, sunk) {\n        if (direction === void 0) { direction = \"V\"; }\n        if (sunk === void 0) { sunk = false; }\n        this.id = id;\n        this.length = length;\n        this.health = length;\n        this.origin = origin;\n        this.direction = direction;\n        this.sunk = sunk;\n    }\n    // Decreases the health of the ship\n    Ship.prototype.hit = function () {\n        this.health -= 1;\n    };\n    Ship.prototype.isSunk = function () {\n        if (this.health === 0) {\n            this.sunk = true;\n            return this.sunk;\n        }\n        return this.sunk;\n    };\n    return Ship;\n}());\nexports[\"default\"] = Ship;\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.ts?");

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