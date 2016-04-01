/**
 * Created by zencoder on 4/1/16.
 */

var win;
var name = 'I\'m open this window';

function openDoc() {
  win = window.open();
}

function writeDoc() {
  if( win && !win.closed ) {
    win.focus();
    var text = '<html><head><title>Yandex</title></head><body><a href="http://ya.ru">Yandex Link</a></body></html>';
    var styles = '<style rel="stylesheet">html{background-color:cadetblue;color:#444444;font: 400 16px Arial, sans-serif;}</style>'
    var p = '<p>lorem ipsum dolor est</p>';
    var script = '<script type="text/javascript">alert(opener.name);</script>';
    win.document.open();
    win.document.write(text);
    win.document.write(styles);
    win.document.write(p);
    win.document.write(script);
    win.document.close();
  }
}

function closeDoc() {
  if ( win && !win.closed ) {
    win.focus();
    win.close();
  }
}