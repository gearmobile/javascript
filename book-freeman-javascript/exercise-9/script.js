/**
 * Created by gearmoile on 9/3/16.
 */
'use strict';

// -------------------------------------------------------------------------------
let secret;
const pwd = 'secret';
const newContent = 'Dr. Evel\'s next meeting is in Philadelphia.';

let superSecretFile = {
    level: 'classified',
    opened: 0,
    password: 'secret',
    contents: 'Dr. Evel\'s next meeting is in Detroit.'
};

function getSecret( file, password ) {
    file.opened += 1;
    if ( file.password === password ) {
        return file.contents;
    } else {
        return console.log( 'Error! Invalid password.' );
    }
}

function setSecret( file, password, content ) {
    if ( password === file.password ) {
        file.opened = 0;
        file.contents = content;
    }
}

window.addEventListener( 'DOMContentLoaded', function () {
    secret = getSecret( superSecretFile, pwd );
    console.log( secret );
    // -------------------------------------------------
    setSecret( superSecretFile, pwd, newContent );
    secret = getSecret( superSecretFile, pwd );
    console.log( secret );
}, false );


// --------------------------------------------------------------------------------------

function makeCar() {
    // -----------------------------
    const makes = [ 'Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker' ];
    const models = [ 'Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo' ];
    const years = [ 1955, 1957, 1948, 1954, 1961 ];
    const colors = [ 'red', 'blue', 'tan', 'yellow', 'white' ];
    const convertible = [ true, false ];
    // -----------------------------
    let makesRand = Math.floor( Math.random() * makes.length );
    let modelsRand = Math.floor( Math.random() * models.length );
    let yearsRand = Math.floor( Math.random() * years.length );
    let colorsRand = Math.floor( Math.random() * colors.length );
    let convertibleRand = Math.floor( Math.random() * convertible.length );
    let passengersQuantity = Math.floor( Math.random() * 4 ) + 1;
    // -----------------------------
    return {
        make: makes[ makesRand ],
        model: models[ modelsRand ],
        year: years[ yearsRand ],
        color: colors[ colorsRand ],
        convertible: convertible[ convertibleRand ],
        passengers: passengersQuantity,
        mileage: 0
    };
}

function showCar( object ) {
    console.log( 'Your new car is a ' + object.year + ' ' + object.make + ' ' + object.model );
}

window.addEventListener( 'DOMContentLoaded', function () {
    document.querySelector( '#car' ).addEventListener( 'click', function () {
        showCar( makeCar() );
    }, false );
}, false );

// --------------------------------------------------------------------------------------

let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000,
    drive: function () {
        console.log( 'zoom zoom' );
    }
};

fiat.drive();

// --------------------------------------------------------------------------------------
























