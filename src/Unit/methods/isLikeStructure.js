import isLike	from '../../lib/isLike';

/**
 * Tests first argument is equal to expectation or if they are objects it has properties from expectation and they are like.
 */
export default (value, expectation) => isLike(value, expectation);
