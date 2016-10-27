/**
 * Checks first argument to be type of second argument.
 * @param {*} value - tested argument.
 * @param {string} expectation - expected value's type.
 * @return {boolean}
 */
export default (value, expectation) => typeof value === expectation;
