/**
 * Name: Core
 * Author: Kunal Varma
 * Version: 1.0.0
 */

 jQuery(document).ready(function($){
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
	  	orgElementTop = orgElementPos.top - 50;
	  	if ($(window).scrollTop() >= (orgElementTop)) {
	  		orgElement.find('.hidden').addClass('animated').removeClass('hidden');
	  	}
	  	console.log(orgElement);
	  });
	}


	jQuery(window).scroll(function(){
		parallax();
	});

});