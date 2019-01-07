import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from   './modules/StickyHeader';
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.js';
import ModalForm from './modules/ModalForm';
import LazyLoadConfig from './modules/LazyLoadConfig';
import LazyLoad from "lazysizes/lazysizes.min.js";

var modalForm    = new ModalForm(),
	mobileMenu   = new MobileMenu(),
	menuItems    = ["#our-beginning", "#features", "#testimonials"], 
	featureItems = Array.from(
				document.getElementsByClassName("feature-item")  
			), 
	testimonials = Array.from(
				document.getElementsByClassName("testimonial")
			),
	stickyHeader = new StickyHeader(Array.from(
				document.getElementsByClassName("large-hero__text"))[0],
				menuItems
				),
	scroll       = new SmoothScroll('a[href*="#"]'); 

	

new RevealOnScroll(featureItems, '75%');

new RevealOnScroll(testimonials, '75%');


