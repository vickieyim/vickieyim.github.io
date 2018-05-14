// Fade-In Code
// http://codepen.io/hollart13/post/fade-in-on-scroll

$(document).ready(function() {

	/* $(window).scroll(function(i) {
		var scrollVar = $(window).scrollTop();
		$('#scroll-logo-index, #scroll-about, #scroll-portfolio, #scroll-resume').css({
			'opacity': ($(window).scrollTop() - 550) / 100
		});
	}) */
	
	$("#cirque-link").hover(
		function() {
			$("#cirque-link .portfolio-logo").animate({opacity: 1}, 500);
			$("#cirque-link .portfolio-demo").animate({opacity: 0.6}, 500);
		}, function() {
			$("#cirque-link .portfolio-logo").animate({opacity: 0.2}, 300);
			$("#cirque-link .portfolio-demo").animate({opacity: 1}, 300);
		}
	)
	
	$("#nps-link").hover(
		function() {
			$("#nps-link .portfolio-logo").animate({opacity: 1}, 500);
			$("#nps-link .portfolio-demo").animate({opacity: 0.6}, 500);
		}, function() {
			$("#nps-link .portfolio-logo").animate({opacity: 0.3}, 300);
			$("#nps-link .portfolio-demo").animate({opacity: 1}, 300);
		}
	)
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > (window.outerHeight + 60)) {
			$('.up-arrow').removeAttr("display");
			$('.up-arrow').fadeIn(200);
		} else {
			$('.up-arrow').attr("display");
			$('.up-arrow').fadeOut(100);
		}
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > (window.height = 100)) {
			$('.up-arrow-detail').removeAttr("display");
			$('.up-arrow-detail').fadeIn(200);
		} else {
			$('.up-arrow-detail').attr("display");
			$('.up-arrow-detail').fadeOut(100);
		}
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > (window.height = 200)) {
			$('.detail-animate').animate({left: '-23%'}, 1500);
			$('.content-animate')
				.css('visibility', 'visible')
				.animate({opacity: 1, left: '19%'}, 1500);
		}
	});
	
	/*
	$(window).scroll(function() {
		if ($(this).scrollTop() > (window.height = 1000)) {
			$('.detail-right').animate({left: '+23%'}, 1500);
			$('.content-left')
				.css('visibility', 'visible')
				.animate({opacity: 1, left: '-19%'}, 1500);
		}
	});
	*/
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > (window.height = 400)) {
			$('.about-img').animate({left: '-23%'}, 1500);
			$('.about-content')
				.css('visibility', 'visible')
				.animate({opacity: 1, left: '22%'}, 1500);
		}
	});
	
})