import waypoints from 'waypoints/lib/noframework.waypoints'; 

class RevealOnScroll {
	constructor(itemsToReveal, offset) {
		this.itemsToReveal = itemsToReveal;
		this.offset = offset;
		this.hideInitially(); 
		this.createWaypoints();
	}

	createWaypoints() {
		let offset = this.offset;
		this.itemsToReveal.forEach(function(item) {
			new Waypoint({
				element: item,
				handler: function(direction) {
					if(direction === 'down') {
						item.classList.add("reveal-item--is-visible");	
					}   
					
				},
				offset: offset 
			})
		});

		this.itemsToReveal.forEach(function(item) {
			new Waypoint({
				element: item,
				handler: function(direction) {
					if(direction === 'up') {
						item.classList.remove("reveal-item--is-visible");	  
					}
					
				},
				offset: offset
			})
		})
	}
	hideInitially() {
		this.itemsToReveal.forEach(function(item) {
			item.classList.add("reveal-item");
		});
	}
}

export default RevealOnScroll;