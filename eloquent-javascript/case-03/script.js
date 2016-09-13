window.addEventListener( 'load', function () {
    function Rectange( width, height ) {
        this.width = width;
        this.height = height;
    }
    // create prototype method
    Rectange.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectange.prototype.name = 'rectangle';
    //
    let area1 = new Rectange( 200, 300 );
    // console.log( area1.width );
    // console.log( area1.getArea() );
    console.log( area1.name );
    area1.name = 'circle';
    console.log( 'Object Area1: ' + area1.name );
    console.log( area1 );
    //
    let area2 = new Rectange( 100, 200 );
    // console.log( area2.getArea() );
    console.log( 'Object Area2: ' + area2.name );
}, false );
