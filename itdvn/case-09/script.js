window.addEventListener( 'DOMContentLoaded', function () {
    let button = document.getElementById('change');
    let image = document.getElementById('image');
    let flag; // => undefined
    button.style.cursor = 'pointer';
    button.addEventListener( 'click', function () {
        if ( flag ) { // => from initial false because undefined
            image.src = 'images/heart.png';
        } else {
            image.src = 'images/heart-o.png';
        }
        flag = !flag; // => change from false to true
    }, false );
}, false);
