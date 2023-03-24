$(document).ready(function() {
	$("#cv-printable").hide();
	
	$(".button-collapse").sideNav();
	
	$(".scrollspy").scrollSpy();
	
	$("#cv-backtotop").removeClass("hide");
	$("#cv-backtotop").addClass("cv-hide");
});

$("#cv-nav li a").click(function() {
	$(".button-collapse").sideNav("hide");
	return false;
});

$(window).scroll(function() {
	var currentScroll = $(this).scrollTop();
	
	if (currentScroll > 200) {
		//$("#cv-backtotop").removeClass("hide");
		//$("#cv-backtotop").fadeIn(200);
		$("#cv-backtotop").addClass("cv-show");
		$("#cv-backtotop").removeClass("cv-hide");
		
	} else {
		/*$("#cv-backtotop").fadeOut(200, function() {
			$("#cv-backtotop").addClass("hide");
		});*/
		$("#cv-backtotop").addClass("cv-hide");
		$("#cv-backtotop").removeClass("cv-show");
	}
});

$(window).on("load resize", function() {
	var width = $(window).width(), height = $(window).height();
	if (width <= 992) {
		$("body").addClass("flow-text");
	} else {
		$("body").removeClass("flow-text");
	}
});

function print_doc(e) {
	window.print();
}