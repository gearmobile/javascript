window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let veggies = [ 'Celery', 'Radish', 'Carrot', 'Potato' ];
    let salad = veggies.join( ' and ' );
    console.log( salad );
    //
    var joinMe = [ 'Split', 'me', 'into', 'an', 'array' ];
    var joinedString = '';
    joinedString = joinMe.join(' ');
    console.log( joinedString );
    // -------------------------------------------------------
}, false );