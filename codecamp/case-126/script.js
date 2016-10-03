window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    function palindrome( str ) {
        let origin = str.replace( /[^\w\s]/gi, '' ).replace( /([\d\s*])(_*)/gi,'' ).toLowerCase();
        let copy= origin.split('').reverse().join('');
        return origin === copy;
    }
    console.log( palindrome( '_eye' ) );
    // -------------------------------------------------------
}, false );