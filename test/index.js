(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["unit"] = factory();
	else
		root["unit"] = factory();
})(this, function() {
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

	var _index = __webpack_require__(1);

	var testUnit_1 = new _index.Unit(function (x) {
	          return x;
	}, 'Check "Exist"');
	var testUnit_2 = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isEqual"');
	var testUnit_3 = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isEqualNonStrict"');
	var testUnit_4 = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isFalse"');
	var testUnit_5 = new _index.Unit(function (x) {
	          return x;
	}, 'Check "isInstanceOf"');

	testUnit_1.addTest(new _index.Test({ arg: null, method: 'exist' })).addTest(new _index.Test({ arg: undefined, method: 'exist' })).addTest(new _index.Test({ arg: NaN, method: 'exist' })).addTest(new _index.Test({ arg: 0, method: 'exist' })).drawResult();

	testUnit_2.addTest(new _index.Test({ arg: 4, expectation: 4, method: 'isEqual' })).addTest(new _index.Test({ arg: 4, expectation: '4', method: 'isEqual' })).addTest(new _index.Test({ arg: '4', expectation: 4, method: 'isEqual' })).addTest(new _index.Test({ arg: '4', expectation: '4', method: 'isEqual' })).addTest(new _index.Test({ arg: 4, expectation: 8, method: 'isEqualNonStrict' })).drawResult();

	testUnit_3.addTest(new _index.Test({ arg: 4, expectation: 4, method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: 4, expectation: '4', method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: '4', expectation: 4, method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: '4', expectation: '4', method: 'isEqualNonStrict' })).addTest(new _index.Test({ arg: 4, expectation: 8, method: 'isEqualNonStrict' })).drawResult();

	testUnit_4.addTest(new _index.Test({ arg: null, method: 'isFalse' })).addTest(new _index.Test({ arg: undefined, method: 'isFalse' })).addTest(new _index.Test({ arg: NaN, method: 'isFalse' })).addTest(new _index.Test({ arg: 0, method: 'isFalse' })).addTest(new _index.Test({ arg: '', method: 'isFalse' })).addTest(new _index.Test({ arg: false, method: 'isFalse' })).addTest(new _index.Test({ arg: '0', method: 'isFalse' })).addTest(new _index.Test({ arg: 'false', method: 'isFalse' })).drawResult();

	testUnit_5.addTest(new _index.Test({ arg: {}, expectation: Object, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: {}, expectation: Array, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: [], expectation: Array, method: 'isInstanceOf' })).addTest(new _index.Test({ arg: [], expectation: Object, method: 'isInstanceOf' })).drawResult();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Test = exports.Unit = undefined;

	var _Unit2 = __webpack_require__(2);

	var _Unit3 = _interopRequireDefault(_Unit2);

	var _Test2 = __webpack_require__(25);

	var _Test3 = _interopRequireDefault(_Test2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Unit = _Unit3.default;
	exports.Test = _Test3.default;

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

	var _commiter = __webpack_require__(33);

	var _commiter2 = _interopRequireDefault(_commiter);

	var _Test = __webpack_require__(25);

	var _Test2 = _interopRequireDefault(_Test);

	var _styles = __webpack_require__(27);

	var _date = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Converts single argument to string.
	 * @param {*} arg - argument.
	 * @return {string}
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
	 * Describes expectation.
	 * @param {object} result - result object.
	 * @return {string}
	 */
	function describeExpectation() {
		var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var expectation = result.expectation;
		var method = result.method;


		if (!('expectation' in result)) return '';

		var endStr = '' + _styles.fontColors.Magenta + argToStr(expectation) + _styles.fontColors.Yellow + '.';

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
						// res = methods[method](this.method, {args, expectation}, this.context);
						res = (0, _commiter2.default)(methods[method], _this.method, { args: args, expectation: expectation }, _this.context);
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
							var str3 = describeExpectation(result);
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

	var _isEqualNonStrict = __webpack_require__(6);

	Object.defineProperty(exports, 'isEqualNonStrict', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isEqualNonStrict).default;
	  }
	});

	var _exist = __webpack_require__(7);

	Object.defineProperty(exports, 'exist', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_exist).default;
	  }
	});

	var _notExist = __webpack_require__(8);

	Object.defineProperty(exports, 'notExist', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_notExist).default;
	  }
	});

	var _isNull = __webpack_require__(9);

	Object.defineProperty(exports, 'isNull', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNull).default;
	  }
	});

	var _isNotNull = __webpack_require__(10);

	Object.defineProperty(exports, 'isNotNull', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNotNull).default;
	  }
	});

	var _isNill = __webpack_require__(11);

	Object.defineProperty(exports, 'isNill', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNill).default;
	  }
	});

	var _isNotNill = __webpack_require__(12);

	Object.defineProperty(exports, 'isNotNill', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNotNill).default;
	  }
	});

	var _isNaN = __webpack_require__(13);

	Object.defineProperty(exports, 'isNaN', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNaN).default;
	  }
	});

	var _isNotNaN = __webpack_require__(14);

	Object.defineProperty(exports, 'isNotNaN', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isNotNaN).default;
	  }
	});

	var _isTrue = __webpack_require__(15);

	Object.defineProperty(exports, 'isTrue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isTrue).default;
	  }
	});

	var _isFalse = __webpack_require__(16);

	Object.defineProperty(exports, 'isFalse', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isFalse).default;
	  }
	});

	var _isTypeOf = __webpack_require__(17);

	Object.defineProperty(exports, 'isTypeOf', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isTypeOf).default;
	  }
	});

	var _isInstanceOf = __webpack_require__(18);

	Object.defineProperty(exports, 'isInstanceOf', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isInstanceOf).default;
	  }
	});

	var _isSameStructure = __webpack_require__(19);

	Object.defineProperty(exports, 'isSameStructure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isSameStructure).default;
	  }
	});

	var _isSameNotOrderedStructure = __webpack_require__(22);

	Object.defineProperty(exports, 'isSameNotOrderedStructure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isSameNotOrderedStructure).default;
	  }
	});

	var _isLikeStructure = __webpack_require__(23);

	Object.defineProperty(exports, 'isLikeStructure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isLikeStructure).default;
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = notExist;
	/**
	 * Test method that checks if tested method's result is undefined.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function notExist(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result === undefined };
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNull;
	/**
	 * Test method that checks if tested method's result is null.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isNull(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result === null };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNotNull;
	/**
	 * Test method that checks if tested method's result is not null.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isNotNull(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result !== null };
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNill;
	/**
	 * Test method that checks if tested method's result is null or undefined.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isNill(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result === null || result === undefined };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNotNill;
	/**
	 * Test method that checks if tested method's result is not null nor undefined.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isNotNill(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result !== null && result !== undefined };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNaN;

	/**
	 * Test method that checks if tested method's result is NaN.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isNaN(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result !== result };
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNaN;

	/**
	 * Test method that checks if tested method's result is not NaN.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isNaN(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: result === result };
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTrue;

	/**
	 * Test method that checks if tested method's result is interpreted as true.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isTrue(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;


	  var result = method.apply(context, args);

	  return { result: result, success: !!result };
	}

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isTypeOf;
	/**
	 * Test method that checks if tested method's result's data type is equal to expectation.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {string} test#expectation - expected result value.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isTypeOf(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;
	  var expectation = test.expectation;


	  var result = method.apply(context, args);

	  return { result: result, success: (typeof result === "undefined" ? "undefined" : _typeof(result)) === expectation };
	}

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSameStructure;

	var _isSame = __webpack_require__(20);

	var _isSame2 = _interopRequireDefault(_isSame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Test method that checks if tesed method's result's data has same structure with expectation.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {string} test#expectation - expected structure of result value.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isSameStructure(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;
	  var expectation = test.expectation;


	  var result = method.apply(context, args);

	  return { result: result, success: (0, _isSame2.default)(result, expectation, true) };
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isSame;

	var _keys = __webpack_require__(21);

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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSameNotOrderedStructure;

	var _isSame = __webpack_require__(20);

	var _isSame2 = _interopRequireDefault(_isSame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Test method that checks if tested method's result's data has same structure with expectation without dependency on order.
	 * @param {function} method - testing method.
	 * @param {object} test - test`s object.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {string} test#expectation - expected structure of result value.
	 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
	 * @return {object}
	 */
	function isSameNotOrderedStructure(method) {
	  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _test$args = test.args;
	  var args = _test$args === undefined ? [] : _test$args;
	  var expectation = test.expectation;


	  var result = method.apply(context, args);

	  return { result: result, success: (0, _isSame2.default)(result, expectation, false) };
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isLike = __webpack_require__(24);

	var _isLike2 = _interopRequireDefault(_isLike);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Tests first argument is equal to expectation or if they are objects it has properties from expectation and they are like.
	 */
	exports.default = function (value, expectation) {
	  return (0, _isLike2.default)(value, expectation);
	};

/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Test = __webpack_require__(26);

	var _Test2 = _interopRequireDefault(_Test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Test2.default;

/***/ },
/* 26 */
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
		var method = test.method;


		if (!method) throw new Error("Verification method is not specified");

		if (args && !(args instanceof Array)) throw new Error("args must be an Array or not defined");

		this.args = args || [arg];

		this.expectation = expectation;

		this.method = method;
	};

	exports.default = Test;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.bgColors = exports.fontColors = exports.common = undefined;

	var _common2 = __webpack_require__(28);

	var _common = _interopRequireWildcard(_common2);

	var _colors = __webpack_require__(29);

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
/* 28 */
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
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = 'Black,Red,Green,Yellow,Blue,Magenta,Cyan,White'.split(',');

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.dateDiff = undefined;
	exports.msToHR = msToHR;

	var _dd = __webpack_require__(31);

	var _dd2 = _interopRequireDefault(_dd);

	var _n = __webpack_require__(32);

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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _commiter = __webpack_require__(34);

	var _commiter2 = _interopRequireDefault(_commiter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _commiter2.default;

/***/ },
/* 34 */
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
	  var _ref$args = _ref.args;
	  var args = _ref$args === undefined ? [] : _ref$args;
	  var expectation = _ref.expectation;
	  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var result = func.apply(context, args);

	  return { result: result, success: isSuccess(result, expectation) };
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map