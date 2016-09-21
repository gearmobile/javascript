window.addEventListener( 'load', function () {
    let rooms = {};
    let xhr = new XMLHttpRequest();
    xhr.open( 'GET', 'rooms.json', true );
    xhr.responseText = 'text';
    xhr.onload = function () {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            rooms = JSON.parse( xhr.responseText );
            console.log( 'JSON data loaded' );
            if ( rooms['livingRoom']['light']['on'] === true ) {
                console.log( 'Living room light is on' );
            }
        }
    };
    xhr.send();
}, false );
