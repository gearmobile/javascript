$(function () {

	var $button = $('#block__button');

	$button.on('click', function () {
		var $el = $('#block');
		var $elCloned = $el.clone();
		$elCloned.text('cloned element').addClass('cloned');
		$el.before($elCloned);
	});

});
