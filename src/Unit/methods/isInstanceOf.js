/**
 * Tests firsts argument if it instance of second.
 * @param {*} value - tested argument.
 * @param {function} expectation - expected constructor of value.
 * @return {boolean}
 */
export default (value, expectation) => value instanceof expectation;
