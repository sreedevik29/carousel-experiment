$(document).ready(function() {

	// DOM Selectors
	var main = $("#main");
	
	var windowHeight = $(window).height();	
	$(".box").css("height", windowHeight);

	main.on("click", function() {
		main.css("margin-left", "-100%");
	});
});

// When the document loads, 
// you assign the window height to every box div
	// find the function for window height
	// select all the boxes
	// set the height of the section (box) to the window height