window.addEventListener( 'load', function () {
    //
    let string = 'my-short-string';
    // transform my-short-string to myShortString
    function camelize( str ) {
        let value = str.split( '' );
        for ( let i = 0; i < value.length; i++ ) {
            if (value[ i ] === '-') {
                value.splice( i, 1 );
            }
        }
        value = value.join( '' );
        console.log( value );
    }
    console.log( camelize( string ) );
}, false );


