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


    function lookUpProfile( object ){
        for ( let i = 0; i < object.length; i++ ) {
            return object[i];
        }
    }
    console.log( lookUpProfile( contacts ) );
     // Change these values to test your function
    lookUpProfile( 'Akira', 'likes' );
    // -------------------------------------------------------
}, false );