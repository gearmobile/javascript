/**
 * Created by gearmoile on 9/4/16.
 */

let cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function () {
        this.started = true;
        console.log( 'The engine of ' + this.make + ' started' );
    },
    stop: function () {
        this.started = false;
        console.log( 'The engine of ' + this.make + ' stoped' );
    },
    drive: function () {
        if ( this.started ) {
            console.log( this.make + ' ' + this.model + ' goes zoom zoom!');
        } else {
            console.log( 'You need to start the engine first.' );
        }
    }
};
let taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
        console.log( 'The engine of ' + this.make + ' started' );
    },
    stop: function () {
        this.started = false;
        console.log( 'The engine of ' + this.make + ' stoped' );
    },
    drive: function () {
        if ( this.started ) {
            console.log( this.make + ' ' + this.model + ' goes zoom zoom!');
        } else {
            console.log( 'You need to start the engine first.' );
        }
    }
};

let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function () {
        this.started = true;
        console.log( 'The engine of ' + this.make + ' started' );
    },
    stop: function () {
        this.started = false;
        console.log( 'The engine of ' + this.make + ' stoped' );
    },
    drive: function () {
        if ( this.started ) {
            console.log( this.make + ' ' + this.model + ' goes zoom zoom!');
        } else {
            console.log( 'You need to start the engine first.' );
        }
    }
};

window.addEventListener( 'DOMContentLoaded', function () {
    document.querySelector( '#primo' ).addEventListener( 'click', function () {
        cadi.start();
    }, false );
    document.querySelector( '#secondo' ).addEventListener( 'click', function () {
        cadi.drive();
    }, false );
    document.querySelector( '#tetro' ).addEventListener( 'click', function () {
        cadi.stop();
    }, false );
    for ( let prop in cadi ) {
        console.log( prop + ' : ' + cadi[prop] );
    }
}, false );








