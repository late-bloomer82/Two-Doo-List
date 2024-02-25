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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-VariableFont_wght.ttf */ \"./src/fonts/Montserrat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Montserrat';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\nhtml,body{\n    height: 100%;\n}\n\nbody{\n    font-family: 'Montserrat', sans-serif;\n    margin: 0;\n    background: #e6ebf4\n}\n#home,#today,#week{\n    cursor: pointer;\n    transition: background-color 0.3s ease ;\n    border-radius: 5px;\n}\n\n#home:hover,#today:hover,#week:hover{\n    background-color: #e6ebf4\n}\n\n\n.main{\n    \n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 9fr;\n    grid-template-areas:\n    \"header header\"\n    \"sidebar main-section\";\n    \n   \n}\n\nheader{\n    display: flex;\n    background: #f0f5fe;\n    border-bottom: 1px solid #bdc2cb;\n    grid-area: header;\n    align-items: center;\n    \n}\n\n.sidebar{\n    background:#f0f5fe;\n   \n    grid-area: sidebar;\n    padding-left: 30px;\n    padding-top:10px;\n    padding-right: 30px\n    \n}\n\nul{\n    padding: 0;\n}\n\nli{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n\n.sidebar-menu{\n    padding: 0;\n    border-bottom: 1px solid #bdc2cb;\n    \n}\n\n.main-section{\n    grid-area: main-section;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main-section-container{\n    margin-top: 50px;\n}\n\n.main-section-header{\n    margin-bottom: 50px;\n    width: 800px;\n    \n}\n\n.noTasks{\n    display: flex;\n    flex-direction: column;\n    background-color: #f0f5fe ;\n    width: 800px;\n    height: 100px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n}\n\n\n\n.headingSection{\n    display: flex;\n    justify-content: space-between;\n}\n\n.informationIconSection{\n    display: flex;\n    gap: 10px;\n}\n\n.taskHeader{\n    margin-top: 0;\n    display: flex;\n    gap: 10px;\n}\n.project-heading{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    \n}\n\n\n#projectButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 0.3s ease;\n    cursor: pointer;\n}\n\n#projectButton:hover{\n    background-color: #f6d7b0;\n}\n\n.project-list{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#closeFormButton{\n    display: flex;\n    margin-left: 330px;\n    justify-content: center;\n    align-items: center;\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n}\n\n#addTaskForm{\n   display: flex;\n\n   flex-direction: column;\n   align-items: start;\n}\n\n#taskModal{\n    border: #bdc2cb;\n    width: 350px;\n    height: 550px;\n    border-radius: 20px;\n    padding: 20px;\n    overflow: hidden;\n    \n}\n\n.formButtonContainer{\n    justify-content: flex-end;\n    display: flex;\n    margin-top: 20px;\n    gap: 10px;\n    width: 100%;\n}\n\n#homePanel{\n    display: none;\n}\n\n#todayPanel{\n    display: none;\n}\n\n#weekPanel{\n    display: none;\n}\n\n.projectItem{\n    transition: background-color 0.3 ease;\n    cursor: pointer;\n    border-radius: 8px;\n    padding: 10px;\n}\n\n.projectItem:hover{\n    background-color: #e6ebf4;\n    \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://two-doo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://two-doo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://two-doo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://two-doo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg":
/*!**********************************************************************************************************!*\
  !*** ./dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg\");\n\n//# sourceURL=webpack://two-doo-list/./dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg?");

/***/ }),

/***/ "./dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg":
/*!*********************************************************************************************************!*\
  !*** ./dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg\");\n\n//# sourceURL=webpack://two-doo-list/./dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg?");

/***/ }),

/***/ "./dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg":
/*!************************************************************************************************!*\
  !*** ./dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg\");\n\n//# sourceURL=webpack://two-doo-list/./dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg?");

/***/ }),

/***/ "./dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg":
/*!***************************************************************************************************!*\
  !*** ./dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg\");\n\n//# sourceURL=webpack://two-doo-list/./dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg?");

/***/ }),

/***/ "./src/images/check-circle.svg":
/*!*************************************!*\
  !*** ./src/images/check-circle.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/check-circle.87236881e972b2c9c64f04fb46df7a20.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/check-circle.svg?");

/***/ }),

/***/ "./src/images/dots-horizontal.svg":
/*!****************************************!*\
  !*** ./src/images/dots-horizontal.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/dots-horizontal.58f60fa43206f2aa6be1668a7aadee3d.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/dots-horizontal.svg?");

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/plus.3cffe9a515498593b8721ae7cc7955b0.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/plus.svg?");

/***/ }),

/***/ "./src/images/priorityIconDarkRed.svg":
/*!********************************************!*\
  !*** ./src/images/priorityIconDarkRed.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/priorityIconDarkRed.52ad9425c88c799a3930cfabe3186d9a.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/priorityIconDarkRed.svg?");

/***/ }),

/***/ "./src/images/priorityIconGreen.svg":
/*!******************************************!*\
  !*** ./src/images/priorityIconGreen.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/priorityIconGreen.583f523d70e88cc4c93b4a5eb36e127c.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/priorityIconGreen.svg?");

/***/ }),

/***/ "./src/images/priorityIconRed.svg":
/*!****************************************!*\
  !*** ./src/images/priorityIconRed.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/priorityIconRed.004adc15d36b23fff983b998c5cdeea5.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/priorityIconRed.svg?");

/***/ }),

