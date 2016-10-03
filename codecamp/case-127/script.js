window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var str = 'Twas the night before Xmas...';
    var newStr = str.replace( /xmas/i, 'Christmas' );
    console.log( newStr );
    //
    var reg = /apples/gi;
    var string = 'Apples are round, and apples are juicy.';
    var withoutApples = string.replace( reg, 'oranges' );
    console.log( withoutApples );
    //
    var toModify = 'Apples are round, and apples are juicy.';
    var modifiedStr = toModify.replace( 'Apples', 'Oranges' );
    console.log( modifiedStr );
    //
    function styleHyphenFormat( name ) {
        function upperToLower( char ) {
            return [ '-', char.toLowerCase() ].join('');
        }
        return name.replace( /[A-Z]/g, upperToLower );
    }
    console.log( styleHyphenFormat( 'fontWeight' ) );
    // -------------------------------------------------------
}, false );