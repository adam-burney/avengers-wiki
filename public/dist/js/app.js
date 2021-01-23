/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./front/js/app.js","app.vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./front/css/app.scss":
/*!****************************!*\
  !*** ./front/css/app.scss ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./front/js/app.js":
/*!*************************!*\
  !*** ./front/js/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.scss */ "./front/css/app.scss");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./front/js/components/App.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/logger */ "./front/js/utils/logger.js");
/**
 * @file app main entry point.
 */


 // Include the main scss file for webpack processing.




var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_5__["default"])('App');

var init = function init() {
  log.info('init() :: App starts booting...');
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById('app'));
}; // init app


init();

/***/ }),

/***/ "./front/js/components/App.js":
/*!************************************!*\
  !*** ./front/js/components/App.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home */ "./front/js/components/Home.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navigation */ "./front/js/components/Navigation.js");
/* harmony import */ var _LoginCredentials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginCredentials */ "./front/js/components/LoginCredentials.js");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Logout */ "./front/js/components/Logout.js");
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Catalog */ "./front/js/components/Catalog.js");
/* harmony import */ var _lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/AuthToken.js */ "./front/js/lib/AuthToken.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @file App component. 
 */

/* External files */




/* Project files */








var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_16__["default"])('App');
var customHistory = Object(history__WEBPACK_IMPORTED_MODULE_8__["createBrowserHistory"])();

var App = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _super.call(this, props); // At application starts, the previous connection may still be active
    // Set the state accordingly

    _this.state = {
      userConnection: false
    };
    /*     this.state = {
          userConnection: false,
          allAvengersData: []
        }; */

    if (Object(_lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_15__["userAuthentified"])()) {
      _this.state.userConnection = true;
      log.info('The user is already authentified');
    }

    _this.handleConnectionChange = _this.handleConnectionChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "handleConnectionChange",
    value: function handleConnectionChange(userConnection) {
      this.setState({
        userConnection: userConnection
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Router"], {
        history: customHistory
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossorigin: "anonymous"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        userConnection: this.state.userConnection
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        id: "AppMain"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_10__["default"], null), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/catalog/:hero_name_url"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Catalog__WEBPACK_IMPORTED_MODULE_14__["default"], null), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/login"
      }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LoginCredentials__WEBPACK_IMPORTED_MODULE_12__["default"], {
        userConnection: this.handleConnectionChange
      }), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/logout"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Logout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        userConnection: this.handleConnectionChange
      }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
        to: "/"
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./front/js/components/Catalog.js":
/*!****************************************!*\
  !*** ./front/js/components/Catalog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/Api */ "./front/js/lib/Api.js");
/* harmony import */ var _lib_UiParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/UiParams */ "./front/js/lib/UiParams.js");
/* harmony import */ var _lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/AuthToken.js */ "./front/js/lib/AuthToken.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @file Catalog component: Complete Avenger profile
 */

/* External files */




/* Project files */





var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"])('Catalog');

var Catalog = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Catalog, _React$Component);

  var _super = _createSuper(Catalog);

  function Catalog(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Catalog);

    _this = _super.call(this, props);
    _this.state = {
      avengerData: []
    };
    _this.hero_name_url = props.match.params.hero_name_url;
    _this.api = new _lib_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this.ui = new _lib_UiParams__WEBPACK_IMPORTED_MODULE_10__["default"]();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Catalog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = this.api.avengerUrl + this.hero_name_url;
      fetch(url).then(function (response) {
        // Error management for data not found
        // When HTTP status is changed from 200 to 404 in Rails, the json sent is empty
        //log.debug('response.json()=', JSON.stringify(response.json()) );
        if (response.ok) {
          return response.json();
        }

        throw new Error('API fetch failed: HTTP status is not in 2xx range');
      }).then(function (response) {
        // If the API answer with code 2xx (success) and a JSON error message...
        if (response.error) {
          throw new Error('API fetch failed ' + response.error);
        }

        _this2.setState({
          avengerData: response
        });

        document.title = "".concat(_this2.ui.mainTitle, ": ").concat(_this2.state.avengerData.super_hero_name);
        log.info('API fetch successful!');
      })["catch"](function (error) {
        return log.debug('Error fetching url:', url, '->', error.message);
      });
    }
  }, {
    key: "getStatus",
    value: function getStatus(avengerData) {
      if (avengerData.status === 'active') {
        return 'actif';
      } else {
        return 'retiré';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var avengerData = this.state.avengerData;
      var heroImageUrl = this.api.heroImageUrl + this.hero_name_url;
      var charImageUrl = this.api.charImageUrl + this.hero_name_url;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Catalogue "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, avengerData.super_hero_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nom R\xE9el: ", avengerData.real_name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), "Status: ", this.getStatus(avengerData), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), "Age: ", avengerData.age, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), "Description: ", avengerData.description, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        rounded: true,
        fluid: true,
        className: "my-2",
        src: heroImageUrl,
        alt: "".concat(avengerData.super_hero_name, " picture")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        rounded: true,
        fluid: true,
        className: "my-2",
        src: charImageUrl,
        alt: "".concat(avengerData.real_name, " picture")
      })));
    }
  }]);

  return Catalog;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Catalog.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    path: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    params: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
      hero_name_url: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Catalog));

