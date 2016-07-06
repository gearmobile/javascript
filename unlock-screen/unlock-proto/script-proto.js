window.addEventListener( 'DOMContentLoaded', function () {

    function ScreenUnlock ( deviation, corners ) {

        // ARRAYS
        var arr = [];

        if ( corners.split('').length !== 4 ) {
            alert('Введите номера четырех углов');
        } else {
            var arrTest = corners.split('');
            console.log(arrTest); // must be removed
        }

        // CORNER 1
        var x1 = screenX;
        var y1 = screenY;
        var x1d = x1 + deviation;
        var y1d = y1 + deviation;

        // CORNER 2
        var x2 = screen.availWidth;
        var y2 = screenY;
        var x2d = x2 - deviation;
        var y2d = y2 + deviation;

        // CORNER 3
        var x3 = screen.availWidth;
        var y3 = screen.availHeight;
        var x3d = x3 - deviation;
        var y3d = y3 - deviation;

        // CORNER 4
        var x4 = screenX;
        var y4 = screen.availHeight;
        var x4d = x4 + deviation;
        var y4d = y4 - deviation;

        this.touchDetect = function ( event ) {

            event.preventDefault();

            var x = Math.floor( event.touches[0].pageX );
            var y = Math.floor( event.touches[0].pageY );

            if ( x1 < x && x < x1d && y1 < y && y < y1d ) {
                arr.push( 4 );
            } else if ( x < x2 && x > x2d && y > y2 && y < y2d ) {
                arr.push( 1 );
            } else if ( x < x3 && x > x3d && y < y3 && y > y3d ) {
                arr.push( 2 );
            } else if ( x > x4 && x < x4d && y < y4 && y > y4d ) {
                arr.push( 3 );
            } else {
                arr = [];
            }

            console.log(arr); // must be removed

            if ( arr.length === arrTest.length ) {
                if ( arr.join(',') === arrTest.join(',') ) {
                    alert('Hello');
                    arr = [];
                    console.log(arr); // must be removed
                } else {
                    arr = [];
                    console.log(arr); // must be removed
                }
            }

        }
    }

    var mobile = new ScreenUnlock( 50, '2341' );
    document.querySelector('body').addEventListener( 'touchstart', mobile.touchDetect, false );


}, false);