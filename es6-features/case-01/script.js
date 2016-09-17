window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let say = 'hello';
    let outer = 'another variable';
    if ( say === 'hello' ) {
        let say = 'goodbay';
        console.log( say );
        console.log( outer );
        let inner = 'inner variable';
        console.log( inner );
    }
    console.log( say );
    // console.log( inner );
    // -------------------------------------------------------
    let someFunc = ( value ) => {
        console.log( value );
    };
    someFunc( 20 );
    // -------------------------------------------------------
    let square = ( x ) => {
        return x * x;
    };
    console.log( square( 2 ) );
    // =======================================================
    let planets = [ 'jupiter', 'venus', 'mars', 'saturn' ];
    let mountains = [ 'everest', 'k2', 'lhotse', 'kanchanjunga' ];
    let fruits = [ 'apple', 'melon', 'lime', 'kiwi', 'watermelon', 'grape' ];
    let animals = [ 'cat', 'dog', 'bird', 'horse', 'raven', 'lizard' ];
    let colors = [ 'blue', 'green', 'red' ];
    function displayElements( element ) {
        console.log( element );
    }
    function displayElementsAndIndex( element, index ) {
        console.log( index + ' : ' + element );
    }
    function displayArray( element, index, array ) {
        console.log( array.toString() );
    }
    planets.forEach( displayElements );
    mountains.forEach( displayElements );
    fruits.forEach( displayElementsAndIndex );
    animals.forEach( displayArray );
    // ----------------------------------------------------------
    colors.forEach( ( item ) => {
        console.log( item );
    })
}, false );
