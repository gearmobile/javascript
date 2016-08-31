/**
 * Created by gearmoile on 8/31/16.
 */

var foo = [ 'uno', 'duo', 'tre', 'quattro', 'cindue', 'sei', 'sedici', 'first' ];
var recent = foo[ foo.length-1 ];
console.log( recent );

// -----------------------------------------------------

function phraseOMatic () {

    var arr1 = [ 'uno', 'duo', 'tre', 'quattro', 'cindue', 'sei', 'sedici' ];
    var arr2 = [ 'first', 'second', 'third' ];
    var arr3 = [ 'apple', 'melon', 'watermelon', 'lemon', 'grapefruit', 'grapewine' ];

    var rand1 = Math.floor( Math.random() * arr1.length );
    var rand2 = Math.floor( Math.random() * arr2.length );
    var rand3 = Math.floor( Math.random() * arr3.length );

    var phrase = arr1[rand1] + ' ' + arr2[rand2] + ' ' + arr3[rand3];

    return phrase;
}

console.log( phraseOMatic() );

// -----------------------------------------------------