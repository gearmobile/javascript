window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let Car = function( param1, param2, param3 ) {
        this.wheels = param1;
        this.seats = param2;
        this.engines = param3;
    };

    //Try it out here
    let myCar = new Car( 4, 6, 1 );
    console.log( myCar );
    // -------------------------------------------------------
}, false );