/***/ "./src/images/priorityIconYellow.svg":
/*!*******************************************!*\
  !*** ./src/images/priorityIconYellow.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/priorityIconYellow.c963226dcb7ec9ee0c0205ca0c075b0d.svg\");\n\n//# sourceURL=webpack://two-doo-list/./src/images/priorityIconYellow.svg?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://two-doo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://two-doo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://two-doo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://two-doo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://two-doo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://two-doo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://two-doo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/compareDates.js":
/*!*****************************!*\
  !*** ./src/compareDates.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskToRespectiveArray: () => (/* binding */ addTaskToRespectiveArray)\n/* harmony export */ });\n/* harmony import */ var _getCurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentDate */ \"./src/getCurrentDate.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/add.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/isWithinInterval.mjs\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week */ \"./src/week.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//GetDate\n\nfunction convertDateToString(){\n    let currentStringDate = (0,_getCurrentDate__WEBPACK_IMPORTED_MODULE_0__.currentDateToString)();\n    return currentStringDate;\n}\n\n\n\nfunction getWeekInterval(){\n\n\nconst currentDate = new Date();\n\nconst SevenDaysAfterCurrentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.add)(currentDate,{days:7});\n\nconst taskDueDate = new Date(_dom__WEBPACK_IMPORTED_MODULE_1__.toDo.dueDate)\n\nlet Week = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isWithinInterval)(taskDueDate, {start: currentDate, end: SevenDaysAfterCurrentDate });\nreturn Week;\n}\n\nfunction addTaskToRespectiveArray(){\n     \n    const currentStringDate = convertDateToString()\n    const getWeek = getWeekInterval()\n\n    //Home\n    if(true){\n        _home__WEBPACK_IMPORTED_MODULE_3__.homeTasks.push(_dom__WEBPACK_IMPORTED_MODULE_1__.toDo)\n        \n    }\n    \n    //Today\n    if(_dom__WEBPACK_IMPORTED_MODULE_1__.toDo.dueDate == currentStringDate){\n        _today__WEBPACK_IMPORTED_MODULE_4__.todayTasks.push(_dom__WEBPACK_IMPORTED_MODULE_1__.toDo)\n    }\n    //Week\n    if(getWeek){\n       \n       _week__WEBPACK_IMPORTED_MODULE_5__.weekTasks.push(_dom__WEBPACK_IMPORTED_MODULE_1__.toDo);\n    }\n    \n \n }\n\n\n\n\n \n\n//# sourceURL=webpack://two-doo-list/./src/compareDates.js?");

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n\n\n\n\n\n\nfunction displayProject(projectName) {\n    \n    //Clear Content\n    _toDo__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML = '';\n\n    for (let i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_0__.projects[projectName].length; i++) {\n        const taskObject = _dom__WEBPACK_IMPORTED_MODULE_0__.projects[projectName][i];\n        const taskTitle = taskObject.title;\n        const taskDescription = taskObject.description;\n        const taskDueDate = taskObject.dueDate;\n        const taskPriority = taskObject.priority;\n        (0,_toDo__WEBPACK_IMPORTED_MODULE_1__.addContent)(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);\n\n       \n        \n    }\n     \n   \n}\n\n\n//# sourceURL=webpack://two-doo-list/./src/displayProject.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskbutton: () => (/* binding */ addTaskbutton),\n/* harmony export */   mainPageContent: () => (/* binding */ mainPageContent),\n/* harmony export */   mainSection: () => (/* binding */ mainSection),\n/* harmony export */   mainSectionContainer: () => (/* binding */ mainSectionContainer),\n/* harmony export */   projectItems: () => (/* binding */ projectItems),\n/* harmony export */   projectList: () => (/* binding */ projectList),\n/* harmony export */   projectName: () => (/* binding */ projectName),\n/* harmony export */   projectTitle: () => (/* binding */ projectTitle),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   taskModal: () => (/* binding */ taskModal),\n/* harmony export */   toDo: () => (/* binding */ toDo),\n/* harmony export */   value: () => (/* binding */ value)\n/* harmony export */ });\n/* harmony import */ var _dist_images_webIcon_a68fad7b57e4f4a503508e76f0d1b7ff_a68fad7b57e4f4a503508e76f0d1b7ff_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg */ \"./dist/images/webIcon.a68fad7b57e4f4a503508e76f0d1b7ff.a68fad7b57e4f4a503508e76f0d1b7ff.jpg\");\n/* harmony import */ var _dist_images_home_8e576291288b2ca88c8f015f874b4670_8e576291288b2ca88c8f015f874b4670_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg */ \"./dist/images/home.8e576291288b2ca88c8f015f874b4670.8e576291288b2ca88c8f015f874b4670.svg\");\n/* harmony import */ var _dist_images_calendar_today_8d058f5ee3f52cd80cdb39b07c281901_8d058f5ee3f52cd80cdb39b07c281901_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg */ \"./dist/images/calendar-today.8d058f5ee3f52cd80cdb39b07c281901.8d058f5ee3f52cd80cdb39b07c281901.svg\");\n/* harmony import */ var _dist_images_calendar_week_58f9738a120204d45b7f7fe1b37e4fbd_58f9738a120204d45b7f7fe1b37e4fbd_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg */ \"./dist/images/calendar-week.58f9738a120204d45b7f7fe1b37e4fbd.58f9738a120204d45b7f7fe1b37e4fbd.svg\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./week */ \"./src/week.js\");\n/* harmony import */ var _compareDates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compareDates */ \"./src/compareDates.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n//import images\n\n\n\n\n\n\n//import object function\n\n\n//import function\n\n\n\n\n\n\n\n\n//Export functions\n\n\n//import stuff\n\n\n\n\n\n//Global variables for reusability\n\n\nlet value\nlet toDo;\nlet projectName;\n\n\n    \n//Select necessary elements in global scope\nconst projectButton = document.getElementById('projectButton');\nconst projectList = document.querySelector('.project-list');\nconst projectContainer = document.querySelector('.project-container');\nconst mainSectionHeader = document.querySelector('.main-section-header');\nconst mainSection = document.querySelector('.main-section');\nconst projectTitle = document.getElementById('project-title');\nconst taskModal = document.getElementById('taskModal');\nconst formCancelButton = document.getElementById('formCancelButton');\nconst formAddButton = document.getElementById('formAddButton');\nconst mainSectionContainer = document.querySelector('.main-section-container')\n\n\nconst addTaskbutton = document.createElement('button')\n\n\n// Define an object to store tasks for each project\nlet projects = (0,_storage__WEBPACK_IMPORTED_MODULE_10__.lookForProjects)() || {}; \n\n\n\nlet projectItems = (0,_storage__WEBPACK_IMPORTED_MODULE_10__.retrieveProjectLi)() || [];\nconsole.log(projectItems)\n    \nfunction mainPageContent(){\n    \n    //Create necessary elements in global function scope\n    const form = document.createElement('form');\n    const input = document.createElement('input');\n    const cancelButton = document.createElement('button');\n    const addButton = document.createElement('button');\n    const buttonContainer = document.createElement('div');\n   \n\n    //Header Section\n\n    const header = document.querySelector('header');\n    const websiteLogo = document.createElement('img');\n    websiteLogo.src = _dist_images_webIcon_a68fad7b57e4f4a503508e76f0d1b7ff_a68fad7b57e4f4a503508e76f0d1b7ff_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    websiteLogo.style.width = '80px';\n    websiteLogo.style.height = '80px';\n    websiteLogo.style.borderRadius = '20px'\n    header.appendChild(websiteLogo)\n    header.style.display = 'flex';\n    header.style.justifyContent = 'center';\n\n\n    //Sidebar\n\n    //Select necessary elements\n    const home = document.getElementById('home');\n    const today = document.getElementById('today');\n    const week = document.getElementById('week');\n\n    //Display calendar panels\n    home.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_5__.displayHomeArray )\n    today.addEventListener('click', _today__WEBPACK_IMPORTED_MODULE_6__.displayTodayArray)\n    week.addEventListener('click', _week__WEBPACK_IMPORTED_MODULE_7__.displayWeekArray)\n    \n    //create images\n    const homeImg = document.createElement('img');\n    const todayImg = document.createElement('img');\n    const weekImg = document.createElement('img');\n\n    homeImg.src = _dist_images_home_8e576291288b2ca88c8f015f874b4670_8e576291288b2ca88c8f015f874b4670_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    todayImg.src = _dist_images_calendar_today_8d058f5ee3f52cd80cdb39b07c281901_8d058f5ee3f52cd80cdb39b07c281901_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    weekImg.src = _dist_images_calendar_week_58f9738a120204d45b7f7fe1b37e4fbd_58f9738a120204d45b7f7fe1b37e4fbd_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    \n    //style imgs\n    homeImg.style.width = '40px';\n    homeImg.style.height = '40px';\n    \n\n    todayImg.style.width = '40px';\n    todayImg.style.height = '40px';\n  \n\n    weekImg.style.width = '40px';\n    weekImg.style.height = '40px';\n  \n   \n    //create h elements\n    const homeHeading = document.createElement('h3');\n    const todayHeading = document.createElement('h3');\n    const weekHeading = document.createElement('h3');\n\n    homeHeading.textContent = 'Home';\n    todayHeading.textContent = 'Today';\n    weekHeading.textContent = 'Week';\n\n    //Append everythin\n    home.appendChild(homeImg);\n    home.appendChild(homeHeading);\n    home.style.display = 'flex';\n    home.style.cursor = 'pointer';\n\n    today.appendChild(todayImg);\n    today.appendChild(todayHeading);\n    today.style.display = 'flex';\n    today.style.cursor = 'pointer';\n\n\n    week.appendChild(weekImg);\n    week.appendChild(weekHeading);\n    week.style.display = 'flex';\n    week.style.cursor = 'pointer';\n\n\n\n    \n \n  \n    projectButton.addEventListener('click', ()=>{\n\n        //Styling the elements\n        input.type = 'text';\n        input.placeholder = 'Enter your project name';\n        input.style.borderRadius = '5px';\n        input.style.height = '30px';\n        input.style.width = '170px';\n        \n        \n        buttonContainer.style.display ='flex';\n        buttonContainer.style.marginTop = '10px';\n        buttonContainer.style.gap = '20px';\n\n        cancelButton.textContent = 'Cancel';\n        cancelButton.style.color = 'white';\n        cancelButton.style.backgroundColor = '#C576F6'\n        cancelButton.style.border = '1px solid #C576F6';\n        cancelButton.style.borderRadius = '10px'\n        cancelButton.style.width = '75px';\n        cancelButton.style.height = '30px';\n        cancelButton.style.cursor = 'pointer';\n\n        addButton.textContent ='Add';\n        addButton.style.color ='white';\n        addButton.style.backgroundColor = '#FFD700'\n        addButton.style.border = '1px solid #FFD700';\n        addButton.style.borderRadius = '10px';\n        addButton.style.width = '75px';\n        addButton.style.height = '30px';\n        addButton.style.cursor = 'pointer';\n\n        //Appendin everythin\n        projectContainer.appendChild(form);\n        form.appendChild(input);\n        buttonContainer.appendChild(cancelButton);\n        buttonContainer.appendChild(addButton);\n        form.appendChild(buttonContainer);\n        \n\n        projectButton.disabled = true;\n\n        \n    })\n\n    \n\n//Add Button Event Listener\naddButton.addEventListener('click', function(event){\n\n//Prevent page refresh upon click\nevent.preventDefault();\n\n//Handling errors\nprojectButton.disabled = false;\n//Projects List\nlet projectItem = document.createElement('li');\n\nprojectItem.className ='projectItem';\nvalue = input.value;\ninput.value = \"\";\nprojectItem.textContent = value;\nprojectList.appendChild(projectItem);\n\nprojectItems.push(projectItem.textContent);\n\n(0,_storage__WEBPACK_IMPORTED_MODULE_10__.saveProjectLiArray)(projectItems)\nconsole.log(projectItem);\nconsole.log(projectItems);\n\nprojects[value] = [];\n        \n        \n//Individual projects \nprojectItem.addEventListener('click', (event)=>{\naddTaskbutton.style.width = '100px';\naddTaskbutton.style.height = '40px';\naddTaskbutton.style.borderRadius = '15px';\naddTaskbutton.style.marginTop = '15px';\naddTaskbutton.textContent = 'Add Task';\n// console.log('dog')\nmainSectionHeader.style.display = 'flex';\nmainSectionHeader.style.justifyContent = 'space-between';\nmainSectionHeader.appendChild(addTaskbutton)\n            \nprojectName = event.target.textContent;\nprojectTitle.textContent = projectName; \n\n(0,_toDo__WEBPACK_IMPORTED_MODULE_4__.toggleNoTasksDisplay)(projectName)\n;(0,_displayProject__WEBPACK_IMPORTED_MODULE_9__.displayProject)(projectName)\n\n        \n})\n//remove project form\nform.remove()\n    \n})\n\n   \n//Cancel Button Event Listener\ncancelButton.addEventListener('click', function(event){\n//Prevent page refresh upon click\nevent.preventDefault();\nprojectButton.disabled = false;\nform.remove();\n         \n    })\n\n\n //Add Task Event Listener\naddTaskbutton.addEventListener('click', ()=>{\ntaskModal.showModal();\n})\n\n\n//Form Add Button EL\nformAddButton.addEventListener('click', (event)=>{\n       \n//Prevent page refresh upon click\nevent.preventDefault();\n\n///Getting the value of each user input\nconst titleValue = document.getElementById('title').value;\nconst descriptionValue = document.getElementById('description').value\nconst priorityValue = document.getElementById('priority').value;\nconst dueDateValue = document.getElementById('dueDate').value;\n\ntoDo = (0,_toDo__WEBPACK_IMPORTED_MODULE_4__.createToDo)(titleValue,descriptionValue,dueDateValue,priorityValue,projectName);\n    \n(0,_toDo__WEBPACK_IMPORTED_MODULE_4__.addTaskObjectToProject)(toDo);\n(0,_toDo__WEBPACK_IMPORTED_MODULE_4__.toggleNoTasksDisplay)(projectName)\n;(0,_displayProject__WEBPACK_IMPORTED_MODULE_9__.displayProject)(projectName)\n\n//Add Task Object to its calendar array.\n;(0,_compareDates__WEBPACK_IMPORTED_MODULE_8__.addTaskToRespectiveArray)()\n;(0,_storage__WEBPACK_IMPORTED_MODULE_10__.saveCalendarArray)('homeTasks',_home__WEBPACK_IMPORTED_MODULE_5__.homeTasks)\n;(0,_storage__WEBPACK_IMPORTED_MODULE_10__.saveCalendarArray)('todayTasks',_today__WEBPACK_IMPORTED_MODULE_6__.todayTasks)\n;(0,_storage__WEBPACK_IMPORTED_MODULE_10__.saveCalendarArray)('weekTasks',_week__WEBPACK_IMPORTED_MODULE_7__.weekTasks)\n\n //Save global project object to Storage\n ;(0,_storage__WEBPACK_IMPORTED_MODULE_10__.saveProject)(projects);\n console.log('Projects after adding task:', projects);\ntaskModal.close();\n    \n})\n\n\n//Preventing default refresh for the Dialog Modal X button\ndocument.getElementById('closeFormButton').addEventListener('click',(event )=>{\nevent.preventDefault();\ntaskModal.close();\n })\n    \n\n//Form Cancel Button EL\nformCancelButton.addEventListener('click', (event)=>{\n        taskModal.close()\n        \n        //Prevent page refresh upon click\n        event.preventDefault();\n\n    })\n\n    \n}\n\n\n\n//# sourceURL=webpack://two-doo-list/./src/dom.js?");

/***/ }),

