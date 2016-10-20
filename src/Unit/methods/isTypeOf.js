/**
 * Test method that checks if tested method's result's data type is equal to expectation.
 * @param {function} method - testing method.
 * @param {object} test - test`s object.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {string} test#expectation - expected result value.
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 * @return {object}
 */
export default function isTypeOf (method, test = {}, context = {}) {
	const {args = [], expectation} = test;

	const result = method.apply(context, args);

	return {result, success: typeof result === expectation};
}
