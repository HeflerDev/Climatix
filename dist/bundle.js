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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/master.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/master.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_framework_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./framework.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/framework.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_framework_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#search-form {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/master.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/framework.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/framework.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\n  --grid-gap: 0px; }\\n\\n.flex-grid {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: calc(var(--grid-gap) * -1) 0 0 calc(var(--grid-gap) * -1); }\\n\\n.col {\\n  box-sizing: border-box;\\n  background-clip: content-box;\\n  flex-basis: 100%; }\\n\\n.col-1 {\\n  flex-basis: 8.33%;\\n  max-width: 8.33%; }\\n\\n.col-2 {\\n  flex-basis: 16.66%;\\n  max-width: 16.66%; }\\n\\n.col-3 {\\n  flex-basis: 25%;\\n  max-width: 25%; }\\n\\n.col-4 {\\n  flex-basis: 33.33%;\\n  max-width: 33.33%; }\\n\\n.col-5 {\\n  flex-basis: 41.66%;\\n  max-width: 41.66%; }\\n\\n.col-6 {\\n  flex-basis: 50%;\\n  max-width: 50%; }\\n\\n.col-7 {\\n  flex-basis: 58.33%;\\n  max-width: 58.33%; }\\n\\n.col-8 {\\n  flex-basis: 66.66%;\\n  max-width: 66.66%; }\\n\\n.col-9 {\\n  flex-basis: 75%;\\n  max-width: 75%; }\\n\\n.col-10 {\\n  flex-basis: 83.33%;\\n  max-width: 83.33%; }\\n\\n.col-11 {\\n  flex-basis: 91.66%;\\n  max-width: 91.66%; }\\n\\n.col-12 {\\n  flex-basis: 100%;\\n  max-width: 100%; }\\n\\n/* Color Theme Swatches in RGBA */\\nhtml {\\n  font-size: 42px; }\\n  @media screen and (min-device-width: 768px) {\\n    html {\\n      font-size: 24px; } }\\n  @media screen and (min-device-width: 1024px) {\\n    html {\\n      font-size: 12px; } }\\n\\nbody {\\n  color: black; }\\n\\n.box {\\n  display: flex;\\n  width: 100%;\\n  text-align: center;\\n  flex-direction: column; }\\n  @media screen and (max-device-width: 640px) {\\n    .box {\\n      margin: auto;\\n      padding: 0.5rem; } }\\n  @media screen and (min-device-width: 640px) {\\n    .box {\\n      margin: auto;\\n      padding: 1rem; } }\\n  @media screen and (min-device-width: 768px) {\\n    .box {\\n      margin: auto;\\n      padding: 1.5rem; } }\\n  @media screen and (min-device-width: 1024px) {\\n    .box {\\n      margin: auto;\\n      padding: 2rem; } }\\n\\n.minibox {\\n  display: flex;\\n  width: 100%; }\\n  @media screen and (max-width: 640px) {\\n    .minibox {\\n      margin: auto;\\n      padding: 0.125rem; } }\\n  @media screen and (min-width: 640px) {\\n    .minibox {\\n      margin: auto;\\n      padding: 0.25rem; } }\\n  @media screen and (min-width: 768px) {\\n    .minibox {\\n      margin: auto;\\n      padding: 0.375rem; } }\\n  @media screen and (min-width: 1024px) {\\n    .minibox {\\n      margin: auto;\\n      padding: 0.5rem; } }\\n\\n.column {\\n  flex-direction: column !important; }\\n\\n.row {\\n  flex-direction: row !important; }\\n\\n.start {\\n  justify-content: flex-start !important; }\\n\\n.center {\\n  justify-content: center !important; }\\n\\n.end {\\n  justify-content: flex-end !important; }\\n\\n.around {\\n  justify-content: space-around !important; }\\n\\n.between {\\n  justify-content: space-between !important; }\\n\\n.text-left {\\n  text-align: left; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n.btn {\\n  border: solid #8c0b23 2px;\\n  background: #ecbeaa;\\n  color: white;\\n  transition: 0.2s;\\n  font-family: cursive; }\\n  .btn:hover {\\n    background: white;\\n    transition: 0.2s;\\n    transform: scale(1.1); }\\n\\n.border {\\n  border: solid #8c0b23 0.2rem; }\\n\\n.line {\\n  border-width: 0.1rem; }\\n\\n.bold {\\n  border-width: 0.4rem; }\\n\\n.bolder {\\n  border-width: 0.8rem; }\\n\\n.radius {\\n  border-radius: 0.5rem; }\\n\\n.soft {\\n  border-radius: 0.1rem; }\\n\\n.rounded {\\n  border-radius: 1rem; }\\n\\n.rounder {\\n  border-radius: 2rem; }\\n\\n.circle {\\n  border-radius: 50%; }\\n\\n.thin {\\n  border-width: thin; }\\n\\n.title {\\n  color: white;\\n  text-decoration: none;\\n  transition: 0.1s;\\n  font-family: sans-serif;\\n  font-size: 72px; }\\n  .title:hover {\\n    transform: scale(1.1);\\n    text-decoration: none;\\n    color: white;\\n    transition: 0.1s; }\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around; }\\n\\n.field {\\n  border-radius: 5px;\\n  background: #3f0711;\\n  color: white; }\\n\\nfooter {\\n  width: 100%;\\n  background-color: #3f0711;\\n  height: 40vh;\\n  color: white;\\n  list-style: none; }\\n\\n@media only screen and (min-device-width: 768px) {\\n  .col-m-1 {\\n    flex-basis: 8.33%;\\n    max-width: 8.33%; }\\n\\n  .col-m-2 {\\n    flex-basis: 16.66%;\\n    max-width: 16.66%; }\\n\\n  .col-m-3 {\\n    flex-basis: 25%;\\n    max-width: 25%; }\\n\\n  .col-m-4 {\\n    flex-basis: 33.33%;\\n    max-width: 33.33%; }\\n\\n  .col-m-5 {\\n    flex-basis: 41.66%;\\n    max-width: 41.66%; }\\n\\n  .col-m-6 {\\n    flex-basis: 50%;\\n    max-width: 50%; }\\n\\n  .col-m-7 {\\n    flex-basis: 58.33%;\\n    max-width: 58.33%; }\\n\\n  .col-m-8 {\\n    flex-basis: 66.66%;\\n    max-width: 66.66%; }\\n\\n  .col-m-9 {\\n    flex-basis: 75%;\\n    max-width: 75%; }\\n\\n  .col-m-10 {\\n    flex-basis: 83.33%;\\n    max-width: 83.33%; }\\n\\n  .col-m-11 {\\n    flex-basis: 91.66%;\\n    max-width: 91.66%; }\\n\\n  .col-m-12 {\\n    flex-basis: 100%;\\n    max-width: 100%; } }\\n@media only screen and (min-device-width: 1024px) {\\n  .col-l-1 {\\n    flex-basis: 8.33%;\\n    max-width: 8.33%; }\\n\\n  .col-l-2 {\\n    flex-basis: 16.66%;\\n    max-width: 16.66%; }\\n\\n  .col-l-3 {\\n    flex-basis: 25%;\\n    max-width: 25%; }\\n\\n  .col-l-4 {\\n    flex-basis: 33.33%;\\n    max-width: 33.33%; }\\n\\n  .col-l-5 {\\n    flex-basis: 41.66%;\\n    max-width: 41.66%; }\\n\\n  .col-l-6 {\\n    flex-basis: 50%;\\n    max-width: 50%; }\\n\\n  .col-l-7 {\\n    flex-basis: 58.33%;\\n    max-width: 58.33%; }\\n\\n  .col-l-8 {\\n    flex-basis: 66.66%;\\n    max-width: 66.66%; }\\n\\n  .col-l-9 {\\n    flex-basis: 75%;\\n    max-width: 75%; }\\n\\n  .col-l-10 {\\n    flex-basis: 83.33%;\\n    max-width: 83.33%; }\\n\\n  .col-l-11 {\\n    flex-basis: 91.66%;\\n    max-width: 91.66%; }\\n\\n  .col-l-12 {\\n    flex-basis: 100%;\\n    max-width: 100%; } }\\n.content {\\n  background-color: #8c0b23; }\\n\\n.sub-task-container {\\n  background-color: #ecbeaa; }\\n\\nnav {\\n  background-color: #3f0711; }\\n\\n.project-box {\\n  border: solid #3f0711 0.2rem; }\\n\\n.project-name-box {\\n  background-color: #3f0711;\\n  color: white; }\\n\\n.left-container {\\n  background-color: #8c0b23; }\\n\\n.sub-task-container {\\n  border: solid #3f0711 0.2rem;\\n  border-radius: 0.5rem; }\\n\\n.completed-task {\\n  background-color: blue; }\\n\\n.late-task {\\n  background-color: red; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/framework.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*!\\n * Bootstrap Reboot v4.5.0 (https://getbootstrap.com/)\\n * Copyright 2011-2020 The Bootstrap Authors\\n * Copyright 2011-2020 Twitter, Inc.\\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\\n */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-family: sans-serif;\\n  line-height: 1.15;\\n  -webkit-text-size-adjust: 100%;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n}\\n\\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  font-size: 1rem;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: #212529;\\n  text-align: left;\\n  background-color: #fff;\\n}\\n\\n[tabindex=\\\"-1\\\"]:focus:not(:focus-visible) {\\n  outline: 0 !important;\\n}\\n\\nhr {\\n  box-sizing: content-box;\\n  height: 0;\\n  overflow: visible;\\n}\\n\\nh1, h2, h3, h4, h5, h6 {\\n  margin-top: 0;\\n  margin-bottom: 0.5rem;\\n}\\n\\np {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n\\nabbr[title],\\nabbr[data-original-title] {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted;\\n  text-decoration: underline dotted;\\n  cursor: help;\\n  border-bottom: 0;\\n  -webkit-text-decoration-skip-ink: none;\\n  text-decoration-skip-ink: none;\\n}\\n\\naddress {\\n  margin-bottom: 1rem;\\n  font-style: normal;\\n  line-height: inherit;\\n}\\n\\nol,\\nul,\\ndl {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n\\nol ol,\\nul ul,\\nol ul,\\nul ol {\\n  margin-bottom: 0;\\n}\\n\\ndt {\\n  font-weight: 700;\\n}\\n\\ndd {\\n  margin-bottom: .5rem;\\n  margin-left: 0;\\n}\\n\\nblockquote {\\n  margin: 0 0 1rem;\\n}\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\nsub,\\nsup {\\n  position: relative;\\n  font-size: 75%;\\n  line-height: 0;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -.25em;\\n}\\n\\nsup {\\n  top: -.5em;\\n}\\n\\na {\\n  color: #007bff;\\n  text-decoration: none;\\n  background-color: transparent;\\n}\\n\\na:hover {\\n  color: #0056b3;\\n  text-decoration: underline;\\n}\\n\\na:not([href]) {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\na:not([href]):hover {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\npre,\\ncode,\\nkbd,\\nsamp {\\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n  font-size: 1em;\\n}\\n\\npre {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n  overflow: auto;\\n  -ms-overflow-style: scrollbar;\\n}\\n\\nfigure {\\n  margin: 0 0 1rem;\\n}\\n\\nimg {\\n  vertical-align: middle;\\n  border-style: none;\\n}\\n\\nsvg {\\n  overflow: hidden;\\n  vertical-align: middle;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n}\\n\\ncaption {\\n  padding-top: 0.75rem;\\n  padding-bottom: 0.75rem;\\n  color: #6c757d;\\n  text-align: left;\\n  caption-side: bottom;\\n}\\n\\nth {\\n  text-align: inherit;\\n}\\n\\nlabel {\\n  display: inline-block;\\n  margin-bottom: 0.5rem;\\n}\\n\\nbutton {\\n  border-radius: 0;\\n}\\n\\nbutton:focus {\\n  outline: 1px dotted;\\n  outline: 5px auto -webkit-focus-ring-color;\\n}\\n\\ninput,\\nbutton,\\nselect,\\noptgroup,\\ntextarea {\\n  margin: 0;\\n  font-family: inherit;\\n  font-size: inherit;\\n  line-height: inherit;\\n}\\n\\nbutton,\\ninput {\\n  overflow: visible;\\n}\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\nselect {\\n  word-wrap: normal;\\n}\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\nbutton:not(:disabled),\\n[type=\\\"button\\\"]:not(:disabled),\\n[type=\\\"reset\\\"]:not(:disabled),\\n[type=\\\"submit\\\"]:not(:disabled) {\\n  cursor: pointer;\\n}\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  padding: 0;\\n  border-style: none;\\n}\\n\\ninput[type=\\\"radio\\\"],\\ninput[type=\\\"checkbox\\\"] {\\n  box-sizing: border-box;\\n  padding: 0;\\n}\\n\\ntextarea {\\n  overflow: auto;\\n  resize: vertical;\\n}\\n\\nfieldset {\\n  min-width: 0;\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n\\nlegend {\\n  display: block;\\n  width: 100%;\\n  max-width: 100%;\\n  padding: 0;\\n  margin-bottom: .5rem;\\n  font-size: 1.5rem;\\n  line-height: inherit;\\n  color: inherit;\\n  white-space: normal;\\n}\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n[type=\\\"search\\\"] {\\n  outline-offset: -2px;\\n  -webkit-appearance: none;\\n}\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n::-webkit-file-upload-button {\\n  font: inherit;\\n  -webkit-appearance: button;\\n}\\n\\noutput {\\n  display: inline-block;\\n}\\n\\nsummary {\\n  display: list-item;\\n  cursor: pointer;\\n}\\n\\ntemplate {\\n  display: none;\\n}\\n\\n[hidden] {\\n  display: none !important;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/master.scss":
/*!*****************************!*\
  !*** ./src/css/master.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./master.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/master.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/master.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_master_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/master.scss */ \"./src/css/master.scss\");\n/* harmony import */ var _css_master_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_master_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n/* async function doWork() {\n *  try {\n *      something\n *  } catch (err) {\n *      console.log(err);\n *  }\n * }\n\n/*\nfetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=72317f5668bade497a7edbd246f2df82')\n    .then(res => {\n        if (res.ok) {\n            // Success\n        } else {\n            // Failure\n        }\n    })\n    .then(data => console.log(data))\n    // .catch(console.log('ERROR'))\n//\n//\n*/\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });