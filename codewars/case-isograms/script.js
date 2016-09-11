window.addEventListener( 'load', function () {
    //
    let word = 'lorem ipsum dolor est';
    //
    function validate( string ) {
        return string.match(/isograms/g);
    }
    console.log( validate( word ) );
    //
}, false );

// regexp
// map array

