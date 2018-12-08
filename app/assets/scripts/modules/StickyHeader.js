// The StickyHeader class changes the site-header's
// background as it scrolls on top of a specified element
//
// The StickyHeader class changes the color of a header 
// menu item font upon scrolling to the 
// corresponding page section

import waypoints from 'waypoints/lib/noframework.waypoints'; 
class StickyHeader { 
	constructor(item, menuItems) {
		this.item = item; // The item at which header becomes darker
		this.menuItems = menuItems; //an array of menu item id's (strings)
	
		this.siteHeader = Array.from(
			document.getElementsByClassName("site-header")
			)[0];
	
		this.logo = Array.from(
			document.getElementsByClassName("site-header__logo")
			)[0];

		this.largeHeroTitle = Array.from(
			document.getElementsByClassName("large-hero__title")
			)[0]
	
		this.changeHeaderBgWaypoint();
		this.changeMenuWaypoints();
	}

	changeHeaderBgWaypoint() {
		let that = this;
		new Waypoint({ //the wayopoint upon which header bg changes
			element: that.item,
			handler: function(direction) {
				if(direction === "down")
				{
					that.siteHeader.classList.add("site-header--darker");
					that.logo.classList.add("site-header__logo--small");
				}
				else
				{
					that.siteHeader.classList.remove("site-header--darker");
					that.logo.classList.remove("site-header__logo--small");
				}
			}
		})
	}

	changeMenuWaypoints() {
		//create waypoints for the following page section ids: 
		// our-beginning
		// features
		// testimonials
		//for every section: select the navbar link, and add a class 'font-orange'
		let that = this;
		this.menuItems.forEach(function(item){
			let sectionItem = document.getElementById(item.replace('#', ''));
			let query = "a[href^='" + item + "']"; 
			let menuItem = document.querySelector(query);     
			
			new Waypoint({
				element: sectionItem,
				handler: function(direction) {
					if(direction=="down"){
						that.resetMenuItems();
						menuItem.classList.remove("navbar__link-item--white");  
						menuItem.classList.add("navbar__link-item--orange");  						
					}
				},
				offset:'28%'
			})
			new Waypoint({
				element: sectionItem,
				handler: function(direction) {
					if(direction=="up"){
						that.resetMenuItems();
						menuItem.classList.remove("navbar__link-item--white");  
						menuItem.classList.add("navbar__link-item--orange");  						
					}
				},
				offset:'-40%'
			})

			//reset all menu items When reaching large-hero
			let largeHeroWaypoint = new Waypoint({
				element: that.largeHeroTitle,
				handler: function(direction) {
					that.resetMenuItems();
				}
			})

		})

	}

	resetMenuItems(){
		this.menuItems.forEach(function(item){
			let query = "a[href^='" + item + "']"; 
			let menuItem = document.querySelector(query);
			menuItem.classList.add("navbar__link-item--white");  
			menuItem.classList.remove("navbar__link-item--orange");  
		})
	}

}

export default StickyHeader;