/***/ }),

/***/ "./front/js/components/Home.js":
/*!*************************************!*\
  !*** ./front/js/components/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _lib_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/Api */ "./front/js/lib/Api.js");
/* harmony import */ var _lib_UiParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/UiParams */ "./front/js/lib/UiParams.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @file Home component.
 */

/* External files */



/* Project files */




var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_10__["default"])('Home');

var Home = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    _this = _super.call(this, props);
    _this.state = {
      allAvengersData: []
    };
    _this.api = new _lib_Api__WEBPACK_IMPORTED_MODULE_8__["default"]();
    _this.ui = new _lib_UiParams__WEBPACK_IMPORTED_MODULE_9__["default"]();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.title = "".concat(this.ui.mainTitle, ": Accueil"); // Fetch preview data for all avengers

      fetch(this.api.avengerUrl).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw new Error('API fetch failed: HTTP status is not in 2xx range');
      }).then(function (response) {
        // If the API answer with code 2xx (success) and a JSON error message...
        if (response.error) {
          throw new Error('API fetch failed ' + response.error);
        }

        _this2.setState({
          allAvengersData: response
        });

        log.info('API fetch successful!');
      })["catch"](function (error) {
        return log.debug('Error fetching home page preview:', error.message);
      });
    }
  }, {
    key: "getStatus",
    value: function getStatus(avenger) {
      if (avenger.status === 'active') {
        return 'actif';
      } else {
        return 'retiré';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // At this point, the REST API has been fetched for all avengers, *not the hole data
      var allAvengersData = this.state.allAvengersData;
      var avengersHtml = allAvengersData.map(function (avenger, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: index,
          className: "avenger-preview"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
          rounded: true,
          fluid: true,
          src: _this3.api.heroImageUrl + avenger.url_string,
          alt: "".concat(avenger.super_hero_name, " picture")
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "avenger-preview"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
          to: "/catalog/".concat(avenger.url_string)
        }, " ", avenger.super_hero_name, " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), avenger.real_name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), "Status: ", _this3.getStatus(avenger), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null)));
      });
      var NoData = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aucune donn\xE9e disponible \xAF\\_(\u30C4)_/\xAF ");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "Home"
      }, allAvengersData.length > 0 ? avengersHtml : NoData);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./front/js/components/LoginCredentials.js":
/*!*************************************************!*\
  !*** ./front/js/components/LoginCredentials.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/Api */ "./front/js/lib/Api.js");
/* harmony import */ var _lib_UiParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/UiParams */ "./front/js/lib/UiParams.js");
/* harmony import */ var _lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/AuthToken.js */ "./front/js/lib/AuthToken.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @file Login component.
 */

/* External files */

 //import {withRouter} from 'react-router-dom';


/* Project files */





var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_13__["default"])('LoginCredentials');

