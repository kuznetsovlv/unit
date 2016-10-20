/**
 * Test method that checks if tested method's result is not null.
 * @param {function} method - testing method.
 * @param {object} test - test`s object.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 * @return {object}
 */
export default function isNotNull (method, test = {}, context = {}) {
	const {args = []} = test;

	const result = method.apply(context, args);

	return {result, success: result !== null};
}
