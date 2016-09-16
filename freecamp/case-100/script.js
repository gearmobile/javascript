window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var ourArray = [];
    for (var i = 10; i > 0; i -= 2) {
        ourArray.push(i);
    }
    console.log( ourArray );
    var myArray = [];
    for ( var j = 9; j >= 1; j -= 2 ) {
        myArray.push(j);
    }
    console.log( myArray );
    // -------------------------------------------------------
}, false );