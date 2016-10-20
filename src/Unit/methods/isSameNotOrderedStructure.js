import isSame	from '../../lib/isSame';

/**
 * Test method that checks if test method's result's data has same structure with expectation without dependency on order.
 * @param {function} method - testing method.
 * @param {object} test - test`s object.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {string} test#expectation - expected structure of result value.
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 * @return {object}
 */
export default function isSameNotOrderedStructure (method, test = {}, context = {}) {
	const {args = [], expectation} = test;

	const result = method.apply(context, args);

	return {result, success: isSame(result, expectation, false)};
}
