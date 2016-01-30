$( function () {

	var $list = $('#list');
	var $btn = $('.button');

	$btn.on('click', function () {
		$(this).delegate('#uno', 'click', function () {
			$('#uno').addClass('active');
		})
	})

});
