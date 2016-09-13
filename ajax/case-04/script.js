window.addEventListener( 'load', function () {
    let btnRequest = document.querySelector( '#request' );
    let responseField = document.querySelector( '#field' );
    btnRequest.addEventListener( 'click', function () {
        let reqObj = new XMLHttpRequest();
        reqObj.open( 'POST', 'response.html', true );
        reqObj.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        reqObj.onreadystatechange = function () {
            if ( reqObj.readyState === 4 && reqObj.status === 200 ) {
                responseField.innerHTML += reqObj.responseText;
            }
        };
        reqObj.send();
    }, false );
}, false );
