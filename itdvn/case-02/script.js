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
    // замещение стандартного метода toString()
    Rectangle.prototype.toString = function () {
        return 'Прямоугольник W:' + this.width + ' H:' + this.height;
    };
    //
    let rect1 = new Rectangle( 100, 200 );
    let rect2 = new Rectangle( 200, 300 );
    //
    console.log( rect1 );
    console.log( rect2.toString() );
    console.log( rect2.hasOwnProperty('width') );
    console.log( rect2.hasOwnProperty('getArea') );
    //
}, false);
