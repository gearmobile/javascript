window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let myObj = {
        gift: 'pony',
        pet: 'kitten',
        bed: 'sleigh'
    };
    function checkObj ( checkProp ) {
        return myObj[ checkProp ] ? myObj[ checkProp ] : 'Not Found';
    }
    checkObj( 'gift' );
    // -------------------------------------------------------
}, false );