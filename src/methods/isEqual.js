/**
 * Test method that checks if test method's result is equal to expected value.
 * @param {function} method - testing method.
 * @param {object} test - test`s object.
 * @param {*} [test#arg] - argument that function get.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {*} test#expectation - expected result value.
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 * @return {boolean}
 */
export default function isEqual (method, test = {}, context = {}) {
	const {arg, args, expectation} = test;

	const result = args ? method.apply(context, args) : method.call(context, arg);

	return result === expectation;
}