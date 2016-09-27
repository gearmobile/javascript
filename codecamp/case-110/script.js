window.addEventListener( 'load', function () {
    let contacts = [
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
    //
    let single = {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: [ 'Pizza', 'Coding', 'Brownie Points' ]
    };
    //
    function test( object, key ) {
        let flag = false;
        let propName = key.toString().toLowerCase();
        let keys = Object.keys( object );
        // keys to lower case
        let array = [];
        for ( let i = 0; i < keys.length; i++ ) {
            let keyValue = keys[i].toLowerCase();
            array.push( keyValue );
        }
        // search if equal
        for ( let j = 0; j < array.length; j++ ) {
            if ( array[j] === propName ) {
                flag = true;
            }
        }
        return flag ? key : 'not property';
    }
    //
    console.log( test( single, 'nmber' ) );
    //
}, false );
































