window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let testString = 'There are 3 cats but 4 dogs.';
    let expression = /\d+/g;
    // найти число вхождений любых цифр в строке
    console.log( testString.match( expression ).length );
    // -------------------------------------------------------
}, false );