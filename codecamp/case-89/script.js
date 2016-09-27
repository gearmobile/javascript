window.addEventListener( 'load', function () {
    //
    var ourDog = {
        'name': 'Camper',
        'legs': 4,
        'tails': 1,
        'friends': [ 'everything!' ]
    };
    ourDog.name = 'Happy Camper';
    console.log( ourDog.name );
    //
    var myDog = {
        'name': 'Coder',
        'legs': 4,
        'tails': 1,
        'friends': ['Free Code Camp Campers']
    };
    myDog.name = 'Happy Coder';
    console.log( myDog.name );
}, false );