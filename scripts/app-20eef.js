/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n@media screen (min-width:641px){\r\n      ^\r\n      Invalid CSS after \"@media screen\": expected \"{\", was \"(min-width:641px){\"\r\n      in F:\\bandow.github.io\\src\\sass\\public\\_header.scss (line 15, column 8)\n    at runLoaders (F:\\bandow.github.io\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at F:\\bandow.github.io\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at F:\\bandow.github.io\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (F:\\bandow.github.io\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (F:\\bandow.github.io\\node_modules\\sass-loader\\lib\\loader.js:57:13)\n    at Object.<anonymous> (F:\\bandow.github.io\\node_modules\\async\\dist\\async.js:2243:31)\n    at Object.callback (F:\\bandow.github.io\\node_modules\\async\\dist\\async.js:906:16)\n    at options.error (F:\\bandow.github.io\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sass_index_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sass_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_sass_index_scss__);

window.onload = function () {
	console.log(1);
};

/***/ })
/******/ ]);