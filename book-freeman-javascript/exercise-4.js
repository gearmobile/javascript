/**
 * Created by gearmoile on 8/31/16.
 */

const foo = [ 'uno', 'duo', 'tre', 'quattro', 'cindue', 'sei', 'sedici', 'first' ];
const recent = foo[ foo.length - 1 ];
console.log( recent );

// -----------------------------------------------------

function phraseOMatic() {

    const arr1 = [ 'uno', 'duo', 'tre', 'quattro', 'cindue', 'sei', 'sedici' ];
    const arr2 = [ 'first', 'second', 'third' ];
    const arr3 = [ 'apple', 'melon', 'watermelon', 'lemon', 'grapefruit', 'grapewine' ];

    let rand1 = Math.floor( Math.random() * arr1.length );
    let rand2 = Math.floor( Math.random() * arr2.length );
    let rand3 = Math.floor( Math.random() * arr3.length );

    return arr1[rand1] + ' ' + arr2[rand2] + ' ' + arr3[rand3];
}

console.log( phraseOMatic() );

// -----------------------------------------------------
