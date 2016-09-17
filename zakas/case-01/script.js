window.addEventListener( 'DOMContentLoaded', function () {
    let book = {
        title: 'Professional JavaScript',
        authors: [
            'Nicholas С. Zakas'
        ],
        edition: 3,
        year: 2011
    };
    let bookString = JSON.stringify( book );
    console.log( bookString );
    console.log('------------------------');
    let bookCopy = JSON.parse( bookString );
    console.log(bookCopy );
    console.log('------------------------');
}, false);
