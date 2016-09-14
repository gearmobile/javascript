window.addEventListener( 'DOMContentLoaded', function () {
    let names = [ 'Маша', 'Петя', 'Марина', 'Василий' ];
    let arr = names.join('-');
    let arrShort = names.join('');
    console.log( '------------------------' );
    console.log( arr );
    console.log( '------------------------' );
    console.log( arrShort );
    console.log( '------------------------' );
    console.log( [ 'Маша', 'Петя', 'Марина', 'Василий', 10 ].join(' ') );
}, false);