 window.addEventListener( 'load', function () {

    // variables
    // -----------------------------------------------

    var location1 = Math.floor( Math.random() * 5 );
    var location2 = location1 + 1;
    var location3 = location2 + 1;
    console.log( location1, location2, location3 );
    var guess = null;
    var hits = 0;
    var guesses = 0;
    var isSunk = false;
    var statistica = null;

    // -----------------------------------------------
    // logic
    // -----------------------------------------------

    while ( !isSunk ) {
        guess = prompt( 'Enter number form 0 to 6', '4' );
        guess = parseInt( guess );
        if ( guess >= 0 && guess <= 6 ) {
            guesses++;
            if ( guess === location1 || guess === location2 || guess === location3 ) {
                hits++;
                alert( 'You guess!' );
                if ( hits === 3 ) {
                    isSunk = true;
                    alert( 'Game over' );
                }
            } else {
                alert( 'You miss!' );
            }
        } else if ( guess !== null ) {
            isSunk = true;
        } else {
            alert( 'Enter correct value' );
        }
    }
    statistica = 'Your guesses ' + guesses;
    alert( statistica );

    // -----------------------------------------------
}, false );