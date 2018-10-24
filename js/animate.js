$(document).ready(function() {
	$(".open-nav").click(function(){
        $(".open-nav").fadeOut(100);
    });
    $(".close-nav").click(function(){
        $(".open-nav").fadeIn(700);
    });
})

function openNav() {
    document.getElementById("navbar").style.width = "14vw";
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
}