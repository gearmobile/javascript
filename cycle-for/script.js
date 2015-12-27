var list = document.querySelector('#list');

var init = 342;
var incremet = 19;


function addItems(init) {
	var li = document.createElement('li');
	li.innerHTML = init;
	list.appendChild(li);
}


for ( var count = 0; count < 12; init += incremet ) {
	addItems(init);
	count++;
}
