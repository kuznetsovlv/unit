(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"));
	else if(typeof define === 'function' && define.amd)
		define(["fs"], factory);
	else if(typeof exports === 'object')
		exports["unit"] = factory(require("fs"));
	else
		root["unit"] = factory(root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _exist = __webpack_require__(1);

	var _exist2 = _interopRequireDefault(_exist);

	var _isEqual = __webpack_require__(38);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _isEqualNonStrict = __webpack_require__(39);

	var _isEqualNonStrict2 = _interopRequireDefault(_isEqualNonStrict);

	var _isFalse = __webpack_require__(40);

	var _isFalse2 = _interopRequireDefault(_isFalse);

	var _isInstanceOf = __webpack_require__(41);

	var _isInstanceOf2 = _interopRequireDefault(_isInstanceOf);

	var _isLikeStructure = __webpack_require__(42);

	var _isLikeStructure2 = _interopRequireDefault(_isLikeStructure);

	var _isNaN = __webpack_require__(44);

	var _isNaN2 = _interopRequireDefault(_isNaN);

	var _isNill = __webpack_require__(45);

	var _isNill2 = _interopRequireDefault(_isNill);

	var _isNotNaN = __webpack_require__(46);

	var _isNotNaN2 = _interopRequireDefault(_isNotNaN);

	var _isNotNill = __webpack_require__(47);

	var _isNotNill2 = _interopRequireDefault(_isNotNill);

	var _isNotNull = __webpack_require__(48);

	var _isNotNull2 = _interopRequireDefault(_isNotNull);

	var _isNull = __webpack_require__(49);

	var _isNull2 = _interopRequireDefault(_isNull);

	var _isSameNotOrderedStructure = __webpack_require__(50);

	var _isSameNotOrderedStructure2 = _interopRequireDefault(_isSameNotOrderedStructure);

	var _isSameStructure = __webpack_require__(51);

	var _isSameStructure2 = _interopRequireDefault(_isSameStructure);

	var _isTrue = __webpack_require__(52);

	var _isTrue2 = _interopRequireDefault(_isTrue);

	var _isTypeOf = __webpack_require__(53);

	var _isTypeOf2 = _interopRequireDefault(_isTypeOf);

	var _notExist = __webpack_require__(54);

	var _notExist2 = _interopRequireDefault(_notExist);

	var _func = __webpack_require__(55);

	var _func2 = _interopRequireDefault(_func);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_exist2.default.drawResult();
	_isEqual2.default.drawResult();
	_isEqualNonStrict2.default.drawResult();
	_isFalse2.default.drawResult();
	_isInstanceOf2.default.drawResult();
	_isLikeStructure2.default.drawResult();
	_isNaN2.default.drawResult();
	_isNill2.default.drawResult();
	_isNotNaN2.default.drawResult();
	_isNotNill2.default.drawResult();
	_isNotNull2.default.drawResult();
	_isNull2.default.drawResult();
	_isSameNotOrderedStructure2.default.drawResult();
	_isSameStructure2.default.drawResult();
	_isTrue2.default.drawResult();
	_isTypeOf2.default.drawResult();
	_notExist2.default.drawResult();
	_func2.default.drawResult();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "exist"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'exist' })).addTest(new _index.Test({ arg: null, method: 'exist' })).addTest(new _index.Test({ arg: undefined, method: 'exist' })).addTest(new _index.Test({ arg: false, method: 'exist' })).addTest(new _index.Test({ arg: 0, method: 'exist' }));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Test = exports.Unit = undefined;

	var _Unit2 = __webpack_require__(3);

	var _Unit3 = _interopRequireDefault(_Unit2);

	var _Test2 = __webpack_require__(30);

	var _Test3 = _interopRequireDefault(_Test2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Unit = _Unit3.default;
	exports.Test = _Test3.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Unit = __webpack_require__(4);

	var _Unit2 = _interopRequireDefault(_Unit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Unit2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _printStr = __webpack_require__(5);

	var _printStr2 = _interopRequireDefault(_printStr);

	var _methods = __webpack_require__(7);

	var methods = _interopRequireWildcard(_methods);

	var _commiter = __webpack_require__(28);

	var _commiter2 = _interopRequireDefault(_commiter);

	var _Test = __webpack_require__(30);

	var _Test2 = _interopRequireDefault(_Test);

	var _date = __webpack_require__(32);

	var _printResult = __webpack_require__(35);

	var _printResult2 = _interopRequireDefault(_printResult);

	var _combineStyles = __webpack_require__(36);

	var _combineStyles2 = _interopRequireDefault(_combineStyles);

	var _defaultStyles = __webpack_require__(37);

	var defaultStyles = _interopRequireWildcard(_defaultStyles);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Class to create unit test set.
	 * @param {function} func - testing method.
	 * @param {string} description - test set`s description
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 */
	var Unit = function () {
		function Unit(func) {
			var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
			var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			_classCallCheck(this, Unit);

			if (typeof func !== 'function') throw new Error('Incorrect type of testing method. Must be a function.');

			this.description = description;

			this.method = func;

			this.context = context;

			this.tests = [];
		}

		/**
	  * Method to add test into series.
	  * @param {Test} test - test`s object.
	 	 * @returns {Unit} - this.
	  */


		_createClass(Unit, [{
			key: 'addTest',
			value: function addTest(test) {
				if (!(test instanceof _Test2.default)) throw new Error("Test object must be a type of Test class");

				var method = test.method;


				if (typeof method !== 'function' && !methods[method]) throw new Error('Unexisting test method ' + method);

				if (!this.tests) this.tests = [];

				this.tests.push(test);

				return this;
			}

			/**
	   * Method to perform tests.
	   * @returns {Unit} - this.s
	   */

		}, {
			key: 'commitTests',
			value: function commitTests() {
				var _this = this;

				var testStarted = new Date();

				var results = this.tests.map(function () {
					var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var args = result.args,
					    expectation = result.expectation,
					    method = result.method;

					var res = void 0;

					var methodType = typeof method === 'undefined' ? 'undefined' : _typeof(method);
					var methodFunc = methodType === 'function' ? method : methods[method]; //Real checking method.
					//Method's name
					var methodName = methodType === 'function' ? method.name || method.toLocaleString() || method.toString() : method;

					// Try to commit test
					try {
						res = (0, _commiter2.default)(methodFunc, _this.method, { args: args, expectation: expectation }, _this.context);
					} catch (e) {
						res = {
							error: e
						};
					}

					return _extends({}, result, { res: res, method: methodName });
				});

				this.result = {
					testStarted: testStarted,
					results: results,
					testFinished: new Date(),
					description: this.description,
					success: results.reduce(function (p) {
						var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						return p && r.res.success;
					}, true) // object ress property of element is guaranteed by commiter.
				};

				return this;
			}

			/**
	   * Method to return last result.
	   * @returns {object} - result.
	   */

		}, {
			key: 'getResult',
			value: function getResult() {
				return this.result ? this.result : this.commitTests().getResult();
			}

			/**
	   * Method to draw result.
	   * @param {boolean} [failsOnly = false] - if argument is true success tests would not be drawn.
	   * @param {object} [styles = {}] - list of display styles.
	   * @returns {Unit} - this.s
	   */

		}, {
			key: 'drawResult',
			value: function drawResult() {
				var failsOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
				var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var _getResult = this.getResult(),
				    testStarted = _getResult.testStarted,
				    _getResult$results = _getResult.results,
				    results = _getResult$results === undefined ? [] : _getResult$results,
				    testFinished = _getResult.testFinished,
				    description = _getResult.description,
				    success = _getResult.success;

				//Style definition


				var resStyle = _extends({}, defaultStyles, styles);
				var main = resStyle.main,
				    descr = resStyle.description,
				    empty = resStyle.empty,
				    date = resStyle.date,
				    duration = resStyle.duration,
				    scs = resStyle.success,
				    fail = resStyle.fail,
				    exept = resStyle.exeption,
				    sumStyle = resStyle.sum;

				// print('@bgBlack;'); // Main background for common

				var combineStyles = (0, _combineStyles2.default)('Reset', main);

				(0, _printStr2.default)('' + combineStyles(descr) + description + '\n'); // Output description

				var sum = results.length;


				if (!sum) {
					(0, _printStr2.default)(combineStyles(empty) + '@Underscore;NO TESTS SET!', 'final'); //No tests
				} else {
					// Timing
					(0, _printStr2.default)(combineStyles() + 'Test started at ' + combineStyles(date) + testStarted + ' ');
					(0, _printStr2.default)(combineStyles() + 'finished at ' + combineStyles(date) + testFinished + ', ');
					(0, _printStr2.default)('test took ' + combineStyles(duration) + (0, _date.msToHR)((0, _date.dateDiff)(testFinished, testStarted)) + '.\n');

					//Output results and getting new statistics.

					var _results$reduce = results.reduce(function () {
						var stat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
						var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						return (0, _printResult2.default)(result, stat, failsOnly, resStyle);
					}, { successes: 0, fails: 0, exeptions: 0 }),
					    successes = _results$reduce.successes,
					    fails = _results$reduce.fails,
					    exeptions = _results$reduce.exeptions;

					// const  sum = successes + fails + exeptions; 

					//Output statistics.


					(0, _printStr2.default)(combineStyles() + 'Statistic:\n');
					(0, _printStr2.default)(combineStyles(scs) + 'Successes: ' + successes + combineStyles() + ', ');
					(0, _printStr2.default)(combineStyles(fail) + 'Fails: ' + fails + combineStyles() + ', ');
					(0, _printStr2.default)(combineStyles(exept) + 'Exeptions: ' + exeptions + combineStyles() + '. ');
					(0, _printStr2.default)(combineStyles() + 'From ' + combineStyles(sumStyle) + sum + ' ' + combineStyles() + 'test' + (sum !== 1 ? 's' : '') + '.\n');
					(0, _printStr2.default)(combineStyles() + 'Result: ' + (success ? combineStyles(scs) + 'SUCCESS' : combineStyles(fail) + 'FAIL') + '!', 'final');
				}

				return this;
			}
		}]);

		return Unit;
	}();

	exports.default = Unit;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(6)):"function"==typeof define&&define.amd?define(["fs"],t):"object"==typeof exports?exports.print=t(require("fs")):e.print=t(e.fs)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(6),u=n(o);t.default=u.default},function(e,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(e){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"NaN":return NaN}return e&&/^\d*\.?\d*$/.test(e)?parseFloat(e):e}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(",").reduce(function(e,t){if(/^\w+=\w*$/.test(t)){var n=t.split("="),o=u(n,2),i=o[0],f=o[1];e[i]=r(f)}else e[t]=!0;return e},{})}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,f=e[Symbol.iterator]();!(n=(i=f.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&f.return&&f.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return"string"==typeof t?o({},e,n(t)):e},{})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return"object"===(void 0===t?"undefined":n(t))?r({},e,t):e},{})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="Black,Red,Green,Yellow,Blue,Magenta,Cyan,White".split(",")},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reset=0,t.Bright=1,t.Dim=2,t.Underscore=4,t.Blink=5,t.Reverse=7,t.Hidden=8},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r={};for(var n in e)r[""+t+n]="["+e[n]+"m";return r}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r={};return e.forEach(function(e,n){r[e]=n+t}),r}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(4),a=o(l),c=r(3),s=n(c),d=f({},u(a),u(i(s.default,30),"f"),u(i(s.default,40),"bg"));t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(7),u=n(o);t.default=u.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=(0,a.default)(r),i=(0,s.default)(r),l=i.noStyles,c=void 0!==l&&l,d=i.noVars,v=void 0!==d&&d,p=i.final,y=void 0!==p&&p,b=i.encoding,h=void 0===b?"utf8":b;return e=""+e,c||(e=e.replace(/\\?@\w+(?:,?\w*)*;/g,function(e){return"\\"===e.substr(0,1)?e.substr(1):e.substring(1,e.length-1).split(",").map(function(e){return f.default[e]||""}).join("")})),v||(e=e.replace(/\\?\$\w+;/g,function(e){return"\\"===e.substr(0,1)?e.substr(1):o[e.substring(1,e.length-1)]||e})),y&&(e=""+e+f.default.Reset+"\n"),(0,u.writeSync)(1,e,h)}Object.defineProperty(t,"__esModule",{value:!0});var u=r(8),i=r(5),f=n(i),l=r(2),a=n(l),c=r(1),s=n(c);t.default=o},function(e,t){e.exports=__webpack_require__(6)}])});

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEqual = __webpack_require__(8);

	Object.defineProperty(exports, 'isEqual', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isEqual).default;
	  }
	});

	var _isEqualNonStrict = __webpack_require__(9);

	Object.defineProperty(exports, 'isEqualNonStrict', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isEqualNonStrict).default;
	  }
	});

	var _exist = __webpack_require__(10);

	Object.defineProperty(exports, 'exist', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_exist).default;
	  }
	});

	var _notExist = __webpack_require__(11);

	Object.defineProperty(exports, 'notExist', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_notExist).default;
	  }
	});

	var _isNull = __webpack_require__(12);

	Object.defineProperty(exports, 'isNull', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNull).default;
	  }
	});

	var _isNotNull = __webpack_require__(13);

	Object.defineProperty(exports, 'isNotNull', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNotNull).default;
	  }
	});

	var _isNill = __webpack_require__(14);

	Object.defineProperty(exports, 'isNill', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNill).default;
	  }
	});

	var _isNotNill = __webpack_require__(15);

	Object.defineProperty(exports, 'isNotNill', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNotNill).default;
	  }
	});

	var _isNaN = __webpack_require__(16);

	Object.defineProperty(exports, 'isNaN', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNaN).default;
	  }
	});

	var _isNotNaN = __webpack_require__(17);

	Object.defineProperty(exports, 'isNotNaN', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNotNaN).default;
	  }
	});

	var _isTrue = __webpack_require__(18);

	Object.defineProperty(exports, 'isTrue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isTrue).default;
	  }
	});

	var _isFalse = __webpack_require__(19);

	Object.defineProperty(exports, 'isFalse', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isFalse).default;
	  }
	});

	var _isTypeOf = __webpack_require__(20);

	Object.defineProperty(exports, 'isTypeOf', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isTypeOf).default;
	  }
	});

	var _isInstanceOf = __webpack_require__(21);

	Object.defineProperty(exports, 'isInstanceOf', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isInstanceOf).default;
	  }
	});

	var _isSameStructure = __webpack_require__(22);

	Object.defineProperty(exports, 'isSameStructure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isSameStructure).default;
	  }
	});

	var _isSameNotOrderedStructure = __webpack_require__(25);

	Object.defineProperty(exports, 'isSameNotOrderedStructure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isSameNotOrderedStructure).default;
	  }
	});

	var _isLikeStructure = __webpack_require__(26);

	Object.defineProperty(exports, 'isLikeStructure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isLikeStructure).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests that first and second arguments are equal.
	 * @param {*} value - tested value.
	 * @param {expectation} - expected value.
	 * @return {boolean}
	 */
	exports.default = function (value, expectation) {
	  return value === expectation;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests that first and second arguments are equal.
	 * Method uses nonstrict comparison.
	 * @param {*} value - tested value.
	 * @param {expectation} - expected value.
	 * @return {boolean}
	 */
	exports.default = function (value, expectation) {
	  return value == expectation;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests that the first argument is not undefined.
	 * @param {*} v - tested argument.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v !== undefined;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests that the first argument is undefined.
	 * @param {*} v - tested argument.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v === undefined;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Checks first argument that it is null.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v === null;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Checks first argument that it is not null.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v !== null;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * The method checks if first argument is null or undefined.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v === null || v === undefined;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * The method checks that first argument is not null nor undefined.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v !== null && v !== undefined;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * The method checks if first argument is NaN.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v !== v;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * The method checks than first argument is not NaN.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return v === v;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests first argument if it can be interpreted as true.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return !!v;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests first argument if it can be interpreted as false.
	 * @param {*} v - tested value.
	 * @return {boolean}
	 */
	exports.default = function (v) {
	  return !v;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks first argument to be type of second argument.
	 * @param {*} value - tested argument.
	 * @param {string} expectation - expected value's type.
	 * @return {boolean}
	 */
	exports.default = function (value, expectation) {
	  return (typeof value === "undefined" ? "undefined" : _typeof(value)) === expectation;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Tests firsts argument if it instance of second.
	 * @param {*} value - tested argument.
	 * @param {function} expectation - expected constructor of value.
	 * @return {boolean}
	 */
	exports.default = function (value, expectation) {
	  return value instanceof expectation;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isSame = __webpack_require__(23);

	var _isSame2 = _interopRequireDefault(_isSame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checks that first and second argumetns are equal or have same strucrure. Functions are ignored.
	 * @param {*} value - checed value.
	 * @param {*} expectation - expected value.
	 * @return {boolean}
	 */
	exports.default = function (value, expectation) {
	  return (0, _isSame2.default)(value, expectation, true);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isSame;

	var _keys = __webpack_require__(24);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checks if two array have same structure.
	 * Ignores functions.
	 * @param {array} l - first argument
	 * @param {array} r - second argument
	 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
	 * @return {boolean}
	 */
	function isArrSame() {
	  var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var strictOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  if (l.length !== r.length) return false;

	  return l.every(function (x, i) {
	    return isEq(x, r[i], strictOrder);
	  });
	}

	/**
	 * Checks if two objects have same structure.
	 * Ignores functions.
	 * @param {object} l - first argument
	 * @param {object} r - second argument
	 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
	 * @return {boolean}
	 */
	function isObjSame() {
	  var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var strictOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  var lAr = (0, _keys2.default)(l);
	  var rAr = (0, _keys2.default)(r);

	  if (lAr.length !== rAr.length) return false;

	  if (!strictOrder) {
	    lAr.sort();
	    rAr.sort();
	  }

	  if (!lAr.every(function (x, i) {
	    return x === rAr[i];
	  })) return false;

	  return lAr.every(function (key) {
	    return isEq(l[key], r[key], strictOrder);
	  });
	}

	/**
	 * Checks if two objects have same structure.
	 * Ignores functions.
	 * @param {object} l - first argument
	 * @param {object} r - second argument
	 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
	 * @return {boolean}
	 */
	function isEqObj() {
	  var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var strictOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  var isArr = l instanceof Array;

	  if (isArr !== r instanceof Array) return false;

	  return isArr ? isArrSame(l, r, strictOrder) : isObjSame(l, r, strictOrder);
	}

	/**
	 * Checks if two arguments equal or (in oject case) have same structure.
	 * Ignores functions.
	 * @param {*} l - first argument
	 * @param {*} r - second argument
	 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
	 * @return {boolean}
	 */
	function isEq(l, r) {
	  var strictOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


	  //NaN case.
	  if (l !== l && r !== r) return true;

	  var tl = typeof l === 'undefined' ? 'undefined' : _typeof(l);
	  var tr = typeof r === 'undefined' ? 'undefined' : _typeof(r);

	  if (tl !== tr) return false;

	  switch (tl) {
	    case 'function':
	      return true;
	    case 'object':
	      return l ? isEqObj(l, r, strictOrder) : l === r;
	  }

	  return l === r;
	}

	/**
	 * Checks if two arguments equal or (in oject case) have same structure.
	 * Ignores functions.
	 * @param {*} l - first argument
	 * @param {*} r - second argument
	 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
	 * @return {boolean}
	 */
	function isSame(l, r) {
	  var strictOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


	  return isEq(l, r, strictOrder);
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keys;
	/**
	 * Converts object to array of it's fields.
	 * @param {object} obj - object to convert
	 * @return {array}
	 */
	function keys() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var arr = [];

	  for (var key in obj) {
	    arr.push(key);
	  }return arr;
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isSame = __webpack_require__(23);

	var _isSame2 = _interopRequireDefault(_isSame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checks that first and second argumetns are equal or have same strucrure. Order and functions are ignored.
	 * @param {*} value - checed value.
	 * @param {*} expectation - expected value.
	 * @return {boolean}
	 */
	exports.default = function (value, expectation) {
	  return (0, _isSame2.default)(value, expectation, false);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isLike = __webpack_require__(27);

	var _isLike2 = _interopRequireDefault(_isLike);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Tests first argument is equal to expectation or if they are objects it has properties from expectation and they are like.
	 */
	exports.default = function (value, expectation) {
	  return (0, _isLike2.default)(value, expectation);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isLike;
	/**
	 * Checks if first array has items like in second.
	 * @param {array} val - checked value
	 * @param {array} expect - contorl
	 * @return {boolean}
	 */
	function isLikeArr() {
	  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var expect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var length = expect.length;

	  if (val.length < length) return false;

	  return val.every(function (v, i) {
	    return _isLike(v, expect[i]) || i >= length;
	  });
	}

	/**
	 * Checks if first object has items like in second.
	 * @param {object} val - checked value
	 * @param {object} expect - contorl
	 * @return {boolean}
	 */
	function isLikeObj() {
	  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var expect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  for (var key in expect) {
	    if (!_isLike(val[key], expect[key])) return false;
	  }return true;
	}

	/**
	 * Checks if firstobject has properties from secod argument they are like.
	 * @param {object} val - checked value
	 * @param {object} expect - contorl
	 * @return {boolean}
	 */
	function isObjLike() {
	  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var expect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var isArr = val instanceof Array;

	  if (isArr !== expect instanceof Array) return false;

	  return isArr ? isLikeArr(val, expect) : isLikeObj(val, expect);
	}

	/**
	 * Checks if first argument equals second or if they are objects it has properties from secod argument and they are like.
	 * Ignores functions.
	 * @param {*} val - checked value
	 * @param {*} expect - contorl
	 * @return {boolean}
	 */
	function _isLike() {
	  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var expect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (val && val == expect) return true;

	  if (val !== val && expect !== expect) return true;

	  var tv = typeof val === 'undefined' ? 'undefined' : _typeof(val);
	  var te = typeof expect === 'undefined' ? 'undefined' : _typeof(expect);

	  if (tv !== te) return false;

	  switch (tv) {
	    case 'function':
	      return true;
	    case 'object':
	      return val ? isObjLike(val, expect) : val === expect;
	  }

	  return val === expect;
	}

	/**
	 * Checks if first argument equals second or if they are objects it has properties from secod argument and they are like.
	 * Ignores functions.
	 * @param {*} val - checked value
	 * @param {*} expect - contorl
	 * @return {boolean}
	 */
	function isLike() {
	  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var expect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return _isLike(val, expect);
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _commiter = __webpack_require__(29);

	var _commiter2 = _interopRequireDefault(_commiter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _commiter2.default;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = commiter;
	/**
	 * General method to commit tests.
	 * @param {function} isSuccess - result testing method.
	 * @param {function} func - function to be tested.
	 * @param {object} test - test`s object. This argument is guaranteed to be every time an object by the only calling in Unit,
	 * so we are able to use destructuring safely.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {*} test#expectation - expected result value.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function commiter(isSuccess, func, _ref) {
	  var _ref$args = _ref.args,
	      args = _ref$args === undefined ? [] : _ref$args,
	      expectation = _ref.expectation;
	  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var result = func.apply(context, args);

	  return { result: result, success: isSuccess(result, expectation) };
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Test = __webpack_require__(31);

	var _Test2 = _interopRequireDefault(_Test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Test2.default;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Class to create test.
	 * @param {object} test - test`s object.
	 * @param {*} [test#arg] - argument that function get.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {*} test#expectation - expected result value.
	 * @param {string | function} test#method - method name or checking method. Method has to return a bollean type.
	 */
	var Test = function Test() {
		var test = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Test);

		var arg = test.arg,
		    args = test.args,
		    expectation = test.expectation,
		    method = test.method;


		if (!method) throw new Error("Verification method is not specified");

		if (args && !(args instanceof Array)) throw new Error("args must be an Array or not defined");

		this.args = args || ('arg' in test ? [arg] : []);

		if ('expectation' in test) this.expectation = expectation;

		this.method = method;
	};

	exports.default = Test;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.dateDiff = undefined;
	exports.msToHR = msToHR;

	var _dd = __webpack_require__(33);

	var _dd2 = _interopRequireDefault(_dd);

	var _n = __webpack_require__(34);

	var _n2 = _interopRequireDefault(_n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Calculetes absolute difference between two dates.
	 * @param {Date} d1 - first date.
	 * @param {Date} d2 - second date.
	 * @return {number} - number of ms between two dates.
	 */
	var dateDiff = exports.dateDiff = function dateDiff(d1, d2) {
		return Math.abs(d1.getTime() - d2.getTime());
	};

	/**
	 * Converts number of milliseconds to human readable period.
	 * @param {number} ms - number of milliseconds.
	 * @return {string} - human readable period.
	 */
	function msToHR() {
		var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		var milliseconds = ms % 1000;
		ms = (0, _dd2.default)(ms, 1000);

		var seconds = ms % 60;
		ms = (0, _dd2.default)(ms, 60);

		var minutes = ms % 60;
		ms = (0, _dd2.default)(ms, 60);

		var hours = ms % 24;
		var days = (0, _dd2.default)(ms, 24);

		var str = [];

		if (days) str.push(days + ' day' + (days > 1 ? 's' : ''));
		if (hours || days) str.push((0, _n2.default)(hours, 2) + ' h');
		if (minutes || hours || days) str.push((0, _n2.default)(minutes) + ' m');
		if (seconds || minutes || hours || days) str.push((0, _n2.default)(seconds, 2) + ' s');
		str.push((0, _n2.default)(milliseconds, 3) + ' ms');

		return str.join(' ');
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = dd;
	/**
	 * Divisible division method.
	 * @param {number} n - dividend.
	 * @param {number} div - divider.
	 * @return {number} quotient.
	 */
	function dd(n, div) {
	  return n / div >> 0;
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = n;
	/**
	 * Formats number to stundard length;
	 * @param {number} num - number to be formated.
	 * @param {number} len - needed length;
	 * @return {string} - formated number.
	 */
	function n() {
		var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

		if (len < 1) len = 1;

		var zeros = [];

		for (var i = 0; i < len; ++i) {
			zeros.push(0);
		}return ('' + zeros.join('') + num).substr(-len);
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = printResult;

	var _printStr = __webpack_require__(5);

	var _printStr2 = _interopRequireDefault(_printStr);

	var _combineStyles = __webpack_require__(36);

	var _combineStyles2 = _interopRequireDefault(_combineStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts single argument to string.
	 * @param {*} arg - argument.
	 * @returns {string}
	 */
	function argToStr(arg) {
		var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

		if (argType === 'function') return 'function: ' + (arg.name || arg.toLocaleString() || arg.toString());

		if (argType === 'string') return '"' + arg + '"';

		if (!arg || argType !== 'object') return '' + arg;

		if (arg instanceof Array) return '[' + arg.map(function (x) {
			return argToStr(x);
		}).join(', ') + ']';

		if ((arg.prototype || arg).toString !== Object.prototype.toString) return arg.toString();

		var keys = [];

		for (var key in arg) {
			keys.push(key + ': ' + argToStr(arg[key]));
		}return '{' + keys.join(', ') + '}';
	}

	/**
	 * Converts args to string.
	 * @param {array} args - array of arguments.
	 * @param {string} style - style to display args.
	 * @returns {string}
	 */
	function parseArgs() {
		var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var style = arguments[1];

		switch (args.length) {
			case 0:
				return '${style}no arguments';
			case 1:
				return style + ': ' + argToStr(args[0]);
		}

		return 'arguments: ' + style + args.map(function (arg) {
			return argToStr(arg);
		}).join(', ');
	}

	/**
	 * Describes expectation.
	 * @param {*} expectation - expected value.
	 * @param {string} method - method to check.
	 * @param {string} expectation - expectation's style
	 * @param {string} base - base style
	 * @returns {string}
	 */
	function describeExpectation(expectation, method, expectationStyle, baseStyle) {
		var endStr = '' + expectationStyle + argToStr(expectation) + baseStyle + '. ';

		switch (method) {
			case 'isTypeOf':
				return 'Expected that value is type of ' + endStr;
			case 'isInstanceOf':
				return 'Expected that value is instance of ' + endStr;
			case 'isSameNotOrderedStructure':
			case 'isSameStructure':
				return 'Expected that value has same structure with ' + endStr;
			case 'isLikeStructure':
				return 'Expected that value equals or has properties from ' + endStr;
			default:
				return 'Expected value is ' + endStr;
		}
	}

	/**
	 * Parses result.
	 * @param {object} res - result.
	 * @param {object} styles - display stiles
	 * @returns {string}
	 */
	function parseRes() {
		var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var result = res.result,
		    success = res.success,
		    error = res.error;
		var baseStyle = styles.baseStyle,
		    resultStyle = styles.result,
		    errStyle = styles.error,
		    successStyle = styles.success,
		    failStyle = styles.fail;


		var str = [];

		if ('result' in res) str.push(baseStyle + 'Resulted value ' + resultStyle + argToStr(result) + baseStyle + '.');
		if (error) {
			str.push('' + errStyle + (error.message || error) + '!');
		} else {
			str.push(success ? successStyle + 'Success!' : failStyle + 'Fail!');
		}

		return str.join(' ');
	}

	/**
	 * Output test result data.
	 * @param {object} result - result data to output, existing and structure guaranteed by only calling at Utin.drawResult.
	 * @param {object} stat - statistics data, existing and structure guaranteed by only calling at Utin.drawResult.
	 * @param {boolean} [failsOnly = false] - if argument is true success tests would not be drawn.
	 * @param {object} [styles = {}] - list of display styles.
	 * @returns {object} - new statistics.
	 */
	function printResult() {
		var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var _ref = arguments[1];
		var _ref$successes = _ref.successes,
		    successes = _ref$successes === undefined ? 0 : _ref$successes,
		    _ref$fails = _ref.fails,
		    fails = _ref$fails === undefined ? 0 : _ref$fails,
		    _ref$exeptions = _ref.exeptions,
		    exeptions = _ref$exeptions === undefined ? 0 : _ref$exeptions;
		var failsOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
		var styles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		var _result$args = result.args,
		    args = _result$args === undefined ? [] : _result$args,
		    expectation = result.expectation,
		    method = result.method,
		    _result$res = result.res,
		    res = _result$res === undefined ? {} : _result$res;
		var main = styles.main,
		    resultBase = styles.resultBase,
		    testIndex = styles.testIndex,
		    methodName = styles.methodName,
		    argStyle = styles.args,
		    expect = styles.expectation,
		    scs = styles.success,
		    fail = styles.fail,
		    err = styles.exeption,
		    resultValue = styles.resultValue;


		var combineStyles = (0, _combineStyles2.default)('Reset', main, resultBase);

		var baseStyle = combineStyles();

		var index = successes + fails + exeptions; // result's index

		// Getting new statistics
		if (res.error) {
			++exeptions;
		} else if (res.success) {
			++successes;
			if (failsOnly) // if failsOnly is true all successes have to be not drawn
				return { successes: successes, fails: fails, exeptions: exeptions };
		} else {
			++fails;
		}

		(0, _printStr2.default)('' + combineStyles(testIndex) + index + '. ' + baseStyle + 'Function called with ' + parseArgs(args, combineStyles(argStyle)) + baseStyle + '. ');
		(0, _printStr2.default)(baseStyle + 'Function checked by method ' + combineStyles(methodName) + method + baseStyle + '. ');

		if ('expectation' in result) {
			(0, _printStr2.default)(describeExpectation(expectation, method, combineStyles(expect), baseStyle));
		}

		(0, _printStr2.default)(parseRes(res, { baseStyle: baseStyle, success: combineStyles(scs), fail: combineStyles(fail), error: combineStyles(err), result: combineStyles(resultValue) }) + '\n');

		return { successes: successes, fails: fails, exeptions: exeptions };
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Creates style combiner.
	 */
	exports.default = function () {
	  for (var _len = arguments.length, initials = Array(_len), _key = 0; _key < _len; _key++) {
	    initials[_key] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      styles[_key2] = arguments[_key2];
	    }

	    return '@' + initials.concat(styles).join(',') + ';';
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var main = exports.main = 'bgBlack,fBlue'; // Main style

	var description = exports.description = 'fWhite'; // Description style

	var empty = exports.empty = 'fWhite'; // Style of non test message

	var date = exports.date = 'fMagenta'; // Date's style

	var duration = exports.duration = 'fCyan'; // Duration's style

	var success = exports.success = 'fGreen'; // Success style

	var fail = exports.fail = 'fRed'; // Fail style

	var exeption = exports.exeption = 'fRed'; // Exeption style

	var sum = exports.sum = 'fCyan'; // Test sum style

	var testIndex = exports.testIndex = 'fBlue'; // Style of test's index

	var resultBase = exports.resultBase = 'fYellow'; // Result's base style

	var methodName = exports.methodName = 'fMagenta'; // Method name display style

	var args = exports.args = 'fMagenta'; // Argument's style

	var expectation = exports.expectation = 'fMagenta'; // Expectations's style

	var resultValue = exports.resultValue = 'fMagenta'; // Result value style

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isEqual"');

	exports.default = testUnit.addTest(new _index.Test({ arg: 4, expectation: 4, method: 'isEqual' })).addTest(new _index.Test({ arg: 4, expectation: '4', method: 'isEqual' })).addTest(new _index.Test({ arg: '4', expectation: 4, method: 'isEqual' })).addTest(new _index.Test({ arg: '4', expectation: '4', method: 'isEqual' })).addTest(new _index.Test({ arg: 4, expectation: 8, method: 'isEqual' }));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isEqualNonStrict"');

	exports.default = testUnit.addTest(new _index.Test({ arg: 4, expectation: 4, method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: 4, expectation: '4', method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: '4', expectation: 4, method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: '4', expectation: '4', method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: 4, expectation: 8, method: 'isEqualNonStrict' }));

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isFalse"');

	exports.default = testUnit.addTest(new _index.Test({ arg: null, method: 'isFalse' })).addTest(new _index.Test({ arg: undefined, method: 'isFalse' })).addTest(new _index.Test({ arg: NaN, method: 'isFalse' })).addTest(new _index.Test({ arg: 0, method: 'isFalse' })).addTest(new _index.Test({ arg: '', method: 'isFalse' })).addTest(new _index.Test({ arg: true, method: 'isFalse' })).addTest(new _index.Test({ arg: false, method: 'isFalse' })).addTest(new _index.Test({ arg: '0', method: 'isFalse' })).addTest(new _index.Test({ arg: 'false', method: 'isFalse' })).addTest(new _index.Test({ arg: 'true', method: 'isFalse' }));

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isInstanceOf"');

	exports.default = testUnit.addTest(new _index.Test({ arg: {}, expectation: Object, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: {}, expectation: Array, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: [], expectation: Array, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: [], expectation: Object, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: new Date(), expectation: Object, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: new Date(), expectation: Date, method: 'isInstanceOf' }));

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _test_data = __webpack_require__(43);

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isLikeStructure"');

	exports.default = testUnit.addTest(new _index.Test({ arg: 5, method: 'isLikeStructure', expectation: 5 })).addTest(new _index.Test({ arg: 5, method: 'isLikeStructure', expectation: '5' })).addTest(new _index.Test({ arg: '5', method: 'isLikeStructure', expectation: 5 })).addTest(new _index.Test({ arg: '5', method: 'isLikeStructure', expectation: '5' })).addTest(new _index.Test({ arg: 6, method: 'isLikeStructure', expectation: 5 })).addTest(new _index.Test({ arg: 'string', method: 'isLikeStructure', expectation: '5' })).addTest(new _index.Test({ arg: undefined, method: 'isLikeStructure', expectation: undefined })).addTest(new _index.Test({ arg: null, method: 'isLikeStructure', expectation: null })).addTest(new _index.Test({ arg: NaN, method: 'isLikeStructure', expectation: NaN })).addTest(new _index.Test({ arg: null, method: 'isLikeStructure', expectation: {} })).addTest(new _index.Test({ arg: null, method: 'isLikeStructure', expectation: undefined })).addTest(new _index.Test({ arg: {}, method: 'isLikeStructure', expectation: {} })).addTest(new _index.Test({ arg: [], method: 'isLikeStructure', expectation: {} })).addTest(new _index.Test({ arg: [], method: 'isLikeStructure', expectation: [] })).addTest(new _index.Test({ arg: new Date(), method: 'isLikeStructure', expectation: {} })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: [0, 1, 2, 3, 4] })).addTest(new _index.Test({ arg: [0, 1, 2], method: 'isLikeStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 2, 1, 3], method: 'isLikeStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isLikeStructure', expectation: { '0': 0, '1': 1, '2': 2, '3': 3 } })).addTest(new _index.Test({ arg: { '0': 0, '1': 1, '2': 2, '3': 3 }, method: 'isLikeStructure', expectation: { '0': 0, '1': 1, '2': 2, '3': 3 } })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isLikeStructure', expectation: _extends({}, _test_data.test_obj_1) })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isLikeStructure', expectation: _extends({}, _test_data.test_obj_2) })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_2), method: 'isLikeStructure', expectation: _test_data.test_obj_2 })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isLikeStructure', expectation: _extends({}, _test_data.test_obj_3) }));

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	var test_obj_1 = exports.test_obj_1 = {
	     item1: 2,
	     item2: '3',
	     item3: [],
	     test: 'test',
	     any: false,
	     obj: {
	          test: 123,
	          arr: [12, 3, 'test', {}, [1, 2, 7, { d: 2 }], ''],
	          obj: {
	               'null': null,
	               nan: NaN,
	               u: undefined,
	               'true': true
	          }
	     }
	};

	var test_obj_2 = exports.test_obj_2 = {
	     item_1: 2,
	     item2: '3',
	     item3: [],
	     test: 'test',
	     any: false,
	     obj: {
	          test: 123,
	          arr: [12, 3, 'test', {}, [1, 2, 7, { d: 2 }], ''],
	          obj: {
	               'null': null,
	               nan: NaN,
	               u: undefined,
	               'true': true
	          }
	     }
	};

	var test_obj_3 = exports.test_obj_3 = {
	     item2: '3',
	     item1: 2,
	     item3: [],
	     test: 'test',
	     any: false,
	     obj: {
	          test: 123,
	          arr: [12, 3, 'test', {}, [1, 2, 7, { d: 2 }], ''],
	          obj: {
	               'null': null,
	               nan: NaN,
	               u: undefined,
	               'true': true
	          }
	     }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isNaN"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'isNaN' })).addTest(new _index.Test({ arg: null, method: 'isNaN' })).addTest(new _index.Test({ arg: undefined, method: 'isNaN' })).addTest(new _index.Test({ arg: false, method: 'isNaN' })).addTest(new _index.Test({ arg: 0, method: 'isNaN' }));

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isNill"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'isNill' })).addTest(new _index.Test({ arg: null, method: 'isNill' })).addTest(new _index.Test({ arg: undefined, method: 'isNill' })).addTest(new _index.Test({ arg: false, method: 'isNill' })).addTest(new _index.Test({ arg: 0, method: 'isNill' }));

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isNotNaN"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'isNotNaN' })).addTest(new _index.Test({ arg: null, method: 'isNotNaN' })).addTest(new _index.Test({ arg: undefined, method: 'isNotNaN' })).addTest(new _index.Test({ arg: false, method: 'isNotNaN' })).addTest(new _index.Test({ arg: 0, method: 'isNotNaN' }));

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isNotNill"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'isNotNill' })).addTest(new _index.Test({ arg: null, method: 'isNotNill' })).addTest(new _index.Test({ arg: undefined, method: 'isNotNill' })).addTest(new _index.Test({ arg: false, method: 'isNotNill' })).addTest(new _index.Test({ arg: 0, method: 'isNotNill' }));

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isNotNull"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'isNotNull' })).addTest(new _index.Test({ arg: null, method: 'isNotNull' })).addTest(new _index.Test({ arg: undefined, method: 'isNotNull' })).addTest(new _index.Test({ arg: false, method: 'isNotNull' })).addTest(new _index.Test({ arg: 0, method: 'isNotNull' }));

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isNull"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'isNull' })).addTest(new _index.Test({ arg: null, method: 'isNull' })).addTest(new _index.Test({ arg: undefined, method: 'isNull' })).addTest(new _index.Test({ arg: false, method: 'isNull' })).addTest(new _index.Test({ arg: 0, method: 'isNull' }));

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _test_data = __webpack_require__(43);

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isSameNotOrderedStructure"');

	exports.default = testUnit.addTest(new _index.Test({ arg: 5, method: 'isSameNotOrderedStructure', expectation: 5 })).addTest(new _index.Test({ arg: 5, method: 'isSameNotOrderedStructure', expectation: '5' })).addTest(new _index.Test({ arg: '5', method: 'isSameNotOrderedStructure', expectation: 5 })).addTest(new _index.Test({ arg: '5', method: 'isSameNotOrderedStructure', expectation: '5' })).addTest(new _index.Test({ arg: 6, method: 'isSameNotOrderedStructure', expectation: 5 })).addTest(new _index.Test({ arg: 'string', method: 'isSameNotOrderedStructure', expectation: '5' })).addTest(new _index.Test({ arg: undefined, method: 'isSameNotOrderedStructure', expectation: undefined })).addTest(new _index.Test({ arg: null, method: 'isSameNotOrderedStructure', expectation: null })).addTest(new _index.Test({ arg: NaN, method: 'isSameNotOrderedStructure', expectation: NaN })).addTest(new _index.Test({ arg: null, method: 'isSameNotOrderedStructure', expectation: {} })).addTest(new _index.Test({ arg: null, method: 'isSameNotOrderedStructure', expectation: undefined })).addTest(new _index.Test({ arg: {}, method: 'isSameNotOrderedStructure', expectation: {} })).addTest(new _index.Test({ arg: [], method: 'isSameNotOrderedStructure', expectation: {} })).addTest(new _index.Test({ arg: [], method: 'isSameNotOrderedStructure', expectation: [] })).addTest(new _index.Test({ arg: new Date(), method: 'isSameNotOrderedStructure', expectation: {} })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3, 4] })).addTest(new _index.Test({ arg: [0, 1, 2], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 2, 1, 3], method: 'isSameNotOrderedStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isSameNotOrderedStructure', expectation: { '0': 0, '1': 1, '2': 2, '3': 3 } })).addTest(new _index.Test({ arg: { '0': 0, '1': 1, '2': 2, '3': 3 }, method: 'isSameNotOrderedStructure', expectation: { '0': 0, '1': 1, '2': 2, '3': 3 } })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isSameNotOrderedStructure', expectation: _extends({}, _test_data.test_obj_1) })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isSameNotOrderedStructure', expectation: _extends({}, _test_data.test_obj_2) })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_2), method: 'isSameNotOrderedStructure', expectation: _test_data.test_obj_2 })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isSameNotOrderedStructure', expectation: _extends({}, _test_data.test_obj_3) }));

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _test_data = __webpack_require__(43);

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isSameStructure"');

	exports.default = testUnit.addTest(new _index.Test({ arg: 5, method: 'isSameStructure', expectation: 5 })).addTest(new _index.Test({ arg: 5, method: 'isSameStructure', expectation: '5' })).addTest(new _index.Test({ arg: '5', method: 'isSameStructure', expectation: 5 })).addTest(new _index.Test({ arg: '5', method: 'isSameStructure', expectation: '5' })).addTest(new _index.Test({ arg: 6, method: 'isSameStructure', expectation: 5 })).addTest(new _index.Test({ arg: 'string', method: 'isSameStructure', expectation: '5' })).addTest(new _index.Test({ arg: undefined, method: 'isSameStructure', expectation: undefined })).addTest(new _index.Test({ arg: null, method: 'isSameStructure', expectation: null })).addTest(new _index.Test({ arg: NaN, method: 'isSameStructure', expectation: NaN })).addTest(new _index.Test({ arg: null, method: 'isSameStructure', expectation: {} })).addTest(new _index.Test({ arg: null, method: 'isSameStructure', expectation: undefined })).addTest(new _index.Test({ arg: {}, method: 'isSameStructure', expectation: {} })).addTest(new _index.Test({ arg: [], method: 'isSameStructure', expectation: {} })).addTest(new _index.Test({ arg: [], method: 'isSameStructure', expectation: [] })).addTest(new _index.Test({ arg: new Date(), method: 'isSameStructure', expectation: {} })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isSameStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isSameStructure', expectation: [0, 1, 2, 3, 4] })).addTest(new _index.Test({ arg: [0, 1, 2], method: 'isSameStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 2, 1, 3], method: 'isSameStructure', expectation: [0, 1, 2, 3] })).addTest(new _index.Test({ arg: [0, 1, 2, 3], method: 'isSameStructure', expectation: { '0': 0, '1': 1, '2': 2, '3': 3 } })).addTest(new _index.Test({ arg: { '0': 0, '1': 1, '2': 2, '3': 3 }, method: 'isSameStructure', expectation: { '0': 0, '1': 1, '2': 2, '3': 3 } })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isSameStructure', expectation: _extends({}, _test_data.test_obj_1) })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isSameStructure', expectation: _extends({}, _test_data.test_obj_2) })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_2), method: 'isSameStructure', expectation: _test_data.test_obj_2 })).addTest(new _index.Test({ arg: _extends({}, _test_data.test_obj_1), method: 'isSameStructure', expectation: _extends({}, _test_data.test_obj_3) }));

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isTrue"');

	exports.default = testUnit.addTest(new _index.Test({ arg: null, method: 'isTrue' })).addTest(new _index.Test({ arg: undefined, method: 'isTrue' })).addTest(new _index.Test({ arg: NaN, method: 'isTrue' })).addTest(new _index.Test({ arg: 0, method: 'isTrue' })).addTest(new _index.Test({ arg: '', method: 'isTrue' })).addTest(new _index.Test({ arg: true, method: 'isTrue' })).addTest(new _index.Test({ arg: false, method: 'isTrue' })).addTest(new _index.Test({ arg: '0', method: 'isTrue' })).addTest(new _index.Test({ arg: 'false', method: 'isTrue' })).addTest(new _index.Test({ arg: 'true', method: 'isTrue' }));

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "isTypeOf"');

	exports.default = testUnit.addTest(new _index.Test({ arg: null, expectation: 'null', method: 'isTypeOf' })).addTest(new _index.Test({ arg: null, expectation: 'object', method: 'isTypeOf' })).addTest(new _index.Test({ arg: undefined, expectation: 'undefined', method: 'isTypeOf' })).addTest(new _index.Test({ arg: undefined, expectation: 'object', method: 'isTypeOf' })).addTest(new _index.Test({ arg: { a: 2 }, expectation: 'object', method: 'isTypeOf' })).addTest(new _index.Test({ arg: [1, 2], expectation: 'object', method: 'isTypeOf' })).addTest(new _index.Test({ arg: { a: 2 }, expectation: 'array', method: 'isTypeOf' })).addTest(new _index.Test({ arg: [1, 2], expectation: 'array', method: 'isTypeOf' })).addTest(new _index.Test({ arg: { a: 2 }, expectation: 'object', method: 'isTypeOf' })).addTest(new _index.Test({ arg: new Date(), expectation: 'object', method: 'isTypeOf' })).addTest(new _index.Test({ arg: new Date(), expectation: 'date', method: 'isTypeOf' })).addTest(new _index.Test({ arg: new Date(), expectation: 'Date', method: 'isTypeOf' }));

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                       value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	                       return x;
	}, 'Check "notExist"');

	exports.default = testUnit.addTest(new _index.Test({ arg: NaN, method: 'notExist' })).addTest(new _index.Test({ arg: null, method: 'notExist' })).addTest(new _index.Test({ arg: undefined, method: 'notExist' })).addTest(new _index.Test({ arg: false, method: 'notExist' })).addTest(new _index.Test({ arg: 0, method: 'notExist' }));

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	          value: true
	});

	var _index = __webpack_require__(2);

	var testUnit = new _index.Unit(function (x) {
	          return x;
	}, 'Check "functional methods"');

	exports.default = testUnit.addTest(new _index.Test({ arg: 4, expectation: 4, method: function alwaysTrue() {
	                    return true;
	          } })).addTest(new _index.Test({ arg: 4, expectation: '4', method: function method() {
	                    return true;
	          } })).addTest(new _index.Test({ arg: '4', expectation: 4, method: function alwaysFalse() {
	                    return false;
	          } })).addTest(new _index.Test({ arg: '4', expectation: '4', method: function method() {
	                    return false;
	          } })).addTest(new _index.Test({ args: [1, 2, 3, 4], method: function method() {
	                    throw new Error('Test expectation.');
	          } }));

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map