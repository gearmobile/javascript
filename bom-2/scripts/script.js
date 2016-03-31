var newWindow;
var blurWindow;
var positionWindow;

function demoOpen() {
  window.open();
}

function demoOpenUrl() {
  window.open('http://ya.ru');
}

function demoOpenUrlName() {
  window.open('http://ya.ru', 'yandex');
}

function demoOpenForClose() {
  newWindow = window.open();
}

function demoClose() {
  newWindow.close();
}

function demoOpenWidthHeight(parameters) {
  blurWindow = window.open('http://ya.ru', 'yandex', parameters)
}

function demoOpenTopLeft(params) {
  positionWindow = window.open('http://www.google.ru/', 'google', params);
}