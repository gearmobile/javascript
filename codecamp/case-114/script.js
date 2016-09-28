window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let array = [ 4, 5, 6, 7, 8 ];
    let singleVal = array.reduce( function ( previous, current ) {
        return previous + current;
    });
    console.log( singleVal );
    // -------------------------------------------------------
}, false );