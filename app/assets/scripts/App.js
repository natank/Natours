import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();


new RevealOnScroll(Array.from(
			document.getElementsByClassName("feature-item")
			), '75%'
);
new RevealOnScroll(Array.from(
			document.getElementsByClassName("testimonial")
			), '75%');