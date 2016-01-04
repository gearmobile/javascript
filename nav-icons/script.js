window.onload = function () {


	var icons = document.querySelectorAll('.icon__link');


	for ( var i = 0; i < icons.length; i++ ) {
		icons[i].addEventListener('mouseenter', function () { this.classList.add('icon__link--active'); }, false);
		icons[i].addEventListener('mouseleave', function () { this.classList.remove('icon__link--active'); }, false);
	};


	[].forEach.call(document.querySelectorAll('.list__link'), function (el) {
		el.addEventListener('mouseenter', function () { this.classList.add('list__link--active'); }, false);
		el.addEventListener('mouseleave', function () { this.classList.remove('list__link--active'); }, false);
	});


};
