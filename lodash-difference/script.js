window.addEventListener( 'DOMContentLoaded', function () {

    var arrResult;
    var arr1 = [ 1,2,3,4,5,6,7,8 ];
    var arr2 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ];

    if ( arr1.length > arr2.length ) {
        arrResult = _.difference( arr1, arr2 );
    } else if ( arr2.length > arr1.length ) {
        arrResult = _.difference( arr2, arr1 );
    }

    console.log(arrResult);

}, false);