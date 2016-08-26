/**
 * Created by gearmoile on 8/25/16.
 */

var temp = 81;
var willRain = true;
var humid = ( temp > 80 && willRain === true );
console.log( 'Humid is ' + humid );

// ----------------------------------------------------------

var guess = 6;
var isValid = ( guess >= 0 && guess <= 6 );
console.log( 'isValis is ' + isValid );

// ----------------------------------------------------------

var kb = 1287;
var tooBig = ( kb > 1000 );
var urgent = true;
var sendFile = ( urgent === true || tooBig === false );
console.log( 'sendFile is ' + sendFile );

// ----------------------------------------------------------

var keyPressed = 'N';
var points = 142;
var level;
if ( keyPressed === 'Y' || ( points > 100 && points < 200 ) ) {
    level = 2;
} else {
    level = 1;
}
console.log( 'Level is ' + level );

// ------------------------------------------------------------

function firstPrice () {
    var argument = prompt( 'Enter your price', '200' );
    if ( argument < 200 || argument > 600 ) {
        alert( 'Price is not correct' );
    } else {
        alert( 'Price is correct' );
    }
}

function secondPrice ( argument ) {
    var argument = prompt( 'Enter your price', '200' );
    if ( argument >= 200 || argument <= 600 ) {
        alert( 'Price is correct' );
    } else {
        alert( 'Price is not correct' );
    }
}

function thirdPrice () {
    var price = prompt( 'Enter your price', '200' );
    price = parseInt( price );
    if ( price !== null ) {
        if ( price >= 200 && price <= 600 ) {
            alert( 'Price is correct' );
        } else {
            alert( 'Price is not correct' );
        }
    }
}

document.querySelector( '.calc-price' ).addEventListener( 'click', secondPrice, false );

// -------------------------------------------------------------

function doggy ( argument1, argument2 ) {
    if ( argument1 > 20 ) {
        console.log( argument2 + ' says WOOF' );
    } else {
        console.log( argument2 + ' says woof' );
    }
}

doggy( 20, 'juno' );
doggy( -1, 'scottie' );
doggy( 0, 'dino', 0 );
doggy( '20', 'fido' );
doggy( 10, 'lady' );
doggy( 21, 'bruno' );

// -------------------------------------------------------------

function whatShallWear ( temp ) {
    if ( temp < 60 ) {
        console.log( 'Wear a jacket' );
    } else if ( temp < 70 ) {
        console.log( 'Wear a sweater' );
    } else {
        console.log( 'Wear a t-shirt' );
    }
}

var student = 'new';
var stage = ( student === 'necomer' );

whatShallWear( 50 );
whatShallWear( 80 );
whatShallWear( 60 );

console.log( stage );

// --------------------------------------------------------------

function doIt ( param ) {
    param = 2;
}

var test = 1;
doIt( test );
console.log( test );

// ---------------------------------------------------------------

function speak ( kind ) {
    var speakDefault = '';
    if ( kind === 'dog' ) {
        console.log( 'woof' );
    } else if ( kind === 'cat' ) {
        console.log( 'meow' );
    } else {
        console.log( speakDefault );
    }
}

var pet = prompt(  'Enter type of your pet: ' );

speak( pet );

// ---------------------------------------------------------------

function secret () {
    console.log( 'The secret of life is 42' );
}

secret();

// ---------------------------------------------------------------

function makeTea ( cups, tea ) {
    console.log( 'Brewing ' + cups + ' cups of ' + tea );
}

var guests = 3;

makeTea( guests, 'Earl Grey' );

// ---------------------------------------------------------------

function dogYears ( name, age ) {
    var years = age * 7;
    console.log( name + ' is ' + years + ' years old' );
}

var myDog = 'Fido';
dogYears( myDog, 4 );

// ---------------------------------------------------------------