var LoginCredentials = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LoginCredentials, _React$Component);

  var _super = _createSuper(LoginCredentials);

  function LoginCredentials(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LoginCredentials);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: '',
      userMsg: ''
    };
    _this.ui = new _lib_UiParams__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.api = new _lib_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.handleInputChange = _this.handleInputChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LoginCredentials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "".concat(this.ui.mainTitle, ": Connexion");
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var t = event.target;
      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, t.name, t.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault(); // If email or password is empty...

      if (this.state.email === '' || this.state.password === '') {
        return; // GET OUT OF HERE!
      }

      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      };
      fetch(this.api.authenticateUrl, requestOptions).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        _this2.setState({
          userMsg: ""
        });

        if (typeof jsonData.auth_token !== 'undefined') {
          Object(_lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_12__["setToken"])(jsonData.auth_token);
          log.info('User logged in.');

          _this2.setState({
            userMsg: "Vous \xEAtes maintenant connect\xE9."
          });

          _this2.props.userConnection(true); //props.history.push("/");

        } else if (typeof jsonData.error !== 'undefined') {
          if (typeof jsonData.error.user_authentication !== 'undefined') {
            if (jsonData.error.user_authentication === 'invalid credentials') {
              _this2.setState({
                userMsg: "Nom d'utilisateur ou mot de passe invalide"
              });
            }
          }
        }
      })["catch"](function (e) {
        var msgStr = "Une erreur est survenue lors de la connection. ";
        msgStr += "Vous pouvez essayer \xE0 nouveau.";

        _this2.setState({
          userMsg: msgStr
        });

        log.debug('No response from API');
      });
      this.setState({
        password: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var LinkToHome = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/"
      }, "Retour à la page d'accueil");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Login component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, " Nom d'utilisateur: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "email",
        value: this.state.email,
        onChange: this.handleInputChange
      })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, " Mot de passe: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleInputChange
      })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "submit",
        value: "Se connecter"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, " ", this.state.userMsg, " "), LinkToHome);
    }
  }]);

  return LoginCredentials;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

LoginCredentials.propTypes = {
  userConnection: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (LoginCredentials); //export default withRouter(LoginCredentials);

/***/ }),

/***/ "./front/js/components/LoginNavSwitch.js":
/*!***********************************************!*\
  !*** ./front/js/components/LoginNavSwitch.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _NewAvenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewAvenger */ "./front/js/components/NewAvenger.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");


/**
 * @file Navigation component.
 */

/* External files */
 //import Modal from 'react-modal';




/* Project files */



var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_6__["default"])('LoginNavSwitch'); // temporary...

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}; // Bind Modal to the root app so Modal can "hide" other components while it's openned 
//Modal.setAppElement(document.getElementById('app'));

var LoginNavSwitch = function LoginNavSwitch(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      newAvengerIsOpen = _React$useState2[0],
      setNewAvengerOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      redirectTarget = _React$useState4[0],
      setRedirectTarget = _React$useState4[1];

  function openNewAvenger() {
    setNewAvengerOpen(true);
  }

  function closeNewAvenger() {
    setNewAvengerOpen(false);
    var target = redirectTarget;

    if (target) {
      setRedirectTarget(null);
      props.history.push(target); // Patch: Utile en dernier recours si la chaîne export withrouter est brisée
      // (L'application est rechargée à nouveau)
      //props.history.go();
    }
  }

  if (props.userConnection == true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewAvenger__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setRedirectTarget: setRedirectTarget,
      handleClose: closeNewAvenger,
      show: newAvengerIsOpen
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownButton"], {
      id: "dropdown-item-button",
      title: "Menu",
      variant: "light",
      menuAlign: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Header, null, "Modifier le Wiki "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
      onClick: openNewAvenger
    }, "Ajouter un avenger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
      href: "/logout"
    }, "Se d\xE9connecter")));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
      href: "/login"
    }, "Se connecter");
  }
}; // Prop types -----------------------


LoginNavSwitch.propTypes = {
  userConnection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  openNewAvenger: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  closeNewAvenger: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(LoginNavSwitch));

/***/ }),

/***/ "./front/js/components/Logout.js":
/*!***************************************!*\
  !*** ./front/js/components/Logout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _lib_UiParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/UiParams */ "./front/js/lib/UiParams.js");
/* harmony import */ var _lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/AuthToken.js */ "./front/js/lib/AuthToken.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @file Login component.
 */

/* External files */



/* Project files */




var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_10__["default"])('Logout');

var Logout = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Logout, _React$Component);

  var _super = _createSuper(Logout);

  function Logout(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logout);

    _this = _super.call(this, props);
    _this.ui = new _lib_UiParams__WEBPACK_IMPORTED_MODULE_8__["default"]();
    Object(_lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_9__["clearToken"])();
    props.userConnection(false);
    log.info('User logged out.');
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Logout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "".concat(this.ui.mainTitle, ": D\xE9connexion...");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Vous \xEAtes maintenant d\xE9connect\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/"
      }, "Retour à la page d'accueil"));
    }
  }]);

  return Logout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Logout.propTypes = {
  userConnection: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./front/js/components/Navigation.js":
/*!*******************************************!*\
  !*** ./front/js/components/Navigation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");
/* harmony import */ var _LoginNavSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginNavSwitch */ "./front/js/components/LoginNavSwitch.js");
/**
 * @file Navigation component.
 */

