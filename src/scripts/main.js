import "./smoothScroll.js";
import gsap from "gsap";

let currentRotation = 0;

document.querySelector(".flower").addEventListener("click", () => {
	gsap.to(".flower", {
		duration: 1,
		rotation: (currentRotation += 360),
		ease: "elastic.out(1, 0.3)",
	});
});
