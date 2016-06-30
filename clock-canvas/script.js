window.addEventListener( 'DOMContentLoaded', function () {

    var clock = document.querySelector('#clock').getContext('2d');
    clock.canvas.width = 500;
    clock.canvas.height = 500;
    clock.strokeStyle = '#28d1fa';
    clock.lineWidth = 16;
    clock.lineCap = 'round';
    clock.shadowBlur = 14;
    clock.shadowColor = '#28d1fa';

    function degreeToRadian (degree) {
        return degree * Math.PI / 180;
    }

    function renderTime () {

        var now = new Date(); // create date

        // toDateString(Date) - get human readable format date
        // toLocaleString(Date) - get human readable local date
        // toLocaleTimeString(Date) - get human readable local hours

        var today = now.toDateString();
        var time = now.toLocaleTimeString();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var miliSeconds = now.getMilliseconds();
        var newSeconds = seconds + ( miliSeconds / 1000 );

        // BACKGROUND
        var gradient = clock.createRadialGradient( 250, 250, 5, 250, 250, 300 );
        gradient.addColorStop( 0, '#09303a' );
        gradient.addColorStop( 1, '#000' );
        clock.fillStyle = gradient;
        clock.fillRect( 0, 0, 500, 500 );

        // HOURS
        clock.beginPath();
        clock.arc( 250, 250, 200, degreeToRadian(270), degreeToRadian( hours * 15 - 90 ) );
        clock.stroke();

        // MINUTES
        clock.beginPath();
        clock.arc( 250, 250, 180, degreeToRadian(270), degreeToRadian( minutes * 6 - 90 ) );
        clock.stroke();

        // SECONDS
        clock.beginPath();
        clock.arc( 250, 250, 160, degreeToRadian(270), degreeToRadian( newSeconds * 6 - 90 ) );
        clock.stroke();

        // DATE
        clock.font = '700 24px Arial, sans-serif';
        clock.fillStyle = '#28d1fa';
        clock.fillText(today, 175, 250);

        // TIME
        clock.font = '14px Arial, sans-serif';
        clock.fillText(time, 185, 270);

        document.querySelector('#image').src = clock.canvas.toDataURL();

    }

    setInterval( renderTime, 40 );

}, false);