/* External files */




/* Project files */



var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_4__["default"])('Navigation'); // IMPORTANT: This needs to be called inside a router component!

var Navigation = function Navigation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "light",
    variant: "light",
    sticky: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, null, "Avengers Wiki"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "top-navbar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "top-navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginNavSwitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userConnection: props.userConnection
  }))));
}; // <Navbar.Text className="m5" > username@domain.com </Navbar.Text> <span></span>
// Prop types -----------------------


Navigation.propTypes = {
  userConnection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Navigation));

/***/ }),

/***/ "./front/js/components/NewAvenger.js":
/*!*******************************************!*\
  !*** ./front/js/components/NewAvenger.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _lib_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Api */ "./front/js/lib/Api.js");
/* harmony import */ var _lib_UiParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/UiParams */ "./front/js/lib/UiParams.js");
/* harmony import */ var _lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AuthToken.js */ "./front/js/lib/AuthToken.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/logger */ "./front/js/utils/logger.js");


/**
 * @file NewAvenger component.
 * 
 * TODO Add protection from XSS attacks
 * Also add restrictions on inputs fields to prevent wrong usage 
 * ex: allowed caracters in avengers names
 */

/* External files */


/* Project files */





var log = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_6__["default"])('NewAvenger');

var NewAvenger = function NewAvenger(props) {
  var pageTitle = "Ajouter un avenger au wiki";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      heroName = _useState2[0],
      setHeroName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      realName = _useState4[0],
      setRealName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      userMsg = _useState6[0],
      setuserMsg = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('success'),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      alertColor = _useState8[0],
      setAlertColor = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      alertVisible = _useState10[0],
      setAlertVisible = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var ui = new _lib_UiParams__WEBPACK_IMPORTED_MODULE_4__["default"]();
    document.title = "".concat(ui.mainTitle, ": ").concat(pageTitle);
  });

  function handleSubmit(event) {
    event.preventDefault();
    var api = new _lib_Api__WEBPACK_IMPORTED_MODULE_3__["default"]();
    props.setRedirectTarget(null); // Default: no redirection

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Object(_lib_AuthToken_js__WEBPACK_IMPORTED_MODULE_5__["getToken"])()
      },
      body: JSON.stringify({
        super_hero_name: heroName,
        real_name: realName
      })
    };
    fetch(api.avengerUrl, requestOptions).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        // TODO: Manage the case where the token is expired
        // This would be needed for every api request... time to try axios ?
        var jsonData = response.json();

        if (typeof jsonData.error === 'string') {
          // {...}
          log.debug('Error: ' + jsonData.error);
        }

        throw new Error('Response code 401 unautorized is not managed yet');
      }

      throw new Error('API fetch failed: HTTP status is not in 2xx range');
    }).then(function (jsonData) {
      if (typeof jsonData.error === 'undefined') {
        setuserMsg("".concat(heroName, " cr\xE9\xE9 avec succ\xE8s"));
        setAlertVisible(true);
        setAlertColor('success'); // TODO: The API should return the new url instead of repeating the conversion
        // of hero_name to urls

        props.setRedirectTarget("/catalog/".concat(api.heroNameToUrl(heroName)));
      } else {
        setuserMsg("Erreur! Le avenger que vous tentez de cr\xE9er existe d\xE9j\xE0 dans la base de donn\xE9es.");
        setAlertVisible(true);
        setAlertColor('danger');
        log.info('Database error: ' + jsonData.error);
      }
    })["catch"](function (error) {
      var msgStr = "Une erreur est survenue lors de la connection au serveur. ";
      msgStr += "Vous pouvez essayer \xE0 nouveau.";
      setuserMsg(msgStr);
      log.debug('API request failed: ' + error);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    centered: true,
    show: props.show
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, null, pageTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Nom de h\xE9ro (obligatoire) : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    name: "heroname",
    value: heroName,
    onChange: function onChange(event) {
      return setHeroName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, " Nom r\xE9el : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    name: "realname",
    value: realName,
    onChange: function onChange(event) {
      return setRealName(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    show: alertVisible,
    variant: alertColor,
    onClose: function onClose() {
      return setAlertVisible(false);
    },
    dismissible: true
  }, userMsg))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    onClick: handleSubmit
  }, "Cr\xE9er"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    onClick: props.handleClose
  }, "Fermer"))));
};
/*
// With this code we get: "Uncaught Error: Too many re-renders."

function handleHide() {
  log.debug('handleHide() executed');
  setAlertVisible(false);
  props.handleClose;
}

return (      
  <div>
    <Modal centered show={props.show} onHide={handleHide()}>
      {...}
    </Modal >
  </div>
);

// Same error: "Uncaught Error: Too many re-renders." with:
 <Modal centered show={props.show} onHide={props.handleClose} onEntered={setAlertVisible(false)}>
// or...
 <Modal centered show={props.show} onHide={props.handleClose} onShow={setAlertVisible(false)}>
 // or...
 <Modal centered show={props.show} onHide={props.handleClose} onExited={setAlertVisible(false)}>

// Using a button, same error...
  function handleClose(handleClose) {
    log.debug('handleClose() executed');
    setAlertVisible(false);
    handleClose;
  }
  {...}
  <Modal.Footer>
    {...}
    <Button variant="secondary" onClick={handleClose(props.handleClose)}>Fermer</Button>
  </Modal.Footer>
          */
