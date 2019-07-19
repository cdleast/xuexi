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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_hello_js__ = __webpack_require__(1);
/*
    require('./a.js');
    require('./b.js');
    require('./c.js');
    alert('test');
    document.getElementById('box').style.color = 'red';

    // 加载模版
    import("./c.js");
    
    // 1.加载模块 接收 模块对外暴露的 值
    import { name,sex } from "./modules/hello.js";
    console.log(name);
    console.log(sex);

    //2. 引入  构造函数
    import { userInfo } from "./modules/hello.js";
    // new 实例化
    var obj = new userInfo();
    console.log(obj.name);

    //3. 接收对象
    import{obj} from './modules/hello.js';
    console.log(obj.name);



*/

// 接收对象

console.log(__WEBPACK_IMPORTED_MODULE_0__modules_hello_js__["a" /* default */].name);

// require('./css/style.css');

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 1. 暴露属性
// export var name = 'jack';
// export var sex = '男';

/*
// 2.暴露构造函数
export function userInfo() {
    this.name = 'jack';
    this.age = 18;
    this.say = function(){
        console.log('ok');
    }
}

    // 3.  
    export var obj =  {
        name:'jack',
        age:18
    }
*/

var obj =  {
    name:'jack',
    age:18
}

/* harmony default export */ __webpack_exports__["a"] = (obj);

/***/ })
/******/ ]);