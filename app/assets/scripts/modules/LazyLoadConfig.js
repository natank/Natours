window.lazySizesConfig = window.lazySizesConfig || {};
 
// use .lazy instead of .lazyload
window.lazySizesConfig.lazyClass = 'lazyload';
		 
// use data-original instead of data-src
lazySizesConfig.srcAttr = 'data-original';
		 
//page is optimized for fast onload event
lazySizesConfig.loadMode = 1;	


//Update waypoints upon lazy-loading images
let lazyImages = Array.from(document.querySelectorAll(".lazyload"));

lazyImages.forEach(function(imageElement){
	imageElement.addEventListener("change", function(){
		Waypoint.refreshAll();
	})
})
