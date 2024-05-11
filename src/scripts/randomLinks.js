const LINK_TEXTS = [
	"👉 click me!",
	"visit 🚗",
	"inspect 🧐",
	"🌊 sea more",
	"explore 🌍",
	"discover 🕵️‍♂️",
	"🔍 find out",
	"learn more 🤓",
	"take a look 🫣",
	"peek inside 👀",
	"peek 👀",
	"check out 🧐",
];
const generateRandomLinkText = (prev) => {
	const randomLink = LINK_TEXTS[Math.floor(Math.random() * LINK_TEXTS.length)];

	return randomLink === prev ? generateRandomLinkText(prev) : randomLink;
};
document.querySelectorAll("*[data-generate-link-text]").forEach((link) => {
	link.textContent = generateRandomLinkText();

	link.parentElement.addEventListener("mouseenter", () => {
		link.textContent = generateRandomLinkText(link.textContent);
	});
});
