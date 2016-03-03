$(function () {

	var toto = {
		0: 'a',
		1: 'b',
		2: 'c'
	}

	for ( i = 0; i in toto; i++ ) {
		console.log(i + ' : ' + toto[i]);
	}

	var dog = {
		name: 'Fido',
		age: 25,
		gender: 'male',
		good: true,
		woof: function (value) { console.log(value + ' from ' + this.name + '!') }
	}

	// FOR-IN LOOP
	for ( var i in dog ) {
		console.log(i + ' : ' + dog[i]);
	}

	function name(q,w) {
		console.log('Call ' + this.name);
		console.log(name.length);
	}

	name.call(dog);


	// BOOK1
	// -----------------------------------------
	var book1 = {};

	book1.title = 'Kon-Tiki';
	book1.year = 2001;
	book1.price = 300;
	book1.interesting = true;
	book1.show = function () { console.log( 'The book ' + this.title + ' is costs ' + this.price + '$' ) };

	console.log(book1);
	console.log(book1.show());

	// BOOK2
	// --------------------------------------------
	var book2 = {
		title:'Master',
		price:1200,
		color:'brown',
		show: function () { console.log('The book ' + this.title + ' is costs ' + this.price + '$') }
	};

	console.log(book2);
	console.log(book2.show());

	// console.log(dog.woof('Hello'));

});
