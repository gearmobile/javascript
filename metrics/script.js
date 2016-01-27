window.onload = function () {

	var el = document.getElementById('block');

	var sliderWidth = el.offsetWidth - el.clientWidth - el.clientLeft * 2;
	console.log(sliderWidth);

	// function isHidden(elem) {
	// 	return !elem.offsetWidth && !elem.offsetHeight;
	// }

	// console.log(el.clientHeight);
	// console.log(el.clientWidth);
	// console.log(el.offsetHeight);
	// console.log(el.offsetWidth);

	// console.log(el.clientTop);
	// console.log(el.clientLeft);

	// console.log(el.offsetTop);
	// console.log(el.offsetLeft);

	// console.log(el.offsetParent);

	// console.log(isHidden(el));

	// console.log(el.offsetHeight);
	// console.log(el.scrollHeight);

	// var btn1 = document.getElementById('expand1');
	// var btn2 = document.getElementById('expand2');

	// btn1.addEventListener('click', function () {
	// 	el.style.height = el.scrollHeight + 'px';
	// });

	// btn2.addEventListener('click', function () {
	// 	el.scrollTop = 100;
	// 	console.log(el.scrollTop);
	// });

	// function scrollBottom (element) {
	// 	window.addEventListener('scroll', function () {
	// 		return element.scrollHeight - (element.scrollTop + element.offsetHeight);
	// 	}
	// });

	// scrollBottom(el);

	var square = document.createElement('div');
	square.style.width = '200px';
	square.style.height = '100px';
	square.style.padding = '20px';
	square.visibility = 'hidden';
	square = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor dolores qui repellat reprehenderit, minima officia adipisci illum fuga quisquam a repellendus, blanditiis dignissimos tempora nulla similique voluptatibus molestias quia minus autem facilis consequuntur aliquam non. Non, veritatis ipsam rem repellendus autem exercitationem reprehenderit fugit optio nostrum architecto adipisci repellat provident unde omnis voluptatem voluptatum iste quisquam sint dolor nobis, doloribus atque quae consequatur. Perferendis tempora, reiciendis vero nulla minus facere soluta eius, sint quis nesciunt adipisci sequi magni id laborum quos inventore non aliquam nemo voluptas consequatur molestiae hic alias tenetur! Et facilis fugit, aliquam similique consequuntur adipisci molestiae.');
	document.body.appendChild(square);
	var squareWidthScroll = square.offsetWidth - ( square.clientWidth + square.clientLeft * 2 );
	console.log(squareWidthScroll);
	document.body.removeChild(square);

};
