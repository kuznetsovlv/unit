/**
 * General method to commit tests.
 * @param {function} isSuccess - result testing method.
 * @param {function} func - function to be tested.
 * @param {object} test - test`s object. This argument is guaranteed to be every time an object by the only calling in Unit,
 * so we are able to use destructuring safely.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {*} test#expectation - expected result value.
 * @param {object} [context] - context object for call function, it is good idea to not use it, because funtion must be a pure.
 * @return {object}
 */
export default function commiter (isSuccess, func, {args = [], expectation}, context = {}) {
	const result = func.apply(context, args);

	return {result, success: isSuccess(result, expectation)};
}
