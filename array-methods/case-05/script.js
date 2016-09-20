window.addEventListener( 'DOMContentLoaded', function () {
    //
    function isMore ( element ) {
        return element >= 10;
    }
    let array1 = [ 10, 20, 3, 4, 39, 45, 12, 32, 23, 98 ];
    let array2 = [ 10, 20, 32, 44, 39, 45, 12, 32, 23, 98 ];
    let test1 = array1.every( isMore );
    let test2 = array2.every( isMore );
    console.log( test1 );
    console.log( test2 );
}, false);