/**
 * Class to create test.
 * @param {object} test - test`s object.
 * @param {*} [test#arg] - argument that function get.
 * @param {array} [test#args] - array of arguments that function get.
 * @param {*} test#expectation - expected result value.
 * @param {string} test#method - method name.
 */
export default class Test {
	constructor (test = {}) {
		const {arg, args, expectation, method} = test;

		if (!method)
			throw new Error("Verification method is not specified");

		if (args && !(args instanceof Array))
			throw new Error("args must be an Array or not defined");

		this.args = args || ('arg' in test ? [arg] : []);

		if ('expectation' in test)
			this.expectation = expectation;

		this.method = method;
	}
}
