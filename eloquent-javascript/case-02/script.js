window.addEventListener( 'load', function () {
    function Point( x, y ) {
        // properties
        this.coordsX = x;
        this.coordsY = y;
        // method
        this.print = function () {
            console.log( 'Coordinate X is ' + this.coordsX + ' and Coordinate Y is ' + this.coordsY );
        };
    }
    // constructor properties
    Point.maxPointCount = 100;
    // constructor method
    Point.getOrigin = function () {
        return new Point( 0, 0 );
    };
    //
    let p1 = new Point( 100, 200 );
    console.log( p1.coordsY );
    console.log( p1.coordsX );
    console.log( p1.print() );
    //
    let p2 = new Point( 200, 300 );
    console.log( p2.print() );
    //
    Point.maxPointCount = 10;
    console.log( Point.getOrigin().print() );
}, false );





