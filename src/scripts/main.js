import "./smoothScroll.js";
import gsap from "gsap";

let currentRotation = 0;

const flowerElement = document.querySelector(".flower");

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
});
