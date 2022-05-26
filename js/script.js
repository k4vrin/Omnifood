
// Set current year
const yearEl = document.querySelector(".year");
yearEl.innerHTML = new Date().getFullYear();

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = this.getAttribute("href");
		if (href === "#") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		// scroll to other sections
		if (href.startsWith("#") && href !== "#") {
			const sectionEl = document.querySelector(href)
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}
		if (link.classList.contains("main-nav-link")) {
			headerEl.classList.remove("nav-open");
		}
	});
});

// Sticky header
const sectionHeroEl = document.querySelector(".section-hero");


const observer = new IntersectionObserver(function (entries) {
	entries.forEach(function (entry) {
		if (!entry.isIntersecting) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	});

},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px"
	}
);
observer.observe(sectionHeroEl);


////////////////
///////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();