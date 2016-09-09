<<<<<<< HEAD
let phrase = 'the cat in the hat';
let index = phrase.indexOf( 'cat' );
console.log( index );

//string to array with method split()
let data = 'name|phone|address';
let vals = data.split('|');
console.log( vals );

function Duck( sound ) {
    this.sound = sound;
    this.quack = function () {
        console.log( this.sound );
    };
}

let toy = new Duck( 'quack quack' );

toy.quack();

console.log( typeof toy );
console.log( toy instanceof Duck);
=======
window.addEventListener('DOMContentLoaded', function () {
    let input = 'jenny@wickedlysmart.com';
    for ( let i = 0; i < input.length; i++ ) {
        if ( input.charAt(i) === '@' ) {
            console.log( 'There\'s an @ sign at index ' + i );
        }
    }
}, false);
>>>>>>> 17925f37fcf7a712de4edee87e3bc86d0928b2da
