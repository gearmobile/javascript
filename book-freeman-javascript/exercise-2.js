/**
 * Created by gearmoile on 8/30/16.
 */

// ---------------------------------------------------------

var clunkCounter;

function display ( output ) {
    console.log( output );
    clunkCounter++;
}

function clunk ( times ) {
    var num = times;
    while ( num > 0 ) {
        display('clunk');
        num--;
    }
}

function amaj ( size ) {
    var facky = 1;
    clunkCounter = 0;
    if ( size === 0 ) {
        display('clunk');
    } else if ( size === 1 ) {
        display('thunk');
    } else {
        while ( size > 1 ) {
            facky = facky * size;
            size--;
        }
        clunk(facky);
    }
}


amaj( 5 );
console.log( clunkCounter );
amaj( 4 );
console.log( clunkCounter );
amaj( 3 );
console.log( clunkCounter );
amaj( 2 );
console.log( clunkCounter );
amaj( 1 );
console.log( clunkCounter );
amaj( 0 );
console.log( clunkCounter );


























// ---------------------------------------------------------