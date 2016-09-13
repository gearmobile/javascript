window.addEventListener( 'load', function () {
    let btnRequest = document.querySelector( '#request' );
    let responseField = document.querySelector( '#field' );
    btnRequest.addEventListener( 'click', function () {
        let reqObj = new XMLHttpRequest();
        reqObj.open( 'GET', 'response.html', true );
        reqObj.onreadystatechange = function () {
            if ( reqObj.readyState === 4 && reqObj.status === 200 ) {
                responseField.innerHTML += reqObj.responseText;
            }
        };
        reqObj.send();
    }, false );
}, false );
