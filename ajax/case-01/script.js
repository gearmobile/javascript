window.addEventListener( 'load', function () {
    //
    function ajaxGet( url, callback ) {
        let request = new XMLHttpRequest();
        //
        request.onreadystatechange = function () {
            if ( request.readyState === 4 && request.status === 200 ) {
                callback( request.responseText );
            }
        };
        request.open( 'GET', url );
        request.send();
    }
    //
    document.querySelector( '#show-ip' ).addEventListener( 'click', function () {
        ajaxGet( 'ip.php', function ( data ) {
            document.querySelector( '#show-block' ).innerHTML = data;
        } );
    }, false );
    //
}, false );




// request.readyState = 1 // => open
// request.readyState = 2 // => send
// request.readyState = 3 // => get response partially
// request.readyState = 4 // => get full response
