window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var Car = function() {
        // this is a private variable
        var speed = 10;

        // these are public methods
        this.accelerate = function( change ) {
            speed += change;
        };

        this.decelerate = function() {
            speed -= 5;
        };

        this.getSpeed = function() {
            return speed;
        };
    };

    // -------------------------------------------------------

    var Bike = function() {

        let gear = 20;

        this.getGear = function () {
            return gear;
        };

        this.setGear = function ( argument ) {
            gear = argument;
        };

    };
    // -------------------------------------------------------
    var myBike = new Bike();
    console.log( myBike.getGear() );
    myBike.setGear( 30 );
    console.log( myBike.getGear() );
    // -------------------------------------------------------
}, false );