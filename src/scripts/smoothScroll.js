const smoothScrollElements = [
	...document.querySelectorAll(
		"*[data-scroll-speed-top], *[data-scroll-speed-left], *[data-scroll-speed-right]"
	),
];

const defaultStyleValues = new Map();

for (const elem of smoothScrollElements) {
	const style = window.getComputedStyle(elem);

	const getValue = (value) => (!value.endsWith("px") ? "0px" : value);

	defaultStyleValues.set(elem, {
		top: getValue(style.top),
		left: getValue(style.left),
		right: getValue(style.right),
	});

	if (style.position === "static") {
		elem.style.position = "relative";
	}
}

console.log(defaultStyleValues);

document.body.addEventListener("scroll", () => {
	for (const elem of smoothScrollElements) {
		const { scrollSpeedTop, scrollSpeedRight, scrollSpeedLeft } = elem.dataset;

		if (scrollSpeedTop) {
			elem.style.top = `calc(${defaultStyleValues.get(elem).top} + ${
				document.body.scrollTop / scrollSpeedTop
			}px)`;
		}

		if (scrollSpeedRight) {
			elem.style.right = `calc(${defaultStyleValues.get(elem).right} + ${
				document.body.scrollTop / scrollSpeedRight
			}px)`;
		}

		if (scrollSpeedLeft) {
			elem.style.left = `calc(${defaultStyleValues.get(elem).left} + ${
				document.body.scrollTop / scrollSpeedLeft
			}px)`;
		}
	}
});
