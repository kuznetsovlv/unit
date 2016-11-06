import print		from 'print-str';
import getCombiner	from './combineStyles';

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
 * @param {string} style - style to display args.
 * @returns {string}
 */
function parseArgs (args = [], style) {
	switch (args.length) {
		case 0: return '${style}no arguments';
		case 1: return `${style}: ${argToStr(args[0])}`;
	}

	return `arguments: ${style}${args.map(arg => argToStr(arg)).join(', ')}`;
}

/**
 * Describes expectation.
 * @param {*} expectation - expected value.
 * @param {string} method - method to check.
 * @param {string} expectation - expectation's style
 * @param {string} base - base style
 * @returns {string}
 */
function describeExpectation (expectation, method, expectationStyle, baseStyle) {
	const endStr = `${expectationStyle}${argToStr(expectation)}${baseStyle}. `;

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
 * @param {object} styles - display stiles
 * @returns {string}
 */
 function parseRes (res = {}, styles = {}) {
 	const {result, success, error} = res;

 	const {baseStyle, result: resultStyle, error: errStyle, success: successStyle, fail: failStyle} = styles;

 	const str = [];

 	if ('result' in res)
 		str.push(`${baseStyle}Resulted value ${resultStyle}${argToStr(result)}${baseStyle}.`);
 	if (error) {
 		str.push(`${errStyle}${error.message || error}!`)
 	} else {
 		str.push(success ? `${successStyle}Success!` : `${failStyle}Fail!`)
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

	const {main, resultBase, testIndex, methodName, args: argStyle, expectation: expect, success: scs, fail, exeption: err, resultValue} = styles;

	const combineStyles = getCombiner('Reset', main, resultBase);

	const baseStyle = combineStyles();

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

	print(`${combineStyles(testIndex)}${index}. ${baseStyle}Function called with ${parseArgs(args, combineStyles(argStyle))}${baseStyle}. `);
	print(`${baseStyle}Function checked by method ${combineStyles(methodName)}${method}${baseStyle}. `);

	if ('expectation' in result) {
		print(describeExpectation(expectation, method, combineStyles(expect), baseStyle));
	}

	print(`${parseRes(res, {baseStyle, success: combineStyles(scs), fail: combineStyles(fail), error: combineStyles(err), result: combineStyles(resultValue)})}\n`);

	return {successes, fails, exeptions};
}