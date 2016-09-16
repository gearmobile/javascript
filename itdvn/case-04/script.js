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
    // compare two objects
    Rectangle.prototype.compare = function ( object ) {
        let value = this.getArea() - object.getArea();
        if ( value > 0 ) {
            return 'Current object more than other object';
        } else if ( value < 0 ) {
            return 'Current object less than other object';
        } else if ( value >= 0 ) {
            return 'Current object more or equal than other object';
        } else if ( value <= 0 ) {
            return 'Current object less or equal than other object';
        } else if ( value === 0 ) {
            return 'Current object equal other object';
        } else if ( value !== 0 ) {
            return 'Current object not equal than other object';
        }
    };
    //
    let rect1 = new Rectangle( 100, 200 );
    let rect2 = new Rectangle( 200, 300 );
    console.log( rect1.compare( rect2 ) );
    //
}, false);
