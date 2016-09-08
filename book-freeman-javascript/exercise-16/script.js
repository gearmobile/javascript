

function lieDetectorTest() {
    let lies = 0;
    let stolenDiamonds = {};

    if ( stolenDiamonds ) { // => true
        console.log( 'You stole the diamond' );
        lies++;
    }

    let car = {
        keysInPocket: null
    };

    if ( car.keysInPocket ) { // => false
        console.log( 'Uh oh, guess you stole the car!' );
        lies++;
    }

    if ( car.emptyGasTank ) { // => false
        console.log( 'You drove the car after you stole it!' );
        lies++;
    }

    let foundYouAtTheCrimeScene = [];
    if ( foundYouAtTheCrimeScene ) { // => true
        console.log( 'A sure sign of guilt' );
        lies++;
    }

    if ( foundYouAtTheCrimeScene[0] ) { // => false
        console.log( 'Caught with a stolen item!' );
        lies++;
    }

    let yourName = ' ';
    if ( yourName ) { // => true
        console.log( 'Guess you lied about your name' );
        lies++;
    }

    return lies;
}

let numberOfLies = lieDetectorTest();
console.log( 'You told ' + numberOfLies + ' lies!' );
if ( numberOfLies >= 3 ) {
    console.log( 'Guilty as charged' );
}

// ---------------------------------------------------------------------

let text = 'YOU SHOULD NEVER SHOUT WHEN TYPING';
let presentableText = text.toLowerCase();
if ( presentableText.length > 0 ) {
    console.log( presentableText );
}

// ---------------------------------------------------------------------

let emot = 'XOxxOO';
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

// посчитать количество нужных символов в строке
for ( let i = 0; i < emot.length; i++ ) {
    if ( emot.charAt( i ) === 'X' ) {
        hugs++;
    } else if ( emot.charAt( i ) === 'O' ) {
        kisses++;
    }
}

console.log( hugs );
console.log( kisses );

// ---------------------------------------------------------------------
let name = 'Jenny'; // => primitive
let phone = '867-5309'; // => primitive
let fact = 'This is a prime number'; // => primitive

let songName = name + '/' + phone; // => primitive
let index = songName.indexOf('-'); // songName => object

console.log( index );

if ( fact.substring( 10, 15 ) === 'prime' ) { // fact => object
    console.log( fact ); // => primitive
}









// ---------------------------------------------------------------------
























