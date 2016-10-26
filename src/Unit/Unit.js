import * as methods						from './methods';
import commiter							from './commiter';
import Test								from '../Test';
import {common, fontColors, bgColors}	from '../lib/styles';
import {dateDiff, msToHR}				from '../lib/date';

/**
 * Converts single argument to string.
 * @param {*} arg - argument.
 * @return {string}
 */
function argToStr (arg) {
	const argType = typeof arg;

	if (argType === 'function')
		return `function: ${arg.name || arg.toLocaleString() || arg.toString()}`;

	if (argType === 'string')
		return `"${arg}"`;

	if (!arg || argType !== 'object')
		return `${arg}`;

	if (arg instanceof Array)
		return `[${arg.map(x => argToStr(x)).join(', ')}]`;

	if ((arg.prototype || arg).toString !== Object.prototype.toString)
		return arg.toString();

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
	
	return [`arguments:${fontColors.Magenta}`, args.map(arg => argToStr(arg)).join(', ')].join(' ');
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
  * Describes expectation.
  * @param {object} result - result object.
  * @return {string}
  */
 function describeExpectation (result = {}) {
 	const {expectation, method} = result;

 	if (!('expectation' in result))
 		return '';

 	const endStr = `${fontColors.Magenta}${argToStr(expectation)}${fontColors.Yellow}.`;

 	switch (method) {
 		case 'isTypeOf': return `Expected that value is type of ${endStr}`;
 		case 'isInstanceOf': return `Expected that value is instance of ${endStr}`;
 		case 'isSameNotOrderedStructure':
 		case 'isSameStructure': return `Expected that value has same structure with ${endStr}`;
 		case 'isLikeStructure': return `Expected that value equals or has properties from ${endStr}`;
 		default: return `Expected value is ${endStr}`;
 	}

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
	 * @param {Test} test - test`s object.
 	 * @return {Unit} - this.
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
	 * @return {Unit} - this.s
	 */
	commitTests () {
		const testStarted = new Date();

		const results = this.tests.map(({args, expectation, method}) => {
			let res;

			try {
				// res = methods[method](this.method, {args, expectation}, this.context);
				res = commiter(methods[method], this.method, {args, expectation}, this.context)
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
		return this.result ? this.result : this.commitTests().getResult();
	}

	/**
	 * Method to draw result.
	 * @param {boolean} [failsOnly = false] - if argument is true success tests would not be drawn.
	 * @return {Unit} - this.s
	 */
	drawResult (failsOnly = false) {
		const {testStarted, results = [], testFinished, description} = this.getResult();

		console.log(bgColors.Black);

		console.log(`${fontColors.White}${description}`);

		if (!results.length) {
			console.log(`${fontColors.White}${common.Underscore}${'No tests set!'.toUpperCase()}`);
		} else {
			console.log(`${fontColors.Blue}Test started at ${fontColors.Magenta}${testStarted}${fontColors.Blue} finished at ${fontColors.Magenta}${testFinished}${fontColors.Blue}, test took ${fontColors.Cyan}${msToHR(dateDiff(testFinished, testStarted))}.`)

			let successes = 0, fails = 0, exeptions = 0;

			const sum = results.length;

			results.forEach((result = {}, i) => {

				const {args, expectation, method, res = {}} = result;

				if (res.error) {
					++exeptions;
				} else if (res.success) {
					++successes;
					if (failsOnly)
						return;
				} else {
					++fails;
				}

				const str1 = `${fontColors.Blue}${i}. ${fontColors.Yellow}Function called with ${argsToStr(args)}${fontColors.Yellow}.`;
				const str2 = `${fontColors.Yellow}Function checked by method ${fontColors.Magenta}${method}${fontColors.Yellow}.`;
				const str3 = describeExpectation(result);
				const str4 = parseRes(res);

				console.log(`${str1} ${str2} ${str3 ? str3 : ''} ${str4}`.replace(/\s+/g, ' '));
			});

			console.log(`${fontColors.Blue}Statistic:`);

			console.log(`${fontColors.Green}Successes: ${successes}${fontColors.Blue}, ${fontColors.Red}Fails: ${fails}${fontColors.Blue}, ${fontColors.Red}Exeptions: ${exeptions}${fontColors.Blue}. From ${fontColors.Cyan}${sum}${fontColors.Blue} test${sum !== 1 ? 's' : ''}.`);

			console.log(`${fontColors.Blue}Result: ${successes === sum ? fontColors.Green + 'SUCCESS' : fontColors.Red + 'FAIL'}!`);
		}
		
		console.log(common.Reset);

		return this;
	}
}
