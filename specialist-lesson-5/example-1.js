window.addEventListener('DOMContentLoaded', function () {

    var paragraphs = document.querySelector('#holder').getElementsByTagName('p');

    document.querySelector('#change').addEventListener('click', function () {
        for ( var i = 0; i < paragraphs.length; i++ ) {
            if ( i % 2 ) {
                paragraphs[i].setAttribute('align','left');
            } else {
                paragraphs[i].setAttribute('align','right');
            }
        }
    }, false);

    document.querySelector('#restore').addEventListener('click', function () {
        for ( var i = 0; i < paragraphs.length; i++ ) {
            if ( i % 2 ) {
                paragraphs[i].setAttribute('align','right');
            } else {
                paragraphs[i].setAttribute('align','left');
            }
        }
    }, false);

    document.querySelector('#another').addEventListener('click', function () {
        for ( var i = 0; i < paragraphs.length; i++ ) {
            if ( paragraphs[i].getAttribute('align') === 'left' ) {
                paragraphs[i].setAttribute('align','right');
            } else {
                paragraphs[i].setAttribute('align','left');
            }
        }
    }, false);

}, false);