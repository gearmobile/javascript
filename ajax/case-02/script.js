window.addEventListener( 'load', function () {
    let btnRequest = document.querySelector( '#request' );
    let responseField = document.querySelector( '#field' );
    btnRequest.addEventListener( 'click', function () {
        let request = new XMLHttpRequest();
        request.open( 'GET', 'response.html', false );
        request.send();
        responseField.innerHTML += request.responseText;
    }, false );
}, false );
