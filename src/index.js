import * as methods						from './methods';
import {common, fontColors, bgColors}	from './lib/styles';
import {dateDiff, msToHR}				from './lib/date';

/**
 * Converts single argument to string.
 * @param {*} arg - argument.
 * @return {string}
 */
function argToStr (arg) {
	if (!arg || typeof arg !== 'object')
		return `${arg}`;

	if (arg instanceof Array)
		return `[${arg.map(x => argToStr(x)).join(', ')}]`;

	const keys = [];

	for (let key in arg)
		keys.push(`${key}: ${argToStr(arg[key])}`);

	return `{${keys.join(', ')}}`;
}

/**
 * Converts args to string.
 * @param {array} args - array of arguments.
 * @return {string}
 */
function argsToStr (args = []) {
	if (args.length < 2)
		return `${fontColors.Magenta}${args[0] === undefined ? 'no arguments' : argToStr(args[0])}`;
	
	return ['arguments:`${fontColors.Magenta}`', args.map(arg => argToStr(arg)).join(', ')].join(' ');
}

/**
 * Parses result.
 * @param {object} res - result.
 * @return {string}
 */
 function parseRes (res = {}) {
 	const {result, success, error} = res;

 	const str = [];

 	if ('result' in res)
 		str.push(`${fontColors.Yellow}Resulted value ${fontColors.Magenta}${argToStr(result)}${fontColors.Yellow}.`);
 	if (error) {
 		str.push(`${fontColors.Red}${error.message || error}!`)
 	} else {
 		str.push(success ? `${fontColors.Green}Success!` : `${fontColors.Red}Fail!`)
 	}

 	return str.join(' ');
 }

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
			args = args || [arg];

			try {
				res = methods[method](this.method, {args, expectation}, this.context);
			} catch (e) {
				res = {
					error: e
				}
			}

			return {args, expectation, method, res};
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
		const {testStarted, results = [], testFinished, description} = this.getResult();

		console.log(bgColors.Black);

		console.log(`${fontColors.White}${description}`);

		console.log(`${fontColors.Blue}Test started at ${fontColors.Magenta}${testStarted}${fontColors.Blue} finished at ${fontColors.Magenta}${testFinished}${fontColors.Blue}, test took ${fontColors.Cyan}${msToHR(dateDiff(testFinished, testStarted))}.`)

		let successes = 0, fails = 0, exeptions = 0;

		const sum = results.length;

		results.forEach((result = {}) => {

			const {args, expectation, method, res = {}} = result;

			const str1 = `${fontColors.Yellow}Function called with ${argsToStr(args)}${fontColors.Yellow}.`;
			const str2 = `${fontColors.Yellow}Function checked by method ${fontColors.Magenta}${method}${fontColors.Yellow}.`;
			const str3 = 'expectation' in result ? `Expected value is ${fontColors.Magenta}${argToStr(expectation)}${fontColors.Yellow}.` : '';
			const str4 = parseRes(res);

			if (res.error)
				++exeptions;
			else if (res.success)
				++successes;
			else
				++fails;

			console.log(`${str1} ${str2} ${str3 ? str3 : ''} ${str4}`.replace(/\s+/g, ' '));
		});

		console.log(`${fontColors.Blue}Statistic:`);

		console.log(`${fontColors.Green}Successes: ${successes}${fontColors.Blue}, ${fontColors.Red}Fails: ${fails}${fontColors.Blue}, ${fontColors.Red}Exeptions: ${exeptions}${fontColors.Blue}. From ${fontColors.Cyan}${sum}${fontColors.Blue} tests.`);

		console.log(`${fontColors.Blue}Result: ${successes === sum ? fontColors.Green + 'SUCCESS' : fontColors.Red + 'FAIL'}!`);
		
		console.log(common.Reset);

		return this;
	}
}