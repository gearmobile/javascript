$(function () {

	// TOP FIXED HEADER
	// ---------------------------------------------------------

	var $header = $('#header');
	var $headerCloned = $header.clone();
	$headerCloned.addClass('cloned');
	$header.before($headerCloned);
	$offset = $header.outerHeight() * 0.5;

	$(window).on('scroll', function () {

		if ( $(window).scrollTop() > $offset ) {
			$headerCloned.addClass('cloned--visible');
		} else {
			$headerCloned.removeClass('cloned--visible');
		}

	});


});
