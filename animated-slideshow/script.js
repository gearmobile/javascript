window.addEventListener('DOMContentLoaded', function () {
    var slideItems = ['word1','word2','word3','word4','word5','word6'];
    for ( var i = 0; i < slideItems.length; i++ ) {
        setTimeout( function () {
            slideItems[i].classList.add('show');
        }, 1000 );
    }
}, false);