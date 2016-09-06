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

    console.log( golfScore( 4, 7 ) );
    console.log( golfScore( 5, 9 ) );

}, false);

function caseInSwitch( val ) {
    let answer;
    switch ( val ) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
        default:
            answer = 'Nothing to choose';
    }
    return answer;
}

console.log( caseInSwitch(1) );

function switchOfStuff( val ) {
    var answer;
    switch ( val ) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
    }
    return answer;
}

console.log( switchOfStuff(1) );



























