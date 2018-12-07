import $ from "jquery";
class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent =  $("#navbar");
		this.events();

	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("navbar--is-visible");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;