/**
 * Divisible division method.
 * @param {number} n - dividend.
 * @param {number} div - divider.
 * @return {number} quotient.
 */
export default function dd (n, div) {
	return (n / div) >> 0;
}