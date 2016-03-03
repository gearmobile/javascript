const name = 'Mary';
const a = 12;
const x = 8;
let homeCity = null;
let output = (10, 20);

switch ( name ) {
	case 'John': homeCity = 'LA';
		break;
	case 'Bill': homeCity = 'NY';
		break;
	case 'Mary': homeCity = 'Brisbane';
		break;
	default: homeCity = 'Moscow';
}

console.log(homeCity);

// test ? expression1 : expression2

let result = a > 10 ? console.log(a + ' is greater than 10') : console.log(a + ' is less than 10');
let result1 = x > 10 ? console.log(x + ' is greater than 10') : x < 10 ? console.log(x + ' is less than 10') : console.log(x + ' is equal 10');

console.log(result);
console.log(result1);
console.log(output);

// function declaration statement
function hello (name) {
	return 'Hello ' + name;
}

// function definition expression
let summ = function (a,b) {
	return a + b;
};

let someFun = function (callback) {
	let name = 'John';
	callback(name)
}

console.log(hello('John', 23).toUpperCase());
