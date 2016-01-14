window.onload = function () {

	count = 0;

	var brick = {
		width: 250,
		height: 150,
		thickness: 50,
		color: 'brown',
		weight: 500
	};

	for ( var item in brick ) {
		alert('Значение пункта ' + item + ' равно ' + brick[item]);
	}

	for ( var item in brick ) {
		count++;
	}

	alert('Число свойтсв в объекте brick равно ' + count);


	var list = document.querySelector('.list');


};
