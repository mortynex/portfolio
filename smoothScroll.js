const smoothScrollElements = [
	...document.querySelectorAll("*[data-scroll-speed]"),
];

const defaultTopValues = new Map();

window.addEventListener("load", () => {
	for (const elem of smoothScrollElements) {
		const style = window.getComputedStyle(elem);

		defaultTopValues.set(elem, style.top);
	}

	console.log(defaultTopValues);
});

document.body.addEventListener("scroll", () => {
	console.log(defaultTopValues);

	for (const elem of smoothScrollElements) {
		const { scrollSpeed } = elem.dataset;

		elem.style.top = `calc(${defaultTopValues.get(elem)} + ${
			document.body.scrollTop / scrollSpeed
		}px)`;
	}
});
