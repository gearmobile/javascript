$( function () {

	var $list = $('#list');

	$list.on('click', function (event) {
		if ( $(event.target).is('#uno') ) {
			$list.find('#uno').toggleClass('uno-active');
		} else if ( $(event.target).is('#duo') ) {
			$list.find('#duo').toggleClass('duo-active');
		} else if ( $(event.target).is('#tre') ) {
			$list.find('#tre').toggleClass('tre-active');
		}
	});

});
