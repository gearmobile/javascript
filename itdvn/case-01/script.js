window.addEventListener( 'DOMContentLoaded', function () {
    let myArray = new Array(10);
    let myDate = new Date();
    let myString = new String('lorem ipsum');
    let myObject = new Object();
    let myFun = new Function( 'x', 'y', 'return x + y' );
    let MyCtr = function ( x, y ) {
        this.x = x;
        this.y = y;
    };
    let myCtrObject = new MyCtr( 12, 3 );
    function showObject( object, name ) {
        console.log( ['Constructor of object', name, 'is', object.constructor].join(' ') );
    }
    console.log('-------------------------------');
    console.log( showObject( myArray, 'myArray' ) );
    console.log( showObject( myDate, 'myDate' ) );
    console.log( showObject( myString, 'myString' ) );
    console.log( showObject( myObject, 'myObject' ) );
    console.log( showObject( myFun, 'myFun' ) );
    console.log( showObject( myCtrObject, 'myCtrObject' ) );
    console.log('-------------------------------');
    let someDate = new myDate.constructor();
    console.log( showObject( someDate, 'someDate' ) );
    console.log('-------------------------------');
}, false);
