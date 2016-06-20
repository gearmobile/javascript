window.addEventListener('DOMContentLoaded', function () {

    var name = 'Joe';
    var i = 0;
    while ( i < 2 ) {
        document.write('Happy birthday to you!<br>');
        ++i;
    }
    document.write('Happy birthday dear ' + name + '<br>');
    document.write('Happy birthday to you!');

}, false);