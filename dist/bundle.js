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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar ship_1 = __importDefault(__webpack_require__(/*! ./ship */ \"./src/modules/ship.ts\"));\nvar Gameboard = /** @class */ (function () {\n    function Gameboard() {\n        this.board = Array.from({ length: 10 }, function () { return Array(10).fill(false); });\n        this.ships = [];\n        // Fix the scope of these variables\n        this.missedAttacks = [];\n        this.hitAttacks = [];\n        this.attackedSpots = [];\n    }\n    Gameboard.prototype.placeShip = function (length, origin, // X, Y\n    xRotated) {\n        var newShip = new ship_1[\"default\"](length, origin, xRotated); // hits = 0 and not sunk by default\n        this.ships.push(newShip);\n        this.board[origin[1]][origin[0]] = true;\n        if (xRotated) {\n            for (var i = 0; i < length; i++) {\n                this.board[origin[1]][origin[0] + i] = true;\n            }\n        }\n        else {\n            for (var i = 0; i < length; i++) {\n                this.board[origin[1] + i][origin[0]] = true;\n            }\n        }\n        //return this.board[0];\n    };\n    Gameboard.prototype.receiveAttack = function (x, y) {\n        var attackCoordinates = JSON.stringify([x, y]);\n        if (this.attackedSpots.includes(attackCoordinates)) {\n            return null; // Cannot attack same spot twice\n        }\n        this.attackedSpots.push(attackCoordinates); // Keep track of attacked spots\n        //console.log(this.attackedSpots);\n        for (var i = 0; i < this.ships.length; i++) {\n            if (this.ships[i].isHit(x, y)) {\n                this.ships[i].hit();\n                this.hitAttacks.push([x, y]);\n                return true;\n            }\n        }\n        this.missedAttacks.push([x, y]);\n        return false;\n    };\n    return Gameboard;\n}());\nexports[\"default\"] = Gameboard;\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.ts?");

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar gameboard_1 = __importDefault(__webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.ts\"));\nvar player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./src/modules/player.ts\"));\n// Inputs needed from player\nvar name = \"Human\";\n// Ships input\nvar carrierOrigin = [2, 2];\nvar carrierIsOnX = true;\nvar battleshipOrigin = [0, 0];\nvar battleshipIsOnX = true;\nvar destroyerOrigin = [9, 4];\nvar destroyerIsOnX = false;\nvar submarineOrigin = [5, 5];\nvar submarineIsOnX = false;\nvar patrolOrigin = [8, 9];\nvar patrolIsOnX = true;\n// Create game loop\nvar p1board = new gameboard_1[\"default\"];\nvar p2board = new gameboard_1[\"default\"];\nvar p1 = new player_1[\"default\"](name, p1board);\nvar p2 = new player_1[\"default\"]('Computer', p2board);\n// Place ships with input\nvar p1carrier = p1.board.placeShip(5, carrierOrigin, carrierIsOnX);\nvar p1battleship = p1.board.placeShip(4, battleshipOrigin, battleshipIsOnX);\nvar p1destroyer = p1.board.placeShip(3, destroyerOrigin, destroyerIsOnX);\nvar p1submarine = p1.board.placeShip(3, submarineOrigin, submarineIsOnX);\nvar p1patrol = p1.board.placeShip(2, patrolOrigin, patrolIsOnX);\nconsole.log(p1.board);\n// add in randomizer for locations\nvar p2carrier = p2.board.placeShip(5, [0, 0], true);\nvar p2battleship = p2.board.placeShip(4, [0, 1], true);\nvar p2destroyer = p2.board.placeShip(3, [0, 2], true);\nvar p2submarine = p2.board.placeShip(3, [0, 3], true);\nvar p2patrol = p2.board.placeShip(2, [0, 4], true);\nconsole.log(p2.board);\n// MAIN GAME LOOP\nfor (var i = 0; i < 20; i++) {\n    // P1 attack on p2\n    var p1attack = p1.randomAttack();\n    p2.board.receiveAttack(p1attack[0], p1attack[1]);\n    console.log(p2);\n    // P2 attack on p1\n    var p2attack = p2.randomAttack();\n    p1.board.receiveAttack(p2attack[0], p2attack[1]);\n    console.log(p1);\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/index.ts?");

/***/ }),

/***/ "./src/modules/player.ts":
/*!*******************************!*\
  !*** ./src/modules/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Player = /** @class */ (function () {\n    function Player(name, board) {\n        this.board = board;\n        this.name = name;\n    }\n    Player.prototype.manualAttack = function (x, y) {\n        return [x, y];\n    };\n    // Change to separate list\n    Player.prototype.randomAttack = function () {\n        do {\n            var x = Math.floor(Math.random() * 10);\n            var y = Math.floor(Math.random() * 10);\n            var coordinates = \"\".concat(x, \",\").concat(y);\n            if (!this.board.attackedSpots.includes(coordinates)) {\n                this.board.attackedSpots.push(\"[\".concat(x, \",\").concat(y, \"]\"));\n                return [x, y];\n            }\n        } while (true);\n    };\n    return Player;\n}());\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.ts?");

/***/ }),

/***/ "./src/modules/ship.ts":
/*!*****************************!*\
  !*** ./src/modules/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Ship = /** @class */ (function () {\n    function Ship(length, origin, // X,Y\n    rotated, // TRUE = x axis, false = y axis\n    hits, sunk) {\n        if (origin === void 0) { origin = [0, 0]; }\n        if (rotated === void 0) { rotated = true; }\n        if (hits === void 0) { hits = 0; }\n        if (sunk === void 0) { sunk = false; }\n        this.length = length;\n        this.hits = hits;\n        this.sunk = sunk;\n        this.origin = origin;\n        this.rotated = rotated;\n    }\n    // For testing\n    Ship.prototype.getHits = function () {\n        return this.hits;\n    };\n    Ship.prototype.getSunkStatus = function () {\n        return this.sunk;\n    };\n    Ship.prototype.getLength = function () {\n        return this.length;\n    };\n    Ship.prototype.getOrigin = function () {\n        return this.origin;\n    };\n    // Need to make this a function that return true IF coords are held by ship\n    Ship.prototype.isHit = function (x, y) {\n        var _a = this.origin, shipX = _a[0], shipY = _a[1];\n        if (this.rotated) {\n            return y === shipY && x >= shipX && x < shipX + this.length;\n        }\n        else {\n            return x === shipX && y >= shipY && y < shipY + this.length;\n        }\n    };\n    Ship.prototype.hit = function () {\n        this.hits += 1;\n        //console.log(`Ship Length ${this.length} was hit!`);\n        if (this.hits === this.length) {\n            this.isSunk();\n            return true;\n        }\n        return false;\n    };\n    Ship.prototype.isSunk = function () {\n        this.sunk = true;\n    };\n    return Ship;\n}());\nexports[\"default\"] = Ship;\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.ts?");

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