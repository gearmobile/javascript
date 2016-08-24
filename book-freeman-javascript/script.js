window.addEventListener( 'load', function () {


    function $$( selector, context ) {
        context = context || document;
        var elements = context.querySelectorAll( selector );
        return Array.prototype.slice.call( elements );
    }

    function getRandomInt( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    var grid = [];
    var gridLength = 7;
    var shipLength = 3;
    var cell = null;
    var attemptCount = null;

    var attemptValue = $$( '.attempt-value' );
    var attemptAmount = $$( '.attempt-count' );

    function initGrid() {
        for ( var i = 0; i < gridLength; i++ ) {
            grid[i] = false;
        }
    }

    function initShip() {
        var startPoint = getRandomInt( 0, grid.length - shipLength );
        for ( var j = 0; j < shipLength; j++ ) {
            grid[startPoint] = true;
            startPoint++;
        }
    }

    function getValue() {
        cell = prompt( 'Enter number between 0 and 6 ', '1' );
        if ( cell !== null && cell < gridLength ) {
            cell = parseInt( cell );
            return cell;
        } else {
            alert( 'Enter correct value' );
        }
    }

    function check() {

        if ( grid[cell] === false ) {
            attemptCount++;
            alert( 'You are missing! Try again!' );
            getValue();
        } else if ( grid[cell] === true ) {
            grid[cell] = false;
            shipLength--;
            if ( shipLength > 0 ) {
                alert( 'You are target! Left ' + shipLength + ' attempts!' );
                getValue();
            } else {
                alert ( 'You are won! You made ' + attemptCount + ' shots' );
            }
        }
    }

    function init() {
        initGrid();
        initShip();
        getValue();
        check();
    }

    init();

    console.log(grid);
    console.log(cell);

}, false );
