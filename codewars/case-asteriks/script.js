window.addEventListener( 'load', function () {
    //
    let asteriks = '#';
    for ( let j = 0; j <= 7; j++ ) {
        console.log( asteriks );
        asteriks += '#';
    }
    //
    for ( let i = 0; i <= 100; i++ ) {
        i++;
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log( 'Integer ' + i + ' divides by 3 and 5' );
        } else if ( i % 3 === 0 ) {
            console.log( 'Integer ' + i + ' divides by 3' );
        } else if ( i % 5 === 0 ) {
            console.log( 'Integer ' + i + ' divides by 5' );
        }
    }
    //
    console.log( /[dolor]/.test( 'ecmadoloest' ) );
}, false );
