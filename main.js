const navOpen = document.getElementById("nav-open");
navClose = document.getElementById("nav-close");
navMenu = document.getElementById("nav-menu");
navLinks = document.querySelectorAll(".nav-link");
overlay = document.querySelector(".overlay");

let tl = gsap.timeline({
	paused: "true",
});

tl.to(".overlay", {
	duration: 0.2,
	opacity: 0.9,
	pointerEvents: "auto",
	ease: Expo.easeInOut,
});

tl.to(".nav-menu", {
	duration: 1,
	opacity: 1,
	x: 0,
	ease: Expo.easeInOut,
});

tl.fromTo(
	".nav-item",
	{
		y: "-100%",
		opacity: 0,
	},
	{
		duration: 0.5,
		opacity: 1,
		y: "0%",
		stagger: 0.25,
	}
);

tl.fromTo(
	".social-link, .email",
	{
		x: "-50%",
		opacity: 0,
	},
	{
		duration: 0.8,
		opacity: 1,
		x: "0%",
		stagger: 0.25,
		ease: Expo.easeInOut,
	},
	"-=0.5"
);

navOpen.addEventListener("click", () => {
	tl.play();
	navOpen.style.opacity = 0;
});

navClose.addEventListener("click", () => {
	tl.reverse();
	navOpen.style.opacity = 1;
});

overlay.addEventListener("click", () => {
	tl.reverse();
	navOpen.style.opacity = 1;
});

navLinks.forEach((e) => {
	e.addEventListener("click", () => {
		tl.reverse();
		navOpen.style.opacity = 1;
	});
});

// HIDE LOGO AND SWITCH ====================================
function hideLogo() {
	const logo = document.querySelector(".logo");
	const themeSwitch = document.querySelector(".theme-container");

	if (this.scrollY >= 200) {
		logo.classList.add("hide-logo");
		themeSwitch.classList.add("hide-logo");
	} else {
		logo.classList.remove("hide-logo");
		themeSwitch.classList.remove("hide-logo");
	}
}
window.addEventListener("scroll", hideLogo);

// SWIPER JS ===========================================
const swiper = new Swiper(".swiper", {
	loop: true,

	// Navigation Arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

// SCROLL BACK UP =======================================
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);


/*SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
	distance: "30px",
	duration: 1800,
	reset: true,
});

sr.reveal(
	`.home-data, .home-image, .showreel-media, .testimonial-bg, .ig-box, .footer-logo, .footer-right, .footer-left`,
	{
		origin: "top",
		interval: 200,
	}
);

sr.reveal(`.p-1, .p-3`, {
	origin: "left",
});

sr.reveal(`.p-2, .p-4`, {
	origin: "right",
});