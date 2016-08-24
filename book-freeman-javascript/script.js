window.addEventListener( 'DOMContentLoaded', function () {

    function getRandomInt( min, max ) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    var grid = Array(7);
    var shipLength = 3;
    var cell;
    var count;

    function init() {
        var rnd = getRandomInt( 0, grid.length - shipLength );
        for ( var i = 0; i < shipLength; i++ ) {
            grid[rnd] = 1;
            rnd++;
        }
    }

    function getValue() {
        cell = prompt( 'Please enter number between 0 and 6', '1' );
        cell = parseInt( cell );
        if ( cell !== null && cell <= 6 ) {
            return cell;
        } else {
            alert( 'Please enter correct number' );
        }
    }

    function check(cell) {
        //
    }

    init();
    // getValue();

    console.log(grid);

}, false );
