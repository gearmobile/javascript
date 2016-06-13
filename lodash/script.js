window.addEventListener('DOMContentLoaded', function () {

    var blocks = document.querySelectorAll('.block');
    _.forEach( blocks, function (el) {
        el.style.backgroundColor = 'rgb(' + _.random(255) + ',' + _.random(255) + ',' + _.random(255) + ')';
    });

    // _.delay
    // -----------------------------------------
    // https://lodash.com/docs#delay
    _.delay(function (text) {
        console.log(text);
    }, 2000, 'hello' );


    // _.once
    // -----------------------------------------
    // https://lodash.com/docs#once
    function iAmOnce() {
        alert('Hello!');
    }
    var callMeOnce = _.once(iAmOnce);
    document.querySelector('.button').addEventListener('click', callMeOnce, false);


}, false);

$(document).ready( function () {

    // _.once
    // -----------------------------------------
    // https://lodash.com/docs#once

    var second = $('#secondo');
    var iterrator = 0;
    var counter = $('#count').text(iterrator);

    var callOnce = _.once( function () {
        ++iterrator;
        counter.text(iterrator);
    });

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > second.offset().top - $(window).height() * 0.85 ) {
            callOnce();
        }
    });
});