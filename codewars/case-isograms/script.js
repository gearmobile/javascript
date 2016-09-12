window.addEventListener( 'load', function () {
    //
    let pattern = 'isograms';
    //let ptrArray = Array.prototype.slice().apply.pattern;
    let string = 'abcdfebcas';
    for ( let i = 0; i < pattern.length; i++ ) {
        let char = pattern.charAt( i );
        if ( string.indexOf( char ) >= 0 ) {
            console.log( char );
        }
    }
    //
    //console.log(ptrArray);
}, false );


