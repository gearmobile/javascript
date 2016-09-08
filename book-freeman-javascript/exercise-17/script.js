window.addEventListener('DOMContentLoaded', function () {
    let input = 'jenny@wickedlysmart.com';
    for ( let i = 0; i < input.length; i++ ) {
        if ( input.charAt(i) === '@' ) {
            console.log( 'There\'s an @ sign at index ' + i );
        }
    }
}, false);
