$(document).ready(function() {

	// DOM Selectors
	var main = $("#main");
	var boxes = $(".box");
	var boxWidth = $(window).width() - 16;
	var clickCounter = 0;

	var windowHeight = $(window).height();	
	boxes.css("height", windowHeight);

	boxes.each(function(index){
		$(this).css("left", function(){
			var percentage = index * 100;
			return percentage + "%";
		});
	});

	main.on("click", function(){
		clickCounter++;
		main.css("margin-left", (clickCounter * boxWidth) * -1);
	});

});