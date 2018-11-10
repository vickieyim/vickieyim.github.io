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

/* --------------------- Slideshow / Carousel --------------------- */
/* -- From https://www.w3schools.com/howto/howto_js_slideshow.asp -- */
/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("slides-dot");
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" slides-dot-active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " slides-dot-active";
}*/