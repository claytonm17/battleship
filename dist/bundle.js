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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/styles/styles.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/styles/styles.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  background-color: #1F2421;\n  color: #fefae0;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.title {\n  font-family: \"Black Ops One\", system-ui;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 4em;\n  background-color: #333;\n  border: solid 1px #fefae0;\n  padding: 0.5em;\n  display: flex;\n  justify-content: center;\n  margin: 1em;\n  filter: drop-shadow(15px 15px black);\n  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n  background-color: #131313;\n  background-size: 20px 20px;\n}\n\n.form-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.form-container h2 {\n  margin-bottom: 1em;\n  font-weight: 700;\n}\n.form-container .player-name-form {\n  filter: drop-shadow(5px 5px black);\n  border: solid 1px #fefae0;\n  margin-bottom: 2em;\n}\n.form-container .player-name-form input {\n  font-size: 1.5em;\n  padding: 0.5em;\n  background-color: #131313;\n  color: #fefae0;\n}\n\n.game-area {\n  display: flex;\n  justify-content: space-around;\n}\n.game-area .player-title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.game-area .player-title h3 {\n  color: #fefae0;\n  font-size: 2em;\n  filter: drop-shadow(5px 5px black);\n  margin-bottom: 1em;\n}\n\n.grid {\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n.grid div {\n  padding: 1.5em;\n  border: 1px #fefae0 solid;\n}\n.grid .cell:hover {\n  cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/modules/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/modules/styles/styles.scss":
/*!****************************************!*\
  !*** ./src/modules/styles/styles.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/modules/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/modules/DOM.ts":
/*!****************************!*\
  !*** ./src/modules/DOM.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar DOM = {\n    appendComponent: function (component) {\n        var body = document.querySelector('body');\n        body.appendChild(component);\n    },\n    createH1: function (text, className) {\n        var h1 = document.createElement('h1');\n        h1.textContent = text;\n        h1.className = className;\n        return h1;\n    },\n    nameForm: function (title) {\n        var container = document.createElement('div');\n        container.className = \"form-container\";\n        var h2 = document.createElement('h2');\n        h2.textContent = title;\n        container.appendChild(h2);\n        var form = document.createElement('form');\n        form.className = \"player-name-form\";\n        //form.action = \"get\";\n        container.appendChild(form);\n        var textInput = document.createElement('input');\n        textInput.type = \"text\";\n        textInput.placeholder = \"Player name\";\n        textInput.id = \"name\";\n        form.appendChild(textInput);\n        var submitInput = document.createElement('input');\n        submitInput.type = \"submit\";\n        submitInput.className = \"submit-button\";\n        form.appendChild(submitInput);\n        return container;\n    },\n    createGrid: function (size, name) {\n        var grid = document.createElement('div');\n        grid.className = \"grid\";\n        grid.id = name; // player name\n        grid.style.display = \"grid\";\n        grid.style.gridTemplateColumns = \"repeat(\".concat(size, \", 1fr)\");\n        grid.style.gridTemplateRows = \"repeat(\".concat(size, \", 1fr)\"); // Messy but will allow for future adaptability\n        for (var i = 0; i < size * size; i++) {\n            var cell = document.createElement('div');\n            // Puts in same naming convention used in Gameboard class\n            var cellRow = Math.floor(i / 10);\n            var cellCol = i % 10;\n            cell.id = \"\".concat(cellRow.toString(), \"-\").concat(cellCol.toString());\n            cell.className = \"cell\";\n            grid.appendChild(cell);\n        }\n        return grid;\n    },\n    gameArea: function (size, player1, player2) {\n        var container = document.createElement('div');\n        container.className = \"game-area\";\n        container.style.display = \"flex\";\n        var p1Container = document.createElement('div');\n        p1Container.className = \"player-title\";\n        var p1Heading = document.createElement('h3');\n        p1Heading.textContent = player1;\n        p1Container.appendChild(p1Heading);\n        var p2Container = document.createElement('div');\n        p2Container.className = \"player-title\";\n        var p2Heading = document.createElement('h3');\n        p2Heading.textContent = player2;\n        p2Container.appendChild(p2Heading);\n        p1Container.appendChild(DOM.createGrid(size, player1));\n        p2Container.appendChild(DOM.createGrid(size, player2));\n        container.appendChild(p1Container);\n        container.appendChild(p2Container);\n        return container;\n    },\n    gridHit: function (spot, name) {\n        var grid = document.querySelector(\"#\".concat(name));\n    }\n};\nexports[\"default\"] = DOM;\n\n\n//# sourceURL=webpack://battleship/./src/modules/DOM.ts?");

/***/ }),

