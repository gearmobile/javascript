window.addEventListener( 'DOMContentLoaded', function () {
    console.log('---------------------------');
    let names = 'John, Mary, Peter, Donovan, Lou';
    let longName = 'aaronson';
    let arr = names.split(', ');
    for ( let i = 0; i < arr.length; i++ ) {
        console.log( 'Message to you ' + arr[i] );
    }
    console.log('---------------------------');
    let arrShort = names.split(', ', 3);
    for ( let j = 0; j < arrShort.length; j++ ) {
        console.log( 'Message for you ' + arrShort[j] );
    }
    console.log('---------------------------');
    let arrChars = longName.split('');
    console.log( arrChars );
    console.log('---------------------------');
}, false);
