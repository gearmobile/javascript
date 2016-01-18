window.onload = function () {

	var diagramArrow = document.getElementById('diagram__arrow');
	var allHeight = document.documentElement.scrollHeight;

	window.addEventListener('scroll', function () {

		var scrollValue = document.documentElement.scrollTop;
		diagramArrow.style.rotate = scrollValue;

	});

};
