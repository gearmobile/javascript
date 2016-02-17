const name = 'Mary';
const homeCity = '';

switch ( name ) {
	case 'John': homeCity = 'LA';
		break;
	case 'Bill': homeCity = 'NY';
		break;
	case 'Mary': homeCity = 'Brisbane';
		break;
	default: homeCity = 'Moscow';
}

// expression1 ? expression2 : expression3

const a = 12;
const x = 8;

const result = a > 10 ? console.log(a + ' is greater than 10') : console.log(a + ' is less than 10');
const result1 = x > 10 ? console.log(x + ' is greater than 10') : x < 10 ? console.log(x + ' is less than 10') : console.log(x + ' is equal 10');
console.log(result);
