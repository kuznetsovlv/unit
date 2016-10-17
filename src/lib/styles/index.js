import * as _common	from "./common";
import colors		from "./colors";

function toFormat (obj = {}) {
	const res = {};

	for (let key in obj)
		res[key] = `\x1b[${obj[key]}m`;

	return res;
}

function setColors (colors = [], shift = 0) {
	const colorList = {};

	colors.forEach((color, i) => {
		colorList[color] = i + shift;
	});

	return colorList;
}

export const common = toFormat(_common);
export const fontColors = toFormat(setColors(colors, 30));
export const bgColors = toFormat(setColors(colors, 40));
