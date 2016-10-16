import dd	from './dd';
import n	from './n';

/**
 * Calculetes absolute difference between two dates.
 * @param {Date} d1 - first date.
 * @param {Date} d2 - second date.
 * @return {number} - number of ms between two dates.
 */
export const dateDiff = (d1, d2) => Math.abs(d1.getTime() - d2.getTime());

/**
 * Converts number of milliseconds to human readable period.
 * @param {number} ms - number of milliseconds.
 * @return {string} - human readable period.
 */
export function msToHR (ms = 0) {
	const milliseconds = ms % 1000;
	ms = dd(ms, 1000);

	const seconds = ms % 60;
	ms = dd(ms, 60);

	const minutes = ms % 60;
	ms = dd(ms, 60);

	const hours = ms % 24;
	const days = dd(ms, 24);

	const str = [];

	if (days)
		str.push(`${days} day${days > 1 ? 's' : ''}`);
	if (hours || days)
		str.push(`${n(hours, 2)} h`);
	if (minutes || hours || days)
		str.push(`${n(minutes)} m`);
	if (seconds || minutes || hours || days)
		str.push(`${n(seconds, 2)} s`);
	str.push(`${n(milliseconds, 3)} ms`);

	return str.join(' ');
}