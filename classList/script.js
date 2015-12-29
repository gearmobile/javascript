window.onload = function () {


	var square = document.querySelector('#square');
	var button = document.querySelector('#button');

	var nameClass = 'blue';
	var unknownClass = 'black';

	square.classList.add('addedClass');
	square.classList.remove('toRemoveClass');

	button.addEventListener('click', function() {
		square.classList.toggle('toggledClass');
	});

	if ( square.classList.contains(nameClass) && !square.classList.contains(unknownClass) ) {
		console.log('Block contains class ' + nameClass + ' and don\'t contains class ' + unknownClass);
	} else {
		console.log('Block don\'t contains class ' + nameClass + ' or contains class ' + unknownClass);
	}

}
