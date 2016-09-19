window.addEventListener( 'DOMContentLoaded', function () {
    // получить копию участка массива
    // slice( start, end )
    // start && end - индексы массива
    // end - не включительно
    let array = [ 'python', 'ruby', 'c#', 'c++', 'ror', 'lisp' ];
    let arrayPart = array.slice( 1, 3 );
    console.log('------------------------');
    console.log( array );
    console.log( arrayPart );
    console.log('------------------------');
    let arrayToTheEnd = array.slice( 2 );
    console.log( array );
    console.log( arrayToTheEnd );
    console.log('------------------------');
    //
    // Object.keys( exampleOfObject )
    // этот метод получает все ключи объекта и преобразует их в строковый массив для дальнейшей работы
    //
    let dog = {
        tail: 1,
        head: 1,
        paws: 4,
        kind: true,
        friends: [ 'man', 'woman', 'children' ],
        enemies: [ 'cats' ],
        color: 'brown'
    };
    let keysOfDog = Object.keys( dog );
    console.log( keysOfDog );
    console.log('------------------------');
}, false);























