import print							from 'print-str';
import * as methods						from './methods';
import commiter							from './commiter';
import Test								from '../Test';
import {dateDiff, msToHR}				from '../lib/date';
import printResult						from '../lib/printResult';
import combineStyles					from '../lib/combineStyles';

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
		const {
			main = 'bgBlack,fBlue', //main style
			description: descr = 'fWhite', //Description's style
			empty = 'fWhite', //Style of the "No test" mesage
			date = 'fMagenta', //Date style
			duration = 'fCyan', //Duration style
			success: scs = 'fGreen', //Success style
			fail = 'fRed', //Fail style
			exeption: exept = 'fRed', //Exeption style
			sum: sumStyle = 'fCyan', //Sum style
		} = styles;

		// print('@bgBlack;'); // Main background for common

		print(`${combineStyles('Reset', main, descr)}${description}\n`); // Output description

		if (!results.length) {
			print(`${combineStyles('Reset', main, empty)}@Underscore;NO TESTS SET!`, 'final'); //No tests
		} else {
			// Timing
			print(`${combineStyles('Reset', main)}Test started at ${combineStyles('Reset', main, date)}${testStarted} `);
			print(`${combineStyles('Reset', main)}finished at ${combineStyles('Reset', main, date)}${testFinished}, `);
			print(`test took ${combineStyles('Reset', main, duration)}${msToHR(dateDiff(testFinished, testStarted))}.\n`);

			//Output results and getting new statistics.
			const {successes, fails, exeptions} = results.reduce((stat = {}, result = {}) => printResult(result, stat, failsOnly, styles), {successes: 0, fails: 0, exeptions: 0});

			const  sum = successes + fails + exeptions; 

			//Output statistics.
			print(`${combineStyles('Reset', main)}Statistic:\n`);
			print(`${combineStyles('Reset', main, scs)}Successes: ${successes}${combineStyles('Reset', main)}, `);
			print(`${combineStyles('Reset', main, fail)}Fails: ${fails}${combineStyles('Reset', main)}, `);
			print(`${combineStyles('Reset', main, exept)}Exeptions: ${exeptions}${combineStyles('Reset', main)}. `);
			print(`${combineStyles('Reset', main)}From ${combineStyles('Reset', main, sumStyle)}${sum} ${combineStyles('Reset', main)}test${sum !== 1 ? 's' : ''}.\n`);
			print(`${combineStyles('Reset', main)}Result: ${success ? combineStyles('Reset', main, scs) + 'SUCCESS' : combineStyles('Reset', main, fail) + 'FAIL'}!`, 'final');
		}

		return this;
	}
}
