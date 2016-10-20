/**
 * Converts object to array of it's fields.
 * @param {object} obj - object to convert
 * @return {array}
 */
export default function keys (obj = {}) {
	const arr = [];

	for (let key in obj)
		arr.push(key);

	return arr;
}