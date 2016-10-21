/**
 * Checks if first array has items like in second.
 * @param {array} val - checked value
 * @param {array} expect - contorl
 * @return {boolean}
 */
function isLikeArr (val = [], expect = []) {
	const {length} = expect;
	if (val.length < length)
		return false;

	return val.every((v, i) => {return _isLike(v, expect[i]) || i >= length;});
}

/**
 * Checks if first object has items like in second.
 * @param {object} val - checked value
 * @param {object} expect - contorl
 * @return {boolean}
 */
function isLikeObj (val = {}, expect = {}) {
	for (let key in expect)
		if (!_isLike(val[key], expect[key]))
			return false;
	return true;
}

/**
 * Checks if firstobject has properties from secod argument they are like.
 * @param {object} val - checked value
 * @param {object} expect - contorl
 * @return {boolean}
 */
function isObjLike (val = {}, expect = {}) {
	const isArr = val instanceof Array;

	if (isArr !== expect instanceof Array)
		return false;

	return isArr ? isLikeArr(val, expect) : isLikeObj(val, expect);
}

/**
 * Checks if first argument equals second or if they are objects it has properties from secod argument and they are like.
 * Ignores functions.
 * @param {*} val - checked value
 * @param {*} expect - contorl
 * @return {boolean}
 */
function _isLike(val = {}, expect = {}) {
	if (val && val == expect)
		return true;

	if (val !== val && expect !== expect)
		return true;

	const tv = typeof val;
	const te = typeof expect;

	if (tv !== te)
		return false;

	switch (tv) {
		case 'function': return true;
		case 'object': return val ? isObjLike(val, expect) : val === expect;
	}

	return val === expect;
}

/**
 * Checks if first argument equals second or if they are objects it has properties from secod argument and they are like.
 * Ignores functions.
 * @param {*} val - checked value
 * @param {*} expect - contorl
 * @return {boolean}
 */
export default function isLike (val = {}, expect = {}) {
	return _isLike(val, expect);
}
