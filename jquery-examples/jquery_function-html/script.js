$(function () {

	const el1 = $('.row').html();

	$('.row').wrap('<section>');

	$('.diamond').unwrap();

	const $dia2 = $('.diamond2').parent();

	$dia2.addClass('wrap');

});
