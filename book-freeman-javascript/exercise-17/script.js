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