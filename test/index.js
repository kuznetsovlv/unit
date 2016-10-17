/******/ (function(modules) { // webpackBootstrap
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

	var _index = __webpack_require__(1);

	var testUnit = new _index.Unit(function (x) {
		return x;
	}, 'Library test 1');
	var testUnit2 = new _index.Unit(function (x) {
		return x;
	}, 'Library test 2');
	var testUnit3 = new _index.Unit(function (x) {
		throw new Error('Test Error.');
	}, 'Library test 3');
	var testUnit4 = new _index.Unit(function (x) {
		return x;
	}, 'Library test 4');

	testUnit.addTest(new _index.Test({
		arg: 5,
		expectation: 5,
		method: 'isEqual'
	})).addTest(new _index.Test({
		arg: 5,
		expectation: 6,
		method: 'isEqual'
	})).drawResult();

	testUnit2.addTest(new _index.Test({
		arg: 5,
		expectation: 5,
		method: 'isEqual'
	})).addTest(new _index.Test({
		arg: 6,
		expectation: 6,
		method: 'isEqual'
	})).drawResult();

	testUnit3.addTest(new _index.Test({
		args: [4, 8],
		expectation: 10,
		method: 'isEqual'
	})).addTest(new _index.Test({
		arg: [4, 8],
		expectation: 10,
		method: 'isEqual'
	})).drawResult().addTest(new _index.Test({
		arg: 14,
		expectation: 12,
		method: 'isEqual'
	}));

	testUnit4.drawResult();

	testUnit.drawResult(true);
	testUnit2.drawResult(true);
	testUnit3.drawResult(true).commitTests().drawResult();
	testUnit4.drawResult(true);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Unit = __webpack_require__(2);

	Object.defineProperty(exports, 'Unit', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Unit).default;
	  }
	});

	var _Test = __webpack_require__(6);

	Object.defineProperty(exports, 'Test', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Test).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Unit = __webpack_require__(3);

	var _Unit2 = _interopRequireDefault(_Unit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Unit2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _methods = __webpack_require__(4);

	var methods = _interopRequireWildcard(_methods);

	var _Test = __webpack_require__(6);

	var _Test2 = _interopRequireDefault(_Test);

	var _styles = __webpack_require__(8);

	var _date = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Converts single argument to string.
	 * @param {*} arg - argument.
	 * @return {string}
	 */
	function argToStr(arg) {
		if (!arg || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== 'object') return '' + arg;

		if (arg instanceof Array) return '[' + arg.map(function (x) {
			return argToStr(x);
		}).join(', ') + ']';

		var keys = [];

		for (var key in arg) {
			keys.push(key + ': ' + argToStr(arg[key]));
		}return '{' + keys.join(', ') + '}';
	}

	/**
	 * Converts args to string.
	 * @param {array} args - array of arguments.
	 * @return {string}
	 */
	function argsToStr() {
		var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		if (args.length < 2) return '' + _styles.fontColors.Magenta + (args[0] === undefined ? 'no arguments' : argToStr(args[0]));

		return ['arguments:' + _styles.fontColors.Magenta, args.map(function (arg) {
			return argToStr(arg);
		}).join(', ')].join(' ');
	}

	/**
	 * Parses result.
	 * @param {object} res - result.
	 * @return {string}
	 */
	function parseRes() {
		var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var result = res.result;
		var success = res.success;
		var error = res.error;


		var str = [];

		if ('result' in res) str.push(_styles.fontColors.Yellow + 'Resulted value ' + _styles.fontColors.Magenta + argToStr(result) + _styles.fontColors.Yellow + '.');
		if (error) {
			str.push('' + _styles.fontColors.Red + (error.message || error) + '!');
		} else {
			str.push(success ? _styles.fontColors.Green + 'Success!' : _styles.fontColors.Red + 'Fail!');
		}

		return str.join(' ');
	}

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
	 	 * @return {Unit} - this.
	  */


		_createClass(Unit, [{
			key: 'addTest',
			value: function addTest(test) {
				if (!(test instanceof _Test2.default)) throw new Error("Test object must be a type of Test class");

				var method = test.method;


				if (!methods[method]) throw new Error('Unexisting test method ' + method);

				if (!this.tests) this.tests = [];

				this.tests.push(test);

				return this;
			}

			/**
	   * Method to perform tests.
	   * @return {Unit} - this.s
	   */

		}, {
			key: 'commitTests',
			value: function commitTests() {
				var _this = this;

				var testStarted = new Date();

				var results = this.tests.map(function (_ref) {
					var args = _ref.args;
					var expectation = _ref.expectation;
					var method = _ref.method;

					var res = void 0;

					try {
						res = methods[method](_this.method, { args: args, expectation: expectation }, _this.context);
					} catch (e) {
						res = {
							error: e
						};
					}

					return { args: args, expectation: expectation, method: method, res: res };
				});

				this.result = {
					testStarted: testStarted,
					results: results,
					testFinished: new Date(),
					description: this.description
				};

				return this;
			}

			/**
	   * Method to return last result.
	   * @return {object} - result.
	   */

		}, {
			key: 'getResult',
			value: function getResult() {
				return this.result ? this.result : this.commitTests().getResult();
			}

			/**
	   * Method to draw result.
	   * @param {boolean} [failsOnly = false] - if argument is true success tests would not be drawn.
	   * @return {Unit} - this.s
	   */

		}, {
			key: 'drawResult',
			value: function drawResult() {
				var failsOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

				var _getResult = this.getResult();

				var testStarted = _getResult.testStarted;
				var _getResult$results = _getResult.results;
				var results = _getResult$results === undefined ? [] : _getResult$results;
				var testFinished = _getResult.testFinished;
				var description = _getResult.description;


				console.log(_styles.bgColors.Black);

				console.log('' + _styles.fontColors.White + description);

				if (!results.length) {
					console.log('' + _styles.fontColors.White + _styles.common.Underscore + 'No tests set!'.toUpperCase());
				} else {
					(function () {
						console.log(_styles.fontColors.Blue + 'Test started at ' + _styles.fontColors.Magenta + testStarted + _styles.fontColors.Blue + ' finished at ' + _styles.fontColors.Magenta + testFinished + _styles.fontColors.Blue + ', test took ' + _styles.fontColors.Cyan + (0, _date.msToHR)((0, _date.dateDiff)(testFinished, testStarted)) + '.');

						var successes = 0,
						    fails = 0,
						    exeptions = 0;

						var sum = results.length;

						results.forEach(function () {
							var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
							var i = arguments[1];
							var args = result.args;
							var expectation = result.expectation;
							var method = result.method;
							var _result$res = result.res;
							var res = _result$res === undefined ? {} : _result$res;


							if (res.error) {
								++exeptions;
							} else if (res.success) {
								++successes;
								if (failsOnly) return;
							} else {
								++fails;
							}

							var str1 = '' + _styles.fontColors.Blue + i + '. ' + _styles.fontColors.Yellow + 'Function called with ' + argsToStr(args) + _styles.fontColors.Yellow + '.';
							var str2 = _styles.fontColors.Yellow + 'Function checked by method ' + _styles.fontColors.Magenta + method + _styles.fontColors.Yellow + '.';
							var str3 = 'expectation' in result ? 'Expected value is ' + _styles.fontColors.Magenta + argToStr(expectation) + _styles.fontColors.Yellow + '.' : '';
							var str4 = parseRes(res);

							console.log((str1 + ' ' + str2 + ' ' + (str3 ? str3 : '') + ' ' + str4).replace(/\s+/g, ' '));
						});

						console.log(_styles.fontColors.Blue + 'Statistic:');

						console.log(_styles.fontColors.Green + 'Successes: ' + successes + _styles.fontColors.Blue + ', ' + _styles.fontColors.Red + 'Fails: ' + fails + _styles.fontColors.Blue + ', ' + _styles.fontColors.Red + 'Exeptions: ' + exeptions + _styles.fontColors.Blue + '. From ' + _styles.fontColors.Cyan + sum + _styles.fontColors.Blue + ' test' + (sum !== 1 ? 's' : '') + '.');

						console.log(_styles.fontColors.Blue + 'Result: ' + (successes === sum ? _styles.fontColors.Green + 'SUCCESS' : _styles.fontColors.Red + 'FAIL') + '!');
					})();
				}

				console.log(_styles.common.Reset);

				return this;
			}
		}]);

		return Unit;
	}();

	exports.default = Unit;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEqual = __webpack_require__(5);

	Object.defineProperty(exports, 'isEqual', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isEqual).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEqual;
	/**
	 * Test method that checks if test method's result is equal to expected value.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {*} test#expectation - expected result value.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {boolean}
	 */
	function isEqual(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var args = test.args;
	  var expectation = test.expectation;


	  var result = method.apply(context, args);

	  return { result: result, success: result === expectation };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Test = __webpack_require__(7);

	var _Test2 = _interopRequireDefault(_Test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Test2.default;

/***/ },
/* 7 */
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
	 * @param {string} test#method - method name.
	 */
	var Test = function Test() {
		var test = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Test);

		var arg = test.arg;
		var args = test.args;
		var expectation = test.expectation;
		var _test$method = test.method;
		var method = _test$method === undefined ? '' : _test$method;


		if (args && !(args instanceof Array)) throw new Error("args must be an Array or not defined");

		this.args = args || [arg];

		this.expectation = expectation;

		this.method = method;
	};

	exports.default = Test;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.bgColors = exports.fontColors = exports.common = undefined;

	var _common2 = __webpack_require__(9);

	var _common = _interopRequireWildcard(_common2);

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function toFormat() {
		var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var res = {};

		for (var key in obj) {
			res[key] = "\x1B[" + obj[key] + "m";
		}return res;
	}

	function setColors() {
		var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		var colorList = {};

		colors.forEach(function (color, i) {
			colorList[color] = i + shift;
		});

		return colorList;
	}

	var common = exports.common = toFormat(_common);
	var fontColors = exports.fontColors = toFormat(setColors(_colors2.default, 30));
	var bgColors = exports.bgColors = toFormat(setColors(_colors2.default, 40));

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Reset = exports.Reset = 0;
	var Bright = exports.Bright = 1;
	var Dim = exports.Dim = 2;
	var Underscore = exports.Underscore = 4;
	var Blink = exports.Blink = 5;
	var Reverse = exports.Reverse = 7;
	var Hidden = exports.Hidden = 8;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = 'Black,Red,Green,Yellow,Blue,Magenta,Cyan,White'.split(',');

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.dateDiff = undefined;
	exports.msToHR = msToHR;

	var _dd = __webpack_require__(12);

	var _dd2 = _interopRequireDefault(_dd);

	var _n = __webpack_require__(13);

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
/* 12 */
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
/* 13 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map