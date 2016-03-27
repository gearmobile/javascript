var interval = '';
var timer = '';

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
  timer = window.setTimeout("alert('after 2 seconds')", 2000);
  console.log(typeof timer);
}

function demoClearSetTimeout() {
  window.clearTimeout(timer);
}

function demoSetInterval() {
  interval = window.setInterval("alert('after 3 seconds')", 3000);
  console.log(interval);
}

function demoClearSetInterval() {
  window.clearInterval(interval);
}