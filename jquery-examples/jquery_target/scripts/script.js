$( function () {

	var $list = $('#list');
	var $list1 = $('#list1');

	$list.on('click', function (event) {
		if ( $(event.target).is('#uno') ) {
			$list.find('#uno').toggleClass('active');
		} else if ( $(event.target).is('#duo') ) {
			$list.find('#duo').toggleClass('active');
		} else if ( $(event.target).is('#tre') ) {
			$list.find('#tre').toggleClass('active');
		}
	});

	$list1.on('click', '#uno1, #duo1, #tre1', function (event) {
		$(event.target).toggleClass('active');
	});


});
