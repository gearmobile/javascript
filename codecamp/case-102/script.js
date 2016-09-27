window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var arr = [
        [ 1, 2 ],
        [ 3, 4 ],
        [ 5, 6 ]
    ];
    for ( var i = 0; i < arr.length; i++ ) {
        for ( var j = 0; j < arr[i].length; j++ ) {
            console.log( arr[i][j] );
        }
    }
    // -------------------------------------------------------
    function multiplyAll( arr ) {
        var product = 1;
        for ( var k = 0; k < arr.length; k++ ) {
            for ( var l = 0; l < arr[k].length; l++ ) {
                product *= arr[k][l];
            }
        }
        return product;
    }
    console.log( multiplyAll( [ [ 1, 2 ], [ 3, 4 ], [ 5, 6, 7 ] ] ) );
    // -------------------------------------------------------
}, false );