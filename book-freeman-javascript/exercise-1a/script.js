function orderMyLogic( val ) {
    if ( val < 5 ) {
        return 'Less than 5';
    } else if ( val < 10 ) {
        return 'Less than 10';
    } else {
        return 'Greater than or equal to 10';
    }
}

function testSize( num ) {
    if ( num < 5 ) {
        return 'Tiny';
    } else if ( num < 10 ) {
        return 'Small';
    } else if ( num < 15 ) {
        return 'Medium';
    } else if ( num < 20 ) {
        return 'Large';
    } else if ( num >= 20 ) {
        return 'Huge';
    }
}

function golfScore( par, strokes ) {
    // Only change code below this line
    if ( strokes === 1 ) {
        return 'Hole-in-one!';
    } else if ( strokes <= par - 2 ) {
        return 'Eagle';
    } else if ( strokes <= par - 1 ) {
        return 'Birdie';
    } else if ( strokes === par ) {
        return 'Par';
    } else if ( strokes === par + 1 ) {
        return 'Bogey';
    } else if ( strokes === par + 2 ) {
        return 'Double Bogey';
    } else if ( strokes >= par + 3 ) {
        return 'Go Home';
    }
    return 'Change Me';
    // Only change code above this line
}

window.addEventListener( 'DOMContentLoaded', function () {

    //console.log(orderMyLogic(4));
    //console.log(orderMyLogic(6));
    //console.log(orderMyLogic(11));

    console.log( golfScore( 4, 7 ) );
    console.log( golfScore( 5, 9 ) );

}, false);
