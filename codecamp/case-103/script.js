window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var ourArray = [];
    var i = 0;
    while( i < 5 ) {
        ourArray.push(i);
        i++;
    }
    // -------------------------------------------------------
    var myArray = [];
    var count = 0;
    while ( count <= 4 ) {
        myArray.push( count );
        count++;
    }
    console.log( myArray );
    // -------------------------------------------------------
}, false );