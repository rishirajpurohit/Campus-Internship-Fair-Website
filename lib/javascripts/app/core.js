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
 });