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
		//Position of the original element
		var orgElementPos = $('.about-section').offset();
	  	//Position from top
	  	orgElementTop = orgElementPos.top;
	  	if ($(window).scrollTop() >= (orgElementTop)) {
	  		$('.about-section').find('.hidden').addClass('animated').removeClass('hidden');
	  	}
	  }

	  parallaxIntervalID = setInterval(parallax, 10);

	});