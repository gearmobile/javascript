
// ФУНКЦИЯ ОПРЕДЕЛЕНИЯ РАЗМЕРА ПРОКРУТКИ ЭЛЕМЕНТА СНИЗУ

function scrollBottom(el) {
	return el.scrollHeight - ( el.scrollTop + el.clientHeight );
}

// Здесь используется метрика `clientHeight`, а не `offsetHeight`,
// так как нужно не учитывать `border`.

var block = document.querySelector('.block');

bottomScroll = scrollBottom(block);


