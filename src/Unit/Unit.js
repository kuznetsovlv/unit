import print							from 'print-str';
import * as methods						from './methods';
import commiter							from './commiter';
import Test								from '../Test';
import {dateDiff, msToHR}				from '../lib/date';
import printResult						from '../lib/printResult';
import getCombiner						from '../lib/combineStyles';
import * as defaultStyles				from '../lib/defaultStyles';

/**
 * Class to create unit test set.
 * @param {function} func - testing method.
 * @param {string} description - test set`s description
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 */
export default class Unit {
	constructor (func, description = '', context = {}) {

		if (typeof func !== 'function')
			throw new Error('Incorrect type of testing method. Must be a function.');

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
	addTest (test) {
		if (!(test instanceof Test))
			throw new Error("Test object must be a type of Test class");

		const {method} = test;

		if (typeof method !== 'function' && !methods[method])
			throw new Error(`Unexisting test method ${method}`);

		if (!this.tests)
			this.tests = [];

		this.tests.push(test);

		return this;
	}

	/**
	 * Method to perform tests.
	 * @returns {Unit} - this.s
	 */
	commitTests () {
		const testStarted = new Date();

		const results = this.tests.map((result = {}) => {
			const {args, expectation, method} = result;
			let res;

			const methodType = typeof method;
			const methodFunc = methodType === 'function' ? method : methods[method]; //Real checking method.
			//Method's name
			const methodName = methodType === 'function' ? (method.name || method.toLocaleString() || method.toString()) : method;

			// Try to commit test
			try {
				res = commiter(methodFunc, this.method, {args, expectation}, this.context)
			} catch (e) {
				res = {
					error: e
				}
			}

			return {...result, res, method: methodName};
		});

		this.result = {
			testStarted,
			results,
			testFinished: new Date(),
			description: this.description,
			success: results.reduce((p, r = {}) => p && r.res.success, true) // object ress property of element is guaranteed by commiter.
		}

		return this;
	}

	/**
	 * Method to return last result.
	 * @returns {object} - result.
	 */
	getResult () {
		return this.result ? this.result : this.commitTests().getResult();
	}

	/**
	 * Method to draw result.
	 * @param {boolean} [failsOnly = false] - if argument is true success tests would not be drawn.
	 * @param {object} [styles = {}] - list of display styles.
	 * @returns {Unit} - this.s
	 */
	drawResult (failsOnly = false, styles = {}) {
		const {testStarted, results = [], testFinished, description, success} = this.getResult();

		//Style definition
		const resStyle = {...defaultStyles, ...styles};
		const {main, description: descr, empty, date, duration, success: scs, fail, exeption: exept, sum: sumStyle} = resStyle;

		// print('@bgBlack;'); // Main background for common

		const combineStyles = getCombiner('Reset', main);

		print(`${combineStyles(descr)}${description}\n`); // Output description

		const {length: sum} = results;

		if (!sum) {
			print(`${combineStyles(empty)}@Underscore;NO TESTS SET!`, 'final'); //No tests
		} else {
			// Timing
			print(`${combineStyles()}Test started at ${combineStyles(date)}${testStarted} `);
			print(`${combineStyles()}finished at ${combineStyles(date)}${testFinished}, `);
			print(`test took ${combineStyles(duration)}${msToHR(dateDiff(testFinished, testStarted))}.\n`);

			//Output results and getting new statistics.
			const {successes, fails, exeptions} = results.reduce((stat = {}, result = {}) => printResult(result, stat, failsOnly, resStyle), {successes: 0, fails: 0, exeptions: 0});

			// const  sum = successes + fails + exeptions; 

			//Output statistics.
			print(`${combineStyles()}Statistic:\n`);
			print(`${combineStyles(scs)}Successes: ${successes}${combineStyles()}, `);
			print(`${combineStyles(fail)}Fails: ${fails}${combineStyles()}, `);
			print(`${combineStyles(exept)}Exeptions: ${exeptions}${combineStyles()}. `);
			print(`${combineStyles()}From ${combineStyles(sumStyle)}${sum} ${combineStyles()}test${sum !== 1 ? 's' : ''}.\n`);
			print(`${combineStyles()}Result: ${success ? combineStyles(scs) + 'SUCCESS' : combineStyles(fail) + 'FAIL'}!`, 'final');
		}

		return this;
	}
}
