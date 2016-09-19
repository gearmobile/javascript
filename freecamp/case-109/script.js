window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    // \S - non-whitespace character
    // -------------------------------------------------------
    let testString = 'How many non-space characters are there in this sentence?';
    let shablon1 = /\S+/g;
    let shablon2 = /\S/g;
    console.log( testString.match( shablon1 ).length );
    console.log( testString.match( shablon2 ).length );
    // -------------------------------------------------------
}, false );