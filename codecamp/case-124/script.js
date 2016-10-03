window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    function reverseString( str ) {
        return str.split('').reverse().join('');
    }
    console.log( reverseString( 'hello' ) );
    // -------------------------------------------------------
}, false );