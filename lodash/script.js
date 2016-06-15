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
    }, 2000, 'Hello World' );


    // _.once
    // -----------------------------------------
    // https://lodash.com/docs#once
    function iAmOnce() {
        alert('Hello!');
    }
    var callMeOnce = _.once(iAmOnce);
    document.querySelector('#once').addEventListener('click', callMeOnce, false);


    // _.before - функция будет выполнена менее n-раз
    // -----------------------------------------
    // https://lodash.com/docs#before
    var sayHello = function () {
        console.log('Hello');
    };
    document.querySelector('#before').addEventListener('click', _.before(10, sayHello), false);

    // _.after - функция будет выполнена n-раз или более
    // -----------------------------------------
    // https://lodash.com/docs#after
    var sayAfter = function () {
        console.log('After');
    };
    document.querySelector('#after').addEventListener('click', _.after(5, sayAfter), false);



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

    // _.debounce
    // -----------------------------------------
    // https://lodash.com/docs#debounce
    var callMe = function () {
        alert('Call me after 2 second!')
    };
    $(window).on( 'resize', _.debounce( callMe, 2000 ) );


});