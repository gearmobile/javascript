window.addEventListener('DOMContentLoaded', function () {

    var arr = [ 1,2,3,4,5,6,7,8,9,10,15,24,27.40,35,36,37,25,30,45 ];
    var foo = 'three';
    var bass = 'five';

    for( var i = 1; i < arr.length; i++ ) {
        if ( arr[i] % 3 === 0 && arr[i] % 5 === 0 ) {
            console.log( arr[i] + ' ' + foo + ' and ' + bass );
        } else if ( arr[i] % 5 === 0 ) {
            console.log( arr[i] + ' ' + bass );
        } else if ( arr[i] % 3 === 0 ) {
            console.log( arr[i] + ' ' + foo );
        } else {
            console.log( arr[i] + ' error' );
        }
    }

}, false);