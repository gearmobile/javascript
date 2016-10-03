window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var array = [ 1, 12, 21, 2 ];
    array.sort(function( a, b ) {
        return a > b;
    });
    console.log( array );
    array.sort( function ( a, b ) {
        return a < b;
    });
    console.log( array );
    // -------------------------------------------------------
}, false );