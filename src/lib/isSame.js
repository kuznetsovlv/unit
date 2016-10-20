import keys	from './keys';

/**
 * Checks if two array have same structure.
 * Ignores functions.
 * @param {array} l - first argument
 * @param {array} r - second argument
 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
 * @return {boolean}
 */
function isArrSame (l = [], r = [], strictOrder = true) {
	if (l.length !== r.length)
		return false;

	return l.every((x, i) => isEq(x, r[i], strictOrder));
}

/**
 * Checks if two objects have same structure.
 * Ignores functions.
 * @param {object} l - first argument
 * @param {object} r - second argument
 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
 * @return {boolean}
 */
function isObjSame (l = {}, r = {}, strictOrder = true) {
	const lAr = keys(l);
	const rAr = keys(r);

	if (lAr.length !== rAr.length)
		return false;

	if (!strictOrder) {
		lAr.sort();
		rAr.sort();
	}
	
	if (!lAr.every((x, i) => x === rAr[i]))
		return false;

	return lAr.every(key => isEq(l[key], r[key], strictOrder));
}

/**
 * Checks if two objects have same structure.
 * Ignores functions.
 * @param {object} l - first argument
 * @param {object} r - second argument
 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
 * @return {boolean}
 */
function isEqObj (l = {}, r = {}, strictOrder = true) {
	const isArr = l instanceof Array;

	if (isArr !== r instanceof Array)
		return false;

	if (isArr)
		return isArrSame(l, r, strictOrder);

	return isObjSame(l, r, strictOrder);
}

/**
 * Checks if two arguments equal or (in oject case) have same structure.
 * Ignores functions.
 * @param {*} l - first argument
 * @param {*} r - second argument
 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
 * @return {boolean}
 */
function isEq (l, r, strictOrder = true) {

	//NaN case.
	if ((l !== l) && (r !== r))
		return true;

	const tl = typeof l;
	const tr = typeof r;

	if (tl !== tr)
		return false;

	switch (tl) {
		case 'function': return true;
		case 'object': return l ? isEqObj (l, r, strictOrder) : l === r;
	}

	return l === r;
}

/**
 * Checks if two arguments equal or (in oject case) have same structure.
 * Ignores functions.
 * @param {*} l - first argument
 * @param {*} r - second argument
 * @param {boolean} [strictOrder = true] - flag that shows if fild`s order is important
 * @return {boolean}
 */
export default function isSame (l, r, strictOrder = true) {

	return isEq(l, r, strictOrder);
}