/***/ "./src/modules/eventListeners.ts":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./src/modules/player.ts\"));\nvar eventListeners = {\n    nameFormListener: function () {\n        return new Promise(function (resolve, reject) {\n            var textInput = document.querySelector(\"#name\");\n            var form = document.querySelector(\".player-name-form\");\n            form.addEventListener('submit', function (event) {\n                event.preventDefault();\n                var playerName = textInput.value;\n                var humanPlayer = new player_1[\"default\"](playerName);\n                // Pass on humanPlayer to start game loop\n                console.log(\"Created player for \".concat(playerName));\n                resolve(humanPlayer);\n            });\n        });\n    },\n    placeShipBoardListener: function () {\n        // Will accept origin to click -> place ship on that spot (V or H)\n        /*return new Promise((resolve, reject) => {\n            return\n        })*/\n        var grid = document.querySelector(\".grid\");\n        var cells = grid.querySelectorAll(\".cell\");\n        cells.forEach(function (cell) {\n            cell.addEventListener('click', function (event) {\n                event.preventDefault();\n                var cellID = cell.id;\n                console.log(cellID);\n            });\n        });\n    }\n};\nexports[\"default\"] = eventListeners;\n\n\n//# sourceURL=webpack://battleship/./src/modules/eventListeners.ts?");

/***/ }),

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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\n__webpack_require__(/*! ./styles/styles.scss */ \"./src/modules/styles/styles.scss\");\nvar DOM_1 = __importDefault(__webpack_require__(/*! ./DOM */ \"./src/modules/DOM.ts\")); // Static DOM only\nvar eventListeners_1 = __importDefault(__webpack_require__(/*! ./eventListeners */ \"./src/modules/eventListeners.ts\")); // Interactive \nvar title = DOM_1[\"default\"].createH1('Battleship', 'title');\nvar nameForm = DOM_1[\"default\"].nameForm(\"Enter your name!\");\nvar grids = DOM_1[\"default\"].gameArea(10, \"player\", \"computer\");\nDOM_1[\"default\"].appendComponent(title);\nDOM_1[\"default\"].appendComponent(nameForm);\nDOM_1[\"default\"].appendComponent(grids);\neventListeners_1[\"default\"].placeShipBoardListener();\neventListeners_1[\"default\"].nameFormListener().then(function (humanPlayer) {\n    console.log(humanPlayer);\n    // Game loop now. Add ships etc. Create computer to play against\n})[\"catch\"](function (error) {\n    console.log(\"Error: \".concat(error));\n});\n/*\nlet attackedSpotsAI = [];\nconst computerPlayerAI = {\n    randomAttack: () => {\n        const randomRow = Math.floor(Math.random() * 10);\n        const randomCol = Math.floor(Math.random() * 10);\n\n        if (attackedSpotsAI.includes([randomRow, randomCol])) {\n            console.log(`Already attacked ${randomRow},${randomCol} --list`)\n            computerPlayerAI.randomAttack()\n        } else {\n            computerPlayer.attack([randomRow, randomCol], humanPlayer);\n            attackedSpotsAI.push([randomRow, randomCol]);\n            console.log(`Successful attack ${randomRow},${randomCol}`);\n        }\n    }\n}\n\nfor (let i = 0; i < 100; i++) {\n    computerPlayerAI.randomAttack();\n}\n*/ \n\n\n//# sourceURL=webpack://battleship/./src/modules/index.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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