/***/ "./src/getCurrentDate.js":
/*!*******************************!*\
  !*** ./src/getCurrentDate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentDateToString: () => (/* binding */ currentDateToString)\n/* harmony export */ });\n\n\nfunction getCurrentDate(){\n    const currentDate = new Date()\n    return currentDate\n}\n\nfunction currentDateToString(){\n    const currentDate = getCurrentDate();\n    const date =currentDate.toISOString().split('T')[0];\n    return date;\n}\n\n\n//# sourceURL=webpack://two-doo-list/./src/getCurrentDate.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHomeArray: () => (/* binding */ displayHomeArray),\n/* harmony export */   homeTasks: () => (/* binding */ homeTasks)\n/* harmony export */ });\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst homeTasks = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.lookForArrays)('homeTasks') || []\n\n\nfunction displayHomeArray(){\n    ;(0,_toDo__WEBPACK_IMPORTED_MODULE_0__.textContent)(_dom__WEBPACK_IMPORTED_MODULE_1__.projectTitle,\"Home\");\n    _toDo__WEBPACK_IMPORTED_MODULE_0__.taskContainer.innerHTML ='';\n    _dom__WEBPACK_IMPORTED_MODULE_1__.addTaskbutton.remove();\n    if(homeTasks.length === 0){\n        _toDo__WEBPACK_IMPORTED_MODULE_0__.noTasks.style.display = 'flex'\n    }\n    else{\n        \n        _toDo__WEBPACK_IMPORTED_MODULE_0__.noTasks.style.display = 'none'\n\n        for(let i = 0 ; i<homeTasks.length ; i++){\n            \n\n        let taskObject = homeTasks[i];\n        const taskTitle = taskObject.title;\n        const taskDescription = taskObject.description;\n        const taskDueDate = taskObject.dueDate;\n        const taskPriority = taskObject.priority;\n        const projectName = taskObject.projectName\n        ;(0,_toDo__WEBPACK_IMPORTED_MODULE_0__.addContent)(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);\n        (0,_toDo__WEBPACK_IMPORTED_MODULE_0__.textContent)(_dom__WEBPACK_IMPORTED_MODULE_1__.projectTitle,\"Home\");\n\n    }\n}\n}\n\n//# sourceURL=webpack://two-doo-list/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus.svg */ \"./src/images/plus.svg\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', _dom__WEBPACK_IMPORTED_MODULE_0__.mainPageContent);\n\n//# sourceURL=webpack://two-doo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayStorage: () => (/* binding */ displayStorage),\n/* harmony export */   lookForArrays: () => (/* binding */ lookForArrays),\n/* harmony export */   lookForProjects: () => (/* binding */ lookForProjects),\n/* harmony export */   retrieveProjectLi: () => (/* binding */ retrieveProjectLi),\n/* harmony export */   saveCalendarArray: () => (/* binding */ saveCalendarArray),\n/* harmony export */   saveProject: () => (/* binding */ saveProject),\n/* harmony export */   saveProjectLiArray: () => (/* binding */ saveProjectLiArray)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n\n;\n\n\n\n\nfunction saveProject(projects){\n    // Convert projects to JSON and store it in localStorage\n    localStorage.setItem('projects', JSON.stringify(projects));\n\n}\n\nfunction saveCalendarArray(itemName, array){\n    localStorage.setItem(itemName, JSON.stringify(array))\n}\n\nfunction lookForArrays(array) {\n    const storedData = localStorage.getItem(array);\n\n    // Check if storedData is not null before parsing\n    return storedData !== null ? JSON.parse(storedData) : [];\n}\n\n\n\nfunction lookForProjects(){\n    const storedProjects = localStorage.getItem('projects');\n    return storedProjects !=null ? JSON.parse(storedProjects) : {};\n}\n\n\nfunction displayStorage(projectName){\n    if(Object.keys(_dom__WEBPACK_IMPORTED_MODULE_0__.projects).length >0){\n        _toDo__WEBPACK_IMPORTED_MODULE_1__.noTasks.style.display = 'none';\n\n        for (let i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_0__.projects[projectName].length; i++) {\n            const taskObject = _dom__WEBPACK_IMPORTED_MODULE_0__.projects[projectName][i];\n            const taskTitle = taskObject.title;\n            const taskDescription = taskObject.description;\n            const taskDueDate = taskObject.dueDate;\n            const taskPriority = taskObject.priority;\n            (0,_toDo__WEBPACK_IMPORTED_MODULE_1__.addContent)(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);\n    \n           \n            \n        }\n    }\n    else{_toDo__WEBPACK_IMPORTED_MODULE_1__.noTasks.style.display = 'flex';}\n\n   \n    \n}\n\nfunction homeStorage(){\n    Object.keys(_dom__WEBPACK_IMPORTED_MODULE_0__.projects).forEach(projectName => {\n        // Your code to work with each project\n        displayStorage(projectName);\n    });\n\n}\n\n\n\nfunction saveProjectLiArray(project){\n    localStorage.setItem('projectList', JSON.stringify(project))\n}\n\nfunction retrieveProjectLi(){\n    const projectLiArray = localStorage.getItem('projectList');\n    return projectLiArray != null ? JSON.parse(projectLiArray) : []\n    \n    \n}\n\nfunction displayProjectItemsStorage(){\n\n    _dom__WEBPACK_IMPORTED_MODULE_0__.projectItems.forEach((projectItem) =>{\n       \n        const project = document.createElement('li')\n        project.className = 'projectItem';\n        const text = projectItem\n        console.log(text)\n        project.textContent = text;\n        _dom__WEBPACK_IMPORTED_MODULE_0__.projectList.appendChild(project);\n\n        project.addEventListener('click',()=>{\n            if(_dom__WEBPACK_IMPORTED_MODULE_0__.projectItems.length>0){\n                _toDo__WEBPACK_IMPORTED_MODULE_1__.noTasks.style.display = 'none';\n                (0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProject)(text)\n            }\n            else{\n                _toDo__WEBPACK_IMPORTED_MODULE_1__.noTasks.style.display = 'flex';\n            }\n            \n        })\n})\n}\ndocument.addEventListener('DOMContentLoaded', homeStorage);\n\ndocument.addEventListener('DOMContentLoaded', displayProjectItemsStorage );\n\n//# sourceURL=webpack://two-doo-list/./src/storage.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addContent: () => (/* binding */ addContent),\n/* harmony export */   addTaskObjectToProject: () => (/* binding */ addTaskObjectToProject),\n/* harmony export */   createTaskImgs: () => (/* binding */ createTaskImgs),\n/* harmony export */   createToDo: () => (/* binding */ createToDo),\n/* harmony export */   getPriority: () => (/* binding */ getPriority),\n/* harmony export */   noTasks: () => (/* binding */ noTasks),\n/* harmony export */   taskContainer: () => (/* binding */ taskContainer),\n/* harmony export */   textContent: () => (/* binding */ textContent),\n/* harmony export */   toggleNoTasksDisplay: () => (/* binding */ toggleNoTasksDisplay)\n/* harmony export */ });\n/* harmony import */ var _images_priorityIconGreen_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/priorityIconGreen.svg */ \"./src/images/priorityIconGreen.svg\");\n/* harmony import */ var _images_priorityIconYellow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/priorityIconYellow.svg */ \"./src/images/priorityIconYellow.svg\");\n/* harmony import */ var _images_priorityIconRed_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/priorityIconRed.svg */ \"./src/images/priorityIconRed.svg\");\n/* harmony import */ var _images_priorityIconDarkRed_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/priorityIconDarkRed.svg */ \"./src/images/priorityIconDarkRed.svg\");\n/* harmony import */ var _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/check-circle.svg */ \"./src/images/check-circle.svg\");\n/* harmony import */ var _images_dots_horizontal_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/dots-horizontal.svg */ \"./src/images/dots-horizontal.svg\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst taskContainer = document.querySelector('.tasksContainer');\nconst noTasks = document.querySelector('.noTasks');\n\n//Create factory function to create objects for each toDoItems\n\nfunction createToDo(title,description,dueDate,priority,projectName){\n   return{\n    title,\n    description,\n    dueDate,\n    priority,\n    projectName\n   }\n}\n\nfunction createTaskDiv(){\nlet taskDiv = document.createElement('div');\ntaskDiv.className = 'taskDiv';\nstyleDiv(taskDiv)\nreturn taskDiv\n}\n\nfunction textContent(element, text){\n   element.textContent = text\n}\n\n\nfunction styleDiv(div){\ndiv.style.width = '760px';\ndiv.style.height = '200px';\ndiv.style.backgroundColor = '#f0f5fe';\ndiv.style.display = 'flex';\ndiv.style.flexDirection = 'column';\ndiv.style.justifyContent = 'center';\ndiv.style.borderRadius ='10px';\ndiv.style.padding ='20px';\ndiv.style.marginBottom = '20px';  \ndiv.style.marginTop = '70px' \n}\n\n\nfunction addContent(title,priority,project,description,dueDate){\n   const headingSection = document.createElement('div');\n   headingSection.className = 'headingSection';\n\n   const taskHeader = document.createElement('h2')\n   taskHeader.className = 'taskHeader';\n   taskHeader.textContent = title\n\n   const informationIconSection = document.createElement('div');\n   informationIconSection.className = 'informationIconSection';\n  \n\n   const priorityImg = document.createElement('img');\n   getPriority(priority,priorityImg);\n\n   const projectParagraph = document.createElement('p');\n   projectParagraph.textContent = project;\n\n   _dom__WEBPACK_IMPORTED_MODULE_6__.projectTitle.textContent = project;\n\n   const descriptionBox = document.createElement('p');\n   descriptionBox.textContent = \"Description : \" + description;\n\n   const dueDateParagraph = document.createElement('p');\n   dueDateParagraph.textContent = \"Due Date : \" + dueDate;\n\n\n\n   const taskDiv = createTaskDiv();\n   const taskImgs = createTaskImgs();\n   \n   appendToDom(priorityImg,taskHeader);\n   appendToDom(taskHeader,headingSection);\n   appendToDom(taskImgs.dotsImg,informationIconSection);\n   appendToDom(taskImgs.checkImg,informationIconSection);\n   appendToDom(informationIconSection,headingSection)\n   appendToDom(headingSection,taskDiv);\n   appendToDom(projectParagraph,taskDiv);\n   appendToDom(descriptionBox,taskDiv);\n   appendToDom(dueDateParagraph,taskDiv);\n   appendToDom(taskDiv,taskContainer);\n\n\n}\n\nfunction getPriority(priorityLevel,priorityImg){\n   if (priorityLevel === 'Low'){\n      priorityImg.src = _images_priorityIconGreen_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n   }\n   else if(priorityLevel === 'Medium'){\n      priorityImg.src = _images_priorityIconYellow_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n   }\n   else if(priorityLevel === 'High'){\n      priorityImg.src = _images_priorityIconRed_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n   }\n   else if(priorityLevel === 'Critical'){\n      priorityImg.src = _images_priorityIconDarkRed_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n   }\n   \n\n}\n\nfunction appendToDom(element,targetContainer){\n   targetContainer.appendChild(element)\n}\n\n\nfunction createTaskImgs(){\n//Icon imgs\nconst checkImg = document.createElement('img');\nconst dotsImg = document.createElement('img');\n\ncheckImg.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\ncheckImg.style.width = '30px'\ncheckImg.style.height = '30px'\n\ndotsImg.src = _images_dots_horizontal_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\ndotsImg.style.width = '30px'\ndotsImg.style.height = '30px'\n\nreturn {\n   checkImg: checkImg,\n   dotsImg: dotsImg,\n };\n}\n\n \n\nfunction toggleNoTasksDisplay(projectName){\n   if(_dom__WEBPACK_IMPORTED_MODULE_6__.projects[projectName].length===0){\n      noTasks.style.display = 'flex'\n  }\n  else{\n      noTasks.style.display = 'none';\n  }\n}\n\nfunction addTaskObjectToProject(object){\n\n   const title = document.getElementById('project-title');\n   let titleContent = title.textContent;\n\n   _dom__WEBPACK_IMPORTED_MODULE_6__.projects[titleContent].push(object);\n\n  \n}\n\n\n\n//# sourceURL=webpack://two-doo-list/./src/toDo.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTodayArray: () => (/* binding */ displayTodayArray),\n/* harmony export */   todayTasks: () => (/* binding */ todayTasks)\n/* harmony export */ });\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst todayTasks = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.lookForArrays)('todayTasks') || []\n\n\nfunction displayTodayArray(){\n    ;(0,_toDo__WEBPACK_IMPORTED_MODULE_0__.textContent)(_dom__WEBPACK_IMPORTED_MODULE_1__.projectTitle,\"Today\");\n    _toDo__WEBPACK_IMPORTED_MODULE_0__.taskContainer.innerHTML =''\n    _dom__WEBPACK_IMPORTED_MODULE_1__.addTaskbutton.remove()\n\n    if(todayTasks.length === 0){\n        _toDo__WEBPACK_IMPORTED_MODULE_0__.noTasks.style.display = 'flex'\n    }\n    else{\n        _toDo__WEBPACK_IMPORTED_MODULE_0__.noTasks.style.display = 'none'\n    for(let i = 0 ; i<todayTasks.length ; i++){\n\n        let taskObject = todayTasks[i];\n        const taskTitle = taskObject.title;\n        const taskDescription = taskObject.description;\n        const taskDueDate = taskObject.dueDate;\n        const taskPriority = taskObject.priority;\n        const projectName = taskObject.projectName\n        ;(0,_toDo__WEBPACK_IMPORTED_MODULE_0__.addContent)(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);\n        (0,_toDo__WEBPACK_IMPORTED_MODULE_0__.textContent)(_dom__WEBPACK_IMPORTED_MODULE_1__.projectTitle,\"Today\");\n\n    }\n}\n}\n\n//# sourceURL=webpack://two-doo-list/./src/today.js?");

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeekArray: () => (/* binding */ displayWeekArray),\n/* harmony export */   weekTasks: () => (/* binding */ weekTasks)\n/* harmony export */ });\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst weekTasks = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.lookForArrays)('weekTasks') || [];\n\n\nfunction displayWeekArray(){\n    (0,_toDo__WEBPACK_IMPORTED_MODULE_0__.textContent)(_dom__WEBPACK_IMPORTED_MODULE_1__.projectTitle,\"This Week\");\n    _toDo__WEBPACK_IMPORTED_MODULE_0__.taskContainer.innerHTML ='';\n    _dom__WEBPACK_IMPORTED_MODULE_1__.addTaskbutton.remove();\n\n\n    if(weekTasks.length === 0){\n        _toDo__WEBPACK_IMPORTED_MODULE_0__.noTasks.style.display = 'flex'\n    }\n    else{\n        \n        _toDo__WEBPACK_IMPORTED_MODULE_0__.noTasks.style.display = 'none'\n    \n    for(let i = 0 ; i<weekTasks.length ; i++){\n\n        let taskObject = weekTasks[i];\n        const taskTitle = taskObject.title;\n        const taskDescription = taskObject.description;\n        const taskDueDate = taskObject.dueDate;\n        const taskPriority = taskObject.priority;\n        const projectName = taskObject.projectName\n        ;(0,_toDo__WEBPACK_IMPORTED_MODULE_0__.addContent)(taskTitle, taskPriority, projectName, taskDescription, taskDueDate);\n        (0,_toDo__WEBPACK_IMPORTED_MODULE_0__.textContent)(_dom__WEBPACK_IMPORTED_MODULE_1__.projectTitle,\"This Week\");\n    }\n}\n}\n\n//# sourceURL=webpack://two-doo-list/./src/week.js?");

/***/ }),

