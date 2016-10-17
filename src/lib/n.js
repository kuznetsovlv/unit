/**
 * Formats number to stundard length;
 * @param {number} num - number to be formated.
 * @param {number} len - needed length;
 * @return {string} - formated number.
 */
export default function n(num = 0, len = 1) {
	if (len < 1)
		len = 1;

	const zeros = [];

	for (let i = 0; i < len; ++i)
		zeros.push(0);

	return `${zeros.join('')}${num}`.substr(-len);
}
