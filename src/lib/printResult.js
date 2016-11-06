import print	from 'print-str';

/**
 * Converts single argument to string.
 * @param {*} arg - argument.
 * @returns {string}
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
 * @returns {string}
 */
function parseArgs (args = []) {
	switch (args.length) {
		case 0: return '@fMagenta;no arguments';
		case 1: return `@fMagenta;: ${argToStr(args[0])}`;
	}

	return `arguments: @fMagenta;${args.map(arg => argToStr(arg)).join(', ')}`;
}

/**
 * Describes expectation.
 * @param {*} expectation - expected value.
 * @param {string} method - method to check.
 * @returns {string}
 */
function describeExpectation (expectation, method) {
	const endStr = `@fMagenta;${argToStr(expectation)}@fYellow;. `;

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
 * Parses result.
 * @param {object} res - result.
 * @returns {string}
 */
 function parseRes (res = {}) {
 	const {result, success, error} = res;

 	const str = [];

 	if ('result' in res)
 		str.push(`@fYellow;Resulted value @fMagenta;${argToStr(result)}@fYellow;.`);
 	if (error) {
 		str.push(`@fRed;${error.message || error}!`)
 	} else {
 		str.push(success ? `@fGreen;Success!` : `@fRed;Fail!`)
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
export default function printResult (
	result = {},
	{successes = 0, fails = 0, exeptions = 0},
	failsOnly = false,
	styles = {}) {
	
	const {args = [], expectation, method, res = {}} = result;

	const index = successes + fails + exeptions; // result's index

	// Getting new statistics
	if (res.error) {
		++exeptions;
	} else if (res.success) {
		++successes;
		if (failsOnly) // if failsOnly is true all successes have to be not drawn
			return {successes, fails, exeptions};
	} else {
		++fails;
	}

	print(`@fBlue;${index}. @fYellow;Function called with ${parseArgs(args)} `);
	print(`@fYellow;Function checked by method @fMagenta;${method}@fYellow;. `);

	if ('expectation' in result) {
		print(describeExpectation(expectation, method));
	}

	print(`${parseRes(res)}\n`);

	return {successes, fails, exeptions};
}