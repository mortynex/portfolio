const smoothScrollElements = [
	...document.querySelectorAll(
		"*[data-scroll-speed-top], *[data-scroll-speed-left], *[data-scroll-speed-right], *[data-scroll-speed-rotation], *[data-scroll-speed-opacity]"
	),
];

const logo = document.querySelector(".logo");

const defaultStyleValues = new Map();

for (const elem of smoothScrollElements) {
	const style = window.getComputedStyle(elem);

	const getValue = (value) => (!value.endsWith("px") ? "0px" : value);

	defaultStyleValues.set(elem, {
		top: getValue(style.top),
		left: getValue(style.left),
		right: getValue(style.right),
		opacity: style.opacity,
	});

	if (style.position === "static") {
		elem.style.position = "relative";
	}
}

console.log(defaultStyleValues);

document.body.addEventListener("scroll", () => {
	for (const elem of smoothScrollElements) {
		const {
			scrollSpeedTop,
			scrollSpeedRight,
			scrollSpeedLeft,
			scrollSpeedRotation,
			scrollSpeedOpacity,
		} = elem.dataset;

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

		if (scrollSpeedRotation) {
			elem.style.rotate = `${document.body.scrollTop / scrollSpeedRotation}deg`;
		}

		if (scrollSpeedOpacity) {
			elem.style.opacity = `${document.body.scrollTop / scrollSpeedOpacity}`;
		}
	}

	logo.style.opacity = `${
		(document.body.scrollTop - window.innerHeight * 0.8) / 100
	}`;
});

window.addEventListener("resize", () => {
	for (const elem of smoothScrollElements) {
		const {
			scrollSpeedTop,
			scrollSpeedRight,
			scrollSpeedLeft,
			scrollSpeedRotation,
			scrollSpeedOpacity,
		} = elem.dataset;

		if (scrollSpeedTop) {
			elem.style.top = ``;
		}

		if (scrollSpeedRight) {
			elem.style.right = ``;
		}

		if (scrollSpeedLeft) {
			elem.style.left = ``;
		}

		if (scrollSpeedRotation) {
			elem.style.rotate = ``;
		}

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
});
