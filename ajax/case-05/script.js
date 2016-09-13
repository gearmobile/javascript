window.addEventListener( 'load', function () {
    let btnRequest = document.querySelector( '#request' );
    let responseField = document.querySelector( '#field' );
    let loader = document.querySelector( '#loader' );
    function showLoader() {
        loader.classList.remove( 'is-hide' );
        loader.classList.add( 'is-show' );
    }
    function hideLoader() {
        loader.classList.remove( 'is-show' );
        loader.classList.add( 'is-hide' );
    }
    hideLoader();
    btnRequest.addEventListener( 'click', function () {
        let reqObj = new XMLHttpRequest();
        reqObj.open( 'POST', 'response.html', true );
        reqObj.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        reqObj.onreadystatechange = function () {
            if ( reqObj.readyState === 4 && reqObj.status === 200 ) {
                hideLoader();
                responseField.innerHTML += reqObj.responseText;
            }
        };
        reqObj.send();
        showLoader();
    }, false );
}, false );
