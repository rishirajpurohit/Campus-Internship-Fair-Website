/**
 * Name: Core
 * Author: Kunal Varma
 * Version: 1.0.0
 */

 jQuery(document).ready(function($){

	/*******************
	 * Toggle Side Menu
	 *******************/
	 jQuery(document).click(function() {
	 	if (jQuery('.header-nav').hasClass('shown')) {
	 		jQuery(".header-nav").removeClass('shown');
	 		jQuery('.overlay').fadeOut(200);
	 	}
	 });
	 jQuery(document).on('click', '.nav-toggle', function() {
	 	var menu = jQuery(".header-nav");
	 	menu.toggleClass('shown');
	 	jQuery('.overlay').fadeToggle(200);
	 	e.stopPropagation();
	 });
	 jQuery(".header-nav").click(function(event) {
	 	event.stopPropagation();
	 });

 	//Init Height Fix
 	heightFix();
 	//Call if view port resizes
 	jQuery(window).resize(function(){
 		heightFix();
 	});

	//The Parallax Function
	function parallax(){
		jQuery('[data-animate=true]').each(function(){
			//The Original Element
			var orgElement = jQuery(this);
		//Position of the original element
		var orgElementPos = orgElement.offset();
	  	//Position from top
	  	orgElementTop = orgElementPos.top - 150;
	  	if ($(window).scrollTop() >= (orgElementTop)) {
	  		orgElement.find('.toBeAnimated').addClass('animated').removeClass('toBeAnimated');
	  	}
	  	console.log(orgElement);
	  });
	}


	jQuery(window).scroll(function(){
		parallax();
	});
});