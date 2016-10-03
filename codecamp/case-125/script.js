window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    function factorialize( num ) {
        let init = 1;
        let count = 1;
        while( count <= num ) {
            init *= count;
            count++;
        }
        num = init;
        return num;
    }
    console.log( factorialize( 6 ) );
    // -------------------------------------------------------
}, false );