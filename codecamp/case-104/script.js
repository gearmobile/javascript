window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var contacts = [
        {
            firstName: 'Akira',
            lastName: 'Laine',
            number: '0543236543',
            likes: [ 'Pizza', 'Coding', 'Brownie Points' ]
        },
        {
            firstName: 'Harry',
            lastName: 'Potter',
            number: '0994372684',
            likes: [ 'Hogwarts', 'Magic', 'Hagrid' ]
        },
        {
            firstName: 'Sherlock',
            lastName: 'Holmes',
            number: '0487345643',
            likes: [ 'Intriguing Cases', 'Violin' ]
        },
        {
            firstName: 'Kristian',
            lastName: 'Vos',
            number: 'unknown',
            likes: [ 'Javascript', 'Gaming', 'Foxes' ]
        }
    ];
    function lookUpProfile( value, key ){
        let test = value.toString().toLowerCase();
        let names = {};
        let keys = {};
        for ( let i = 0; i < contacts.length; i++ ) {
            names[ contacts[i]['firstName'].toLowerCase() ] = true;
        }
        if ( !names[ test ] ) return 'no such contact';
    }
    console.log( lookUpProfile( 'Akira' ) );
    console.log( lookUpProfile( 'Harry' ) );
    console.log( lookUpProfile( 'Sherlock' ) );
    console.log( lookUpProfile( 'Kristian' ) );
    console.log( lookUpProfile( 'Kristan' ) );
    // -------------------------------------------------------
}, false );
































