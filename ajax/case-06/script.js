window.addEventListener( 'load', function () {
    let rooms = {};
    let xhr = new XMLHttpRequest();
    xhr.open( 'GET', 'rooms.json', true );
    xhr.responseText = 'text';
    xhr.onload = function ( event ) {
        if ( xhr.status === 200 ) {
            rooms = JSON.parse( xhr.responseText );
            console.log( 'JSON data loaded' );
        }
    }
}, false );
