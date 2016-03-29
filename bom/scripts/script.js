var timeOut;
var interval;

function helloTimeout() {
  alert('Hello from setTimeout function after 2 seconds!');
}

function helloInterval() {
  alert('Hello from setInterval function with interval 3 seconds!');
}

function f() {
  console.log('hello from href');
}

function locationReload() {
  location.reload(true); // true - Ctrl+R, without browser cache
}

function locationReplace() {
  location.replace('http://ya.ru'); // replace current page by another page
}

function locationAssign() {
  location.assign('http://google.com'); // go to page, window.history is works
}

function alertMethod() {
  alert('Hello from Alert method!');
}

function confirmMethod() {
  const x = confirm('Hello from Confirm method! Are you sure to quit?');
  console.log(x);
}

function promptMethod() {
  const x = prompt('Hello from Prompt method! Enter your answer here', '');
  console.log(x);
}

function demoSetTimeout() {
  timeOut = setTimeout("helloTimeout()", 2000);
}

function demoClearSetTimeOut() {
  window.clearTimeout(timeOut);
}

function demoSetInterval() {
  interval = setInterval("helloInterval()", 3000);
}

function demoClearSetInterval() {
  window.clearInterval(interval);
}

function openWindow() {
  window.open();
}