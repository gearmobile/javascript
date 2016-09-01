/**
 * Created by gearmoile on 8/30/16.
 */

// ---------------------------------------------------------------

let avatar = 'generic';
const skills = 1.0;
const pointsPerLevel = 1000;
let userPoints = 2008;

console.log( 'Variable avatar before: ' + avatar );
console.log( 'Variable userPoints before: ' + userPoints );

function getAvatar( points ) {
    const level = points / pointsPerLevel;
    if ( level === 0 ) {
        return 'Teddy Bear';
    } else if ( level === 1 ) {
        return 'Cat';
    } else if ( level >= 2 ) {
        return 'Gorilla';
    }
}

avatar = getAvatar( 2112 );
console.log( 'Variable avatar after: ' + avatar );

function updatePoints( bonus, newPoints ) {
    let i = 0;
    while ( i < bonus ) {
        newPoints = newPoints + skills * bonus;
        i++;
    }
    return newPoints + userPoints;
}

userPoints = updatePoints( 2, 100 );
console.log( 'Variable userPoints after: ' + userPoints );

// -----------------------------------------------------------------

const x = 32;
const y = 44;
const radius = 5;

let centerX = 0;
let centerY = 0;
const width = 600;
const height = 400;

function setup( parameter1, parameter2 ) {
    centerX = parameter1 / 2;
    centerY = parameter2 / 2;
}

function computeDistance( x1, x2, y1, y2 ) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    const d2 = ( dx * dx ) + ( dy * dy );
    return Math.sqrt( d2 );
}

function circleArea( parameter ) {
    return Math.PI * parameter * parameter;
}

setup( width, height );
const area = circleArea( radius );
const distance = computeDistance( x, centerX, y, centerY );

console.log( 'Global variable area is ' + area );
console.log( 'Global variable distance is ' + distance );

// -------------------------------------------------------------------
