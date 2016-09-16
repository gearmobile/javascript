window.addEventListener( 'DOMContentLoaded', function () {
    //
    function Rectangle( w, h ) {
        this.width = w;
        this.height = h;
    }
    // prototype method getarea
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    // create method to compare objects
    Rectangle.prototype.equals = function ( object ) {
        return this.width === object.width && this.height === object.height;
    };
    //
    let rect1 = new Rectangle( 100, 200 );
    let rect2 = new Rectangle( 100, 200 );
    console.log( rect1 === rect2 );
    //
    let rect3 = rect1;
    console.log( rect3 === rect1 );
    //
    console.log('-----------------------');
    console.log( rect1.equals( rect2 ) );
    console.log('-----------------------');
}, false);
