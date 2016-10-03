window.addEventListener( 'DOMContentLoaded', function () {
    let simpleArray = [ 20, 3, 67, 12, 68, 43, 11, 4, 32, 54, 88, 65, 76, 98, 10 ];
    let complexArray = [
        { key: 'Glazed', value: 132 },
        { key: 'Jelly', value: 71 },
        { key: 'Holes', value: 337 },
        { key: 'Sprinkles', value: 93 },
        { key: 'Crumb', value: 78 },
        { key: 'Chocolate', value: 43 },
        { key: 'Coconut', value: 20 },
        { key: 'Cream', value: 16 },
        { key: 'Cruller', value: 30 },
        { key: 'Eclair', value: 8 },
        { key: 'Fritter', value: 17 },
        { key: 'Bearclaw', value: 21 }
    ];
    let minValue = d3.min( simpleArray );
    let maxValue = d3.max( simpleArray );
    let rangeMinMaxValues = d3.extent( simpleArray );
    console.log('-------------------------------');
    console.log( minValue, maxValue, rangeMinMaxValues );
    console.log('-------------------------------');
    let minValueComplex = d3.min( complexArray, function ( d ) {
        return d.value;
    });
    let maxValueComplex = d3.max( complexArray, function ( d ) {
        return d.value;
    });
    let minMaxValueComplex = d3.extent( complexArray, function ( d ) {
        return d.value;
    });
    let simpleArrayRange = d3.range( 0, simpleArray.length );
    console.log( 'Range is ' + simpleArrayRange );
    console.log('-------------------------------');
    console.log( minValueComplex, maxValueComplex, minMaxValueComplex );
    console.log('-------------------------------');
    //
    let filterValue = simpleArray.filter( function ( item ) {
        return item > 20;
    });
    let filterValueObject = complexArray.filter( function ( item ) {
        return item.value > 20;
    });
    console.log( filterValue );
    console.log( filterValueObject );
    console.log('-------------------------------');
    //
    let remappedArray = complexArray.map( function ( item ) {
        return {
            donut: item.key,
            qty: item.value
        };
    });
    console.log( remappedArray );
    remappedArray.forEach( function ( item ) {
        console.log( item );
    });
    console.log('-------------------------------');
    for ( let i = 0; i < complexArray.length; i++ ) {
        console.log( complexArray[i].key, complexArray[i].value );
    }
    console.log('-------------------------------');
    complexArray.forEach( function ( item ) {
        console.log( item.key, item.value );
    });
    console.log('-------------------------------');
}, false);

// d3.min() - вернуть минимальное значение массива // => maxValue
// d3.max() - вернуть максимальное значение массива // => minValue
// d3.extend() - вернуть массив из двух значений - минимального и максимального значений входного массива // => [ minValue, maxValue ]





































