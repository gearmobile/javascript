window.addEventListener( 'DOMContentLoaded', function () {

    var list = document.querySelector('.easing');
    var item = null;

    TweenLite.to( list.children[0], 3, {
        x: 200,
        ease: Power1.easeInOut,
        onStart: funcStart,
        onUpdate: funcProgress,
        onComplete: funcStop
    });

    function funcStart () {
        console.log('Animation started!');
    }

    function funcProgress () {
        console.log('Animation in progress');
        item += 10;
        list.children[0].innerText = item;
    }

    function funcStop () {
        console.log('Animation completed!');
    }

}, false);