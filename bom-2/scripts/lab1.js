/**
 * Created by zencoder on 4/1/16.
 */

var win;

function example1() {
  var width = 300;
  var height = 200;
  var params = 'width=' + width + ', height=' + height;
  win = window.open('','',params);
  win.moveTo(screen.availWidth/2 - win.innerWidth/2, screen.availHeight/2 - win.innerHeight/2);
  win.focus();
}