var block = document.querySelector('.block');
var list = document.querySelector('.list');
var buttonAfter = document.querySelector('.after');
var buttonBefore = document.querySelector('.before');
var buttonClone = document.querySelector('.clone');

// -----------------------------------------------------------
var empty = document.querySelector('#empty');
// -----------------------------------------------------------


block.addEventListener('click', function () {

	var tooltip = document.createElement('div');
	tooltip.className = 'block__tooltip';
	tooltip.innerHTML = '<strong>Hurraa!</strong> I\'m reading this message!';
	block.appendChild(tooltip);

	setTimeout(function() {
		block.removeChild(tooltip);
	}, 1500);

});

buttonAfter.addEventListener('click', function () {
	var element = document.createElement('li');
	element.innerHTML = 'last list item';
	list.appendChild(element);
});



buttonBefore.addEventListener('click', function () {
	var el = document.createElement('li');
	el.innerHTML = 'first list item';
	list.insertBefore(el, list.children[0]);
});


buttonClone.addEventListener('click', function () {
	var newElement = document.createElement('li');
	newElement.innerHTML = 'new <span>created</span> item';
	list.insertBefore(newElement, list.children[2]);

	var elementCloned = newElement.cloneNode(true); // create copy of element
	elementCloned.querySelector('span').innerHTML = 'cloned'; // modify cloned copy
	newElement.parentNode.insertBefore(elementCloned, newElement.nextSibling); // insert cloned copy
});


