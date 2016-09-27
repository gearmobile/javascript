window.addEventListener( 'load', function () {
    //
    let someProp = 'propName';
    let myObj = {
        propName: 'Some Value'
    };
    myObj[someProp]; // => 'Some Value'
    //
    let myDog = 'Hunter';
    let dogs = {
        Fido: 'Mutt',
        Hunter: 'Doberman',
        Snoopie: 'Beagle'
    };
    let breed = dogs[myDog];
    console.log(breed); // => 'Doberman'
    //
    var testObj = {
        12: 'Namath',
        16: 'Montana',
        19: 'Unitas'
    };
    var playerNumber = 16;
    var player = testObj[playerNumber];
    console.log( player );
    //
}, false );