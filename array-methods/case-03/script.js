window.addEventListener( 'DOMContentLoaded', function () {
    //
    // просто удалить элементы из массива
    //
    let array = [ 'python', 'ruby', 'c#', 'c++', 'ror', 'lisp' ];
    console.log( array );
    let deletedElements = array.splice( 3, 1 );
    console.log( array );
    console.log( deletedElements );
    console.log('-------------------------');
    //
    // удалить 3 первых элемента и добавить другие вместо них
    //
    let anotherElements = array.splice( 2, 4, 'javascript', 'angular', 'canvas', 'react' );
    console.log( array );
    console.log( anotherElements );
    console.log('-------------------------');
    //
    // просто вставить элементы в массив
    // вставка выполняется ПЕРЕД начальным положением
    //
    array.splice( 1, 0, 'gulp', 'webpack' );
    console.log( array );
    let anotherAttempt = array.splice( 1, 1 );
    console.log( anotherAttempt );
    console.log('-------------------------');
    // заключение
    // метод splice() может
    // - удалить элементы массива
    // - вставить элементы массива
    // - удалить и вставить элементы массива
    //
}, false);
