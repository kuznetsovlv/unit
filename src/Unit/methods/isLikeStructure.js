import isLike	from '../../lib/isLike';

/**
 * Test method that checks if tesed method's result's data equals expectation or if they are objects it has properties from expectation and they are like.
 * @param {function} method - testing method.
 * @param {object} test - test`s object.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {string} test#expectation - expected structure of result value.
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 * @return {object}
 */
export default function isLikeStructure (method, test = {}, context = {}) {
	const {args = [], expectation} = test;

	const result = method.apply(context, args);

	return {result, success: isLike(result, expectation)};
}
