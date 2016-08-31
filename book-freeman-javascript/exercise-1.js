/**
 * Created by gearmoile on 8/30/16.
 */

// ---------------------------------------------------------------

var avatar = 'generic';
var skills = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

console.log( 'Variable avatar before: ' + avatar );
console.log( 'Variable userPoints before: ' + userPoints );

function getAvatar ( points ) {
    var level = points / pointsPerLevel ;
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

function updatePoints ( bonus, newPoints ) {
    var i = 0;
    while ( i < bonus ) {
        newPoints = newPoints + skills * bonus ;
        i++;
    }
    return newPoints + userPoints
}

userPoints = updatePoints( 2, 100 );
console.log( 'Variable userPoints after: ' + userPoints );

// -----------------------------------------------------------------

var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup ( width, height ) {
    centerX = width / 2;
    centerY = height / 2;
}

function computeDistance ( x1, x2, y1, y2 ) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var d2 = ( dx * dx ) + ( dy * dy );
    var d = Math.sqrt( d2 );
    return d;
}

function circleArea ( radius ) {
    var area = Math.PI * radius * radius;
    return area;
}

setup( width, height );
var area = circleArea( radius );
var distance = computeDistance( x, centerX, y, centerY );

console.log( 'Global variable area is ' + area );
console.log( 'Global variable distance is ' + distance );

// -------------------------------------------------------------------






















