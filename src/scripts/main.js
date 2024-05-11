import "./smoothScroll.js";
import "./randomLinks.js";

import gsap from "gsap";

let currentRotation = 0;

const flowerElement = document.querySelector(".flower");

let flowerClickTimes = 0;
let currentHue = 292;

const root = document.querySelector(":root");

console.log({
	value: root.style.getPropertyValue("--primary-color"),
});

flowerElement.addEventListener("click", () => {
	gsap
		.to(".flower", {
			duration: 1,
			rotation: (currentRotation += 360),
			ease: "elastic.out(1, 0.3)",
		})
		.then(() => {
			setTimeout(() => {
				flowerElement.style.scale = "";
			}, 1000);
		});

	flowerClickTimes++;

	if (flowerClickTimes == 10) {
		setInterval(() => {
			currentHue++;

			if (currentHue > 360) currentHue = 0;

			root.style.setProperty(
				"--secondary-color",
				`hsl(${currentHue}, 77%, 74%)`
			);

			console.log({
				value: getComputedStyle(root).getPropertyValue("--secondary-color"),
				e: `hsl(${currentHue}, 77%, 74%);`,
			});
		}, 50);
	}
});

const triggers = document.querySelector(".aboutMeTitle img");
const target = document.querySelector(".aboutMeTitle");

triggers.addEventListener("click", () => {
	target.classList.toggle("upsideDown");
});

const icons = document.querySelectorAll(".textIcon");

const currentScales = new Map();

icons.forEach((icon) => {
	icon.addEventListener("click", () => {
		let currentScale = currentScales.get(icon) ?? 1.0;

		currentScale += 0.09;

		currentScales.set(icon, currentScale);

		icon.style.transform = `scale(${currentScale})`;

		if (currentScale > 3) {
			icon.animate([{ transform: "scale(0.01)", visibility: "hidden" }], {
				duration: 300,
				easing: "ease-in-out",
				fill: "forwards",
				iterations: 1,
			});
		}
	});
});

const rocket = document.querySelector("#flyingRocket");

let rocketClickedTimes = 0;

rocket.addEventListener("click", () => {
	rocketClickedTimes++;

	if (rocketClickedTimes > 3) return;

	if (rocketClickedTimes === 3) {
		// out animation

		return rocket
			.animate([{ transform: "translate(100vh, -100vw) scale(25)" }], {
				duration: 6000,
				easing: "ease-in-out",
				fill: "forwards",
				iterations: 1,
			})
			.addEventListener("finish", () => {
				rocketClickedTimes = 0;
			});
	}

	// rotating rocking animation

	rocket.animate(
		[
			{ transform: "translate(0px, 0px)" },

			{ transform: "translate(-3px, -3px) rotate(-2deg)" },
			{ transform: "translate(3px, 3px) rotate(2deg)" },

			{ transform: "translate(0px, 0px)" },
		],
		{
			duration: 1000,
			iterations: 1,
		}
	);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
