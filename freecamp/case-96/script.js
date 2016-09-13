window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var ourPets = [
        {
            animalType: 'cat',
            names: [ 'Meowzer', 'Fluffy', 'Kit-Cat' ]
        },
        {
            animalType: 'dog',
            names: [ 'Spot', 'Bowser', 'Frankie' ]
        }
    ];
    console.log( ourPets[0].names[1] ); // => 'Fluffy'
    console.log( ourPets[1].names[0] ); // => 'Spot'
    // -------------------------------------------------------
    let myPlants = [
        {
            type: 'flowers',
            list: [ 'rose', 'tulip', 'dandelion' ]
        },
        {
            type: 'trees',
            list: [ 'fir', 'pine', 'birch' ]
        }
    ];
    console.log( myPlants[1].list[1] ); // => pine
}, false );