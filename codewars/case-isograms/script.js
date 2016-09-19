window.addEventListener( 'load', function () {
    //
    // есть две строки
    // найти уникальное вхождение каждой буквы из первой строки во второй строке
    // если все вхождения найдены - true, иначе - false
    // регистр символов не учитывать
    //
    // input data
    let pattern = 'iSoGrAmS';
    let string = 'LorempSumSoGrIAmSDoloresSt';
    // create array of unique elements
    function unique( array ) {
        array = array.split('');
        let obj = {};
        for ( let i = 0; i < array.length; i++ ) {
            let value = array[i].toLowerCase();
            obj[ value ] = true;
        }
        return Object.keys( obj ).sort();
    }
    // compare to array to find intersection elements
    function intersecArrays( first, second ) {
        first = unique( first );
        second = unique( second );
        let intersec = [];
        for ( let i = 0; i < first.length; i++ ) {
            let value = first[i];
            for ( let j = 0; j < second.length; j++ ) {
                if ( second[j] === value ) {
                    intersec.push( value );
                }
            }
        }
        return ( first.length === intersec.length );
    }
    console.log( intersecArrays( pattern, string ) );
    //
    // semigradsky example
    //
    let pattern = 'iSoGrAmS';
    let string = 'LorempSumSoGriAmSDoloresSt';
    // compare to array to find intersection elements
    function intersecArrays(first, second) {
        const letters = new Set(second.toLocaleLowerCase());
        return [...first.toLocaleLowerCase()].every(c => letters.has(c));
    }
    //
    // dvz example
    //
    function compareMore( first, second ) {
        let idx = second.toLowerCase().split('').reduce( ( result, letter ) => {
            result[ letter ] = true;
            return result;
        }, {} );
        let check = first.toLowerCase();
        for ( let i = 0; i < check.length; i++ ) {
            if ( !idx[ check[ i ] ] ) return false;
        }
        return true;
    }
    //
    // если все буквы первой строки должны найтись ровно один раз во второй
    //
    function compareOnce( first, second ) {
        let idx = second.toLowerCase().split('').reduce(( result, letter ) => {
            result[ letter ] = ( result[ letter ] || 0 ) + 1;
            return result;
        }, {});
        let check = first.toLowerCase();
        for ( let i = 0; i < check.length; i++ ) {
            if ( idx[ check[i] ] !== 1 ) return false;
        }
        return true;
    }
    //
    //
}, false );