/***/ "./src/fonts/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea9ac219cca962fee9ed.ttf\";\n\n//# sourceURL=webpack://two-doo-list/./src/fonts/Montserrat-VariableFont_wght.ttf?");

/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ \"./node_modules/date-fns/addDays.mjs\");\n/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ \"./node_modules/date-fns/addMonths.mjs\");\n/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ \"./node_modules/date-fns/constructFrom.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n\n\n/**\n * @name add\n * @category Common Helpers\n * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.\n *\n * @description\n * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.\n *\n * | Key            | Description                        |\n * |----------------|------------------------------------|\n * | years          | Amount of years to be added        |\n * | months         | Amount of months to be added       |\n * | weeks          | Amount of weeks to be added        |\n * | days           | Amount of days to be added         |\n * | hours          | Amount of hours to be added        |\n * | minutes        | Amount of minutes to be added      |\n * | seconds        | Amount of seconds to be added      |\n *\n * All values default to 0\n *\n * @returns The new date with the seconds added\n *\n * @example\n * // Add the following duration to 1 September 2014, 10:19:50\n * const result = add(new Date(2014, 8, 1, 10, 19, 50), {\n *   years: 2,\n *   months: 9,\n *   weeks: 1,\n *   days: 7,\n *   hours: 5,\\\\-7\n *   minutes: 9,\n *   seconds: 30,\n * })\n * //=> Thu Jun 15 2017 15:29:20\n */\nfunction add(date, duration) {\n  const {\n    years = 0,\n    months = 0,\n    weeks = 0,\n    days = 0,\n    hours = 0,\n    minutes = 0,\n    seconds = 0,\n  } = duration;\n\n  // Add years and months\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const dateWithMonths =\n    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;\n\n  // Add weeks and days\n  const dateWithDays =\n    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;\n\n  // Add days, hours, minutes and seconds\n  const minutesToAdd = minutes + hours * 60;\n  const secondsToAdd = seconds + minutesToAdd * 60;\n  const msToAdd = secondsToAdd * 1000;\n  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);\n\n  return finalDate;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n\n//# sourceURL=webpack://two-doo-list/./node_modules/date-fns/add.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDays: () => (/* binding */ addDays),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ \"./node_modules/date-fns/constructFrom.mjs\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of days to be added.\n *\n * @returns The new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(date, amount) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return _date;\n  }\n  _date.setDate(_date.getDate() + amount);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);\n\n\n//# sourceURL=webpack://two-doo-list/./node_modules/date-fns/addDays.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMonths: () => (/* binding */ addMonths),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ \"./node_modules/date-fns/constructFrom.mjs\");\n\n\n\n/**\n * @name addMonths\n * @category Month Helpers\n * @summary Add the specified number of months to the given date.\n *\n * @description\n * Add the specified number of months to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to be changed\n * @param amount - The amount of months to be added.\n *\n * @returns The new date with the months added\n *\n * @example\n * // Add 5 months to 1 September 2014:\n * const result = addMonths(new Date(2014, 8, 1), 5)\n * //=> Sun Feb 01 2015 00:00:00\n *\n * // Add one month to 30 January 2023:\n * const result = addMonths(new Date(2023, 0, 30), 1)\n * //=> Tue Feb 28 2023 00:00:00\n */\nfunction addMonths(date, amount) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);\n  if (!amount) {\n    // If 0 months, no-op to avoid changing times in the hour before end of DST\n    return _date;\n  }\n  const dayOfMonth = _date.getDate();\n\n  // The JS Date object supports date math by accepting out-of-bounds values for\n  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and\n  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we\n  // want except that dates will wrap around the end of a month, meaning that\n  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So\n  // we'll default to the end of the desired month by adding 1 to the desired\n  // month and using a date of 0 to back up one day to the end of the desired\n  // month.\n  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());\n  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);\n  const daysInMonth = endOfDesiredMonth.getDate();\n  if (dayOfMonth >= daysInMonth) {\n    // If we're already at the end of the month, then this is the correct date\n    // and we're done.\n    return endOfDesiredMonth;\n  } else {\n    // Otherwise, we now know that setting the original day-of-month value won't\n    // cause an overflow, so set the desired day-of-month. Note that we can't\n    // just set the date of `endOfDesiredMonth` because that object may have had\n    // its time changed in the unusual case where where a DST transition was on\n    // the last day of the month and its local time was in the hour skipped or\n    // repeated next to a DST transition.  So we use `date` instead which is\n    // guaranteed to still have the original time.\n    _date.setFullYear(\n      endOfDesiredMonth.getFullYear(),\n      endOfDesiredMonth.getMonth(),\n      dayOfMonth,\n    );\n    return _date;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);\n\n\n//# sourceURL=webpack://two-doo-list/./node_modules/date-fns/addMonths.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from 'date-fns'\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use contrustor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   )\n * }\n */\nfunction constructFrom(date, value) {\n  if (date instanceof Date) {\n    return new date.constructor(value);\n  } else {\n    return new Date(value);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack://two-doo-list/./node_modules/date-fns/constructFrom.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isWithinInterval.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/isWithinInterval.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isWithinInterval: () => (/* binding */ isWithinInterval)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name isWithinInterval\n * @category Interval Helpers\n * @summary Is the given date within the interval?\n *\n * @description\n * Is the given date within the interval? (Including start and end.)\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n * @param interval - The interval to check\n *\n * @returns The date is within the interval\n *\n * @example\n * // For the date within the interval:\n * isWithinInterval(new Date(2014, 0, 3), {\n *   start: new Date(2014, 0, 1),\n *   end: new Date(2014, 0, 7)\n * })\n * //=> true\n *\n * @example\n * // For the date outside of the interval:\n * isWithinInterval(new Date(2014, 0, 10), {\n *   start: new Date(2014, 0, 1),\n *   end: new Date(2014, 0, 7)\n * })\n * //=> false\n *\n * @example\n * // For date equal to interval start:\n * isWithinInterval(date, { start, end: date })\n * // => true\n *\n * @example\n * // For date equal to interval end:\n * isWithinInterval(date, { start: date, end })\n * // => true\n */\nfunction isWithinInterval(date, interval) {\n  const time = +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const [startTime, endTime] = [\n    +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.start),\n    +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.end),\n  ].sort((a, b) => a - b);\n\n  return time >= startTime && time <= endTime;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isWithinInterval);\n\n\n//# sourceURL=webpack://two-doo-list/./node_modules/date-fns/isWithinInterval.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://two-doo-list/./node_modules/date-fns/toDate.mjs?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;