import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from   './modules/StickyHeader';
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.js';


let mobileMenu = new MobileMenu();
let scroll = new SmoothScroll('a[href*="#"]');

new RevealOnScroll(Array.from(
				document.getElementsByClassName("feature-item") 
			), '75%'
);
new RevealOnScroll(Array.from(
				document.getElementsByClassName("testimonial")
			), '75%'
);

let menuItems = ["#our-beginning", "#features", "#testimonials"];
new StickyHeader(Array.from(
				document.getElementsByClassName("large-hero__text"))[0],
				menuItems
				); 