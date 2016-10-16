import * as methods	from './methods';

/**
 * Class to create unit test set.
 * @param {function} func - testing method.
 * @param {string} description - test set`s description
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 */
export default class Unit {
	constructor (func, description, context = {}) {

		if (typeof func !== 'function')
			throw new Error('Incorrect type of testing method. Must be a function.');

		this.description = description;

		this.method = func;

		this.context = context;

		this.tests = [];
	}

	/**
	 * Method to add test into series.
	 * @param {object} test - test`s object.
	 * @param {*} [test#arg] - argument that function get.
	 * @param {array} [test#args] - array of arguments that function get.
	 * @param {*} test#expectation - expected result value.
	 * @param {string} test#method - method name.
 	 * @return {Unit} - this.
	 */
	addTest (test) {
		const {method} = test;

		if (!methods[method])
			throw new Error(`Unexisting test method ${method}`);

		if (!this.tests)
			this.tests = [];

		this.tests.push(test);

		return this;
	}

	/**
	 * Method to perform tests.
	 * @return {Unit} - this.s
	 */
	performTests () {
		const testStarted = new Date();

		const results = this.tests.map(({arg, args, expectation, method}) => {
			let res;

			try {
				res = methods[method](this.method, test, this.context);
			} catch (e) {
				res = e;
			}

			return args ? {args, expectation, method, res} : {arg, expectation, method, res};
		});

		this.result = {
			testStarted,
			results,
			testFinished: new Date();
		}

		return this;
	}

	/**
	 * Method to return last result.
	 * @return {object} - result.
	 */
	getResult () {
		return this.result ? this.result : this.performTests().getResult();
	}

	/**
	 * Method to draw result.
	 * @return {Unit} - this.s
	 */
	drawResult () {
		const {testStarted, results = [], testFinished} = this.getResult();

		return this;
	}
}