window.addEventListener( 'DOMContentLoaded', function () {
    //
    let arr = new Array(10);
    function isArrayTrue( param ) { // keyword instanceof
        if ( param instanceof Array) {
            console.log( 'Is array' );
        }
    }
    console.log( Array.isArray( arr ) );
    console.log( isArrayTrue( arr ) );
}, false);