// Form.Control type="text" placeholder="Normal text" 


/* harmony default export */ __webpack_exports__["default"] = (NewAvenger);

/***/ }),

/***/ "./front/js/lib/Api.js":
/*!*****************************!*\
  !*** ./front/js/lib/Api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @file Api interface javascript class.
 */
var Api = /*#__PURE__*/function () {
  function Api() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Api);

    this.domainUrl = "http://127.0.0.1:3000/"; // domain/avenger

    this.avengerUrl = this.domainUrl + "avenger/";
    this.heroImageUrl = this.avengerUrl + 'heroimg/';
    this.charImageUrl = this.avengerUrl + 'charimg/'; // domain/user

    this.userUrl = this.domainUrl + 'user/'; // domain/authenticate

    this.authenticateUrl = 'authenticate/';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Api, [{
    key: "heroNameToUrl",
    value: function heroNameToUrl(heroName) {
      return heroName.toLowerCase().replace(' ', '_');
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./front/js/lib/AuthToken.js":
/*!***********************************!*\
  !*** ./front/js/lib/AuthToken.js ***!
  \***********************************/
/*! exports provided: getToken, setToken, clearToken, userAuthentified */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearToken", function() { return clearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAuthentified", function() { return userAuthentified; });
/**
 * Authentification token access
 * 
 * Security concerns: Same origin is requiered for access to local storage.
 * Origin: 2 elemets in the URL, 1) protocol, 2) host (domain), and 3) port
 * We also consider that myapp.maindomain.com is a different origin than maindomain.com
 */
function getToken() {
  return localStorage.getItem('aToken');
}

function setToken(userToken) {
  localStorage.setItem('aToken', userToken);
}

function clearToken() {
  localStorage.removeItem('aToken');
}

function userAuthentified() {
  if (typeof localStorage.getItem('aToken') === 'string') {
    // For a wiki website, there is no need to do more to prevent hacking
    // of the UI.  The real / effective protection is the API token decoding.
    return true;
  } else {
    // When the item 'aToken' does not exists, we get 'object' type
    return false;
  }
}



/***/ }),

/***/ "./front/js/lib/UiParams.js":
/*!**********************************!*\
  !*** ./front/js/lib/UiParams.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @file UiParams UI parameters class.
 */
var UiParams = function UiParams() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UiParams);

  this.mainTitle = 'Avengers Wiki';
};

/* harmony default export */ __webpack_exports__["default"] = (UiParams);

/***/ }),

/***/ "./front/js/utils/logger.js":
/*!**********************************!*\
  !*** ./front/js/utils/logger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var loglevel_plugin_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loglevel-plugin-prefix */ "./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js");
/* harmony import */ var loglevel_plugin_prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(loglevel_plugin_prefix__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @file Frontend logger.
 */


loglevel__WEBPACK_IMPORTED_MODULE_0___default.a.setLevel(loglevel__WEBPACK_IMPORTED_MODULE_0___default.a.levels.DEBUG);
loglevel_plugin_prefix__WEBPACK_IMPORTED_MODULE_1___default.a.reg(loglevel__WEBPACK_IMPORTED_MODULE_0___default.a);
loglevel_plugin_prefix__WEBPACK_IMPORTED_MODULE_1___default.a.apply(loglevel__WEBPACK_IMPORTED_MODULE_0___default.a, {
  template: '%t [%n] %l:'
});

var getLogger = function getLogger(name) {
  return loglevel__WEBPACK_IMPORTED_MODULE_0___default.a.getLogger(name);
};

/* harmony default export */ __webpack_exports__["default"] = (getLogger);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map