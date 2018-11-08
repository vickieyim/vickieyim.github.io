$(document).ready(function() {
	
	// Fade out menu button
	/*
	$(".open-nav").click(function(){
        $(".open-nav").fadeOut(100);
    });
    $(".close-nav").click(function(){
        $(".open-nav").fadeIn(700);
    });
	*/
	
	$(".overlay").hide();
	
})

function openNav() {
	document.getElementById("navbar").style.width = "8rem";
	$(".overlay").fadeIn(200);
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
	$(".overlay").fadeOut(200);
}