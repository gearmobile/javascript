
// ФУНКЦИЯ ОПРЕДЕЛЕНИЯ РАЗМЕРА ПРОКРУТКИ ЭЛЕМЕНТА СНИЗУ
function scrollBottom(el) {
	return el.scrollHeight - ( el.scrollTop + el.clientHeight );
}






var block = document.querySelector('.block');

bottomScroll = scrollBottom(block);
console.log(bottomScroll);


