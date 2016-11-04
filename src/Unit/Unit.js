import print							from 'print-str';
import * as methods						from './methods';
import commiter							from './commiter';
import Test								from '../Test';
import {dateDiff, msToHR}				from '../lib/date';
import printResult						from '../lib/printResult';

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

		if (!methods[method])
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

			try {
				res = commiter(methods[method], this.method, {args, expectation}, this.context)
			} catch (e) {
				res = {
					error: e
				}
			}

			return {...result, res};
		});

		this.result = {
			testStarted,
			results,
			testFinished: new Date(),
			description: this.description
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
	 * @returns {Unit} - this.s
	 */
	drawResult (failsOnly = false) {
		const {testStarted, results = [], testFinished, description} = this.getResult();

		print('@bgBlack;'); // Main background for common

		print(`@fWhite;${description}\n`); // Output description

		if (!results.length) {
			print(`@fWhite;@Underscore;NO TESTS SET!`, 'final'); //No tests
		} else {
			// Timing
			print(`@fBlue;Test started at @fMagenta;${testStarted} `);
			print(`@fBlue;finished at @fMagenta;${testFinished}, `);
			print(`test took @fCyan;${msToHR(dateDiff(testFinished, testStarted))}.\n`);

			//Output results and getting new statistics.
			const {successes, fails, exeptions} = results.reduce((stat = {}, result = {}) => printResult(result, stat, failsOnly), {successes: 0, fails: 0, exeptions: 0});

			const  sum = successes + fails + exeptions; 

			//Output statistics.
			print('@fBlue;Statistic:\n');
			print(`@fGreen;Successes: ${successes}@fBlue;, `);
			print(`@fRed;Fails: ${fails}@fBlue;, `);
			print(`@fRed;Exeptions: ${exeptions}. `);
			print(`From @fCyan;${sum} @fBlue;test${sum !== 1 ? 's' : ''}.\n`);
			print(`@fBlue;Result: ${successes === sum ? '@fGreen;SUCCESS' : '@fRed;FAIL'}!`, 'final');
		}

		return this;
	}
}
