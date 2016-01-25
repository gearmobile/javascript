$(function () {

	var $button = $('.top');
	var $sectionHeight = $('.section:first').outerHeight();
	var $scrollValue = 800;

	$(window).on('scroll', function () {
		if ( $(window).scrollTop() > $sectionHeight ) {
			$button.addClass('top--visible');
		} else {
			$button.removeClass('top--visible');
		}
	});

	$button.on('click', function () {
		$('html,body').animate({scrollTop:0}, $scrollValue);
	});

});
