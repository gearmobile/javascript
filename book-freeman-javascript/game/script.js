window.addEventListener( 'load', function () {

    let output = document.querySelector( '#boardMessage' );
    let cells = document.getElementsByTagName( 'td' );
    let input = document.querySelector( '#input' );
    let fire = document.querySelector( '#fire' );
    let coords = null;

    let view = {
        displayMessage: function ( param ) {
            output.innerHTML = param;
        },
        displayHits: function ( param ) {
            for ( let i = 0; i < cells.length; i++ ) {
                if ( param === cells[i].getAttribute( 'id' ).toLowerCase() ) {
                    cells[i].classList.add( 'hit' );
                }
            }
        },
        displayMiss: function ( param ) {
            for ( let i = 0; i < cells.length; i++ ) {
                if ( param === cells[i].getAttribute( 'id' ).toLowerCase() ) {
                    cells[i].classList.add( 'miss' );
                }
            }
        }
    };

    view.displayMessage( 'hit' );
    // view.displayHits( coords );
    // view.displayMiss( coords );

    function getLocation() {
        fire.addEventListener( 'click', function () {
            let location = input.value.split('');
            if ( location[0].toUpperCase() === 'A' ) {
                location[0] = '0';
            } else if ( location[0].toUpperCase() === 'B' ) {
                location[0] = '1';
            } else if ( location[0].toUpperCase() === 'C' ) {
                location[0] = '2';
            } else if ( location[0].toUpperCase() === 'D' ) {
                location[0] = '3';
            } else if ( location[0].toUpperCase() === 'E' ) {
                location[0] = '4';
            } else if ( location[0].toUpperCase() === 'F' ) {
                location[0] = '5';
            } else {
                return false;
            }
            return location.join('');
        }, false );
    }


}, false );



