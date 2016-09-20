window.addEventListener( 'DOMContentLoaded', function () {
    //
    function isMore ( element ) {
        return element >= 10;
    }
    function isExist ( element ) {
        return element === 32;
    }
    let array1 = [ 10, 20, 3, 4, 39, 45, 12, 32, 23, 98 ];
    let array2 = [ 10, 20, 32, 44, 39, 45, 12, 32, 23, 98 ];
    console.log( array1.every( isMore ) ); // => false
    console.log( array2.every( isMore ) ); // => true
    console.log( array2.some( isExist ) ); // => true
}, false);