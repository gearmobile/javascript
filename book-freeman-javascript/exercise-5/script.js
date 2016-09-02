/**
 * Created by gearmoile on 9/1/16.
 */

window.addEventListener( 'load', function () {

    const scores = [ 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44 ];
    const costs = [ 0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31, 0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.20, 0.25, 0.30, 0.25, 0.24 ];

    // GET VALUE ANG INDEX OF VALUE
    function allValues( param ) {
        for ( let i = 0; i < param.length; i++ ) {
            console.log( 'Index #' + i + ' is equal ' + param[i] );
        }
    }

    // GET TOTAL VALUE OF TESTS
    function totalValueOfTest( param ) {
        return param.length;
    }

    // GET HIGHEST VALUE OF INDEX
    function highestScore( param ) {
        let highestValue = 0;
        for ( let i = 0; i < param.length; i++ ) {
            if ( highestValue < param[i] ) {
                highestValue = param[i];
            }
        }
        return highestValue;
    }

    // GET INDEXES OF HIGHEST VALUE
    function indexOfHighestValue( param ) {
        const value = highestScore( param );
        let arr = [];
        for ( let i = 0; i < param.length; i++ ) {
            if ( param[i] === value ) {
                arr.push( i );
            }
        }
        return arr;
    }

    function foo( param ) {
        const indexes = indexOfHighestValue( param );
        let startItem = indexes[0];
        for ( let i = 0; i < indexes.length; i++ ) {
            if ( indexes[i] < startItem ) {
                startItem = indexes[i];
            }
        }
        return startItem;
    }

    allValues( scores );
    console.log( 'Total value of test is ' + totalValueOfTest( scores ) );
    console.log( 'Highest score value is ' + highestScore( scores ) );
    console.log( 'Indexes of highest values are: ' + indexOfHighestValue( scores ) );
    console.log( 'Result ' + foo( scores ) );

}, false );
