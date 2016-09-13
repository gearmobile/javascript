window.addEventListener( 'load', function () {

    let output = document.querySelector( '#boardMessage' );
    let cells = document.getElementsByTagName( 'td' );
    let input = document.querySelector( '#input' );
    let fire = document.querySelector( '#fire' );

    // view
    let view = {
        displayMessage: function ( param ) {
            output.innerHTML = param;
        },
        displayHits: function ( param ) {
            document.getElementById( param ).setAttribute( 'class', 'hit' );
        },
        displayMiss: function ( param ) {
            document.getElementById( param ).setAttribute( 'class', 'miss' );
        }
    };

    // model
    let model = {
        boardSize: 7,
        numShips: 3,
        shipLength: 3,
        shipsSunk: 0,
        ships: [
            { locations: [ '05', '15', '25' ], hits: [ '', '', '' ] },
            { locations: [ '24', '34', '44' ], hits: [ '', '', '' ] },
            { locations: [ '10', '11', '12' ], hits: [ '', '', '' ] }
        ],
        fire: function ( coords ) {
            for ( let i = 0; i < this.numShips; i++ ) {
                let ship = this.ships[i];
                let index = ship.locations.indexOf( coords );
                if ( index >= 0 ) {
                    ship.hits[ index ] = 'hit';
                    return true;
                }
            }
            return false;
        }
    };


}, false );



