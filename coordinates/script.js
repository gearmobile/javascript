var body = document.body;

var block = document.querySelector('.block');

var clientRect = document.createElement('ul');
clientRect.className = 'clientRect';

body.insertBefore(clientRect, body.children[0]);

console.log(clientTop(block));
console.log(clientLeft(block));


var el = document.createElement('li');
el.innerHTML = clientTop(block);
clientRect.insertBefore(el, clientRect.children[0]);



function clientTop(el) {
	var coords = el.getBoundingClientRect();
	return coords.top;
}

function clientLeft(el) {
	var coords = el.getBoundingClientRect();
	return coords.left;
}

function clientRight(el) {
	var coords = el.getBoundingClientRect();
	return coords.right;
}

function clientBottom(el) {
	var coords = el.getBoundingClientRect();
	return coords.bottom;
}
