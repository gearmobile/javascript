'use strict'

window.onload = function () {

	var slider  = document.querySelector('.slider');
	var images  = document.querySelectorAll('.slider__image');
	var btnPrev = document.querySelector('#prev');
	var btnNext = document.querySelector('#next');
	var i = 1;

	btnPrev.addEventListener('click', function () {

		if ( i !== 1 ) {
			i--;
			slider.innerHTML = '<img src="images/image-' + i + '.jpg" alt="Image" class="slider__image">';
		}

	});

	btnNext.addEventListener('click', function () {

		if ( i !== images.length ) {
			i++;
			slider.innerHTML = '<img src="images/image-' + i + '.jpg" alt="Image" class="slider__image">';
		}

	});

};
