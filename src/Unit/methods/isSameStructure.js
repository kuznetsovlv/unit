import isSame	from '../../lib/isSame';

/**
 * Checks that first and second argumetns are equal or have same strucrure. Functions are ignored.
 * @param {*} value - checed value.
 * @param {*} expectation - expected value.
 * @return {boolean}
 */
export default (value, expectation) => isSame(value, expectation, true);
