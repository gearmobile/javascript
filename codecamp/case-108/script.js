window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    // \s - whitespace
    // \r - carriage return
    // \n - new line
    // \t - tab
    // \f - form feed
    // -------------------------------------------------------
    let testString = 'How many spaces are there in this sentence?';
    let shablon = /\s+/g;
    // найти кол-во всех пробельных символов в строке
    console.log( testString.match( shablon ).length );
}, false );