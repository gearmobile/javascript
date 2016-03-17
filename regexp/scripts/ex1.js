var string = 'gearmobile@gmail.com';
var string2 = 'umma-gumma';
var string3 = 'gearmobile@gmail.ru';
var string4 = 'abc';

var reg1 = /@/;
var reg2 = /@gmail|@yandex/;
var reg3 = /.ru/i;

var reg5 = /ab?c/;

var data = /^\d?\d-\d?\d-\d{4}$/;

var date = '2-3-2019';

// console.log(reg4.test(string3));
// console.log(reg5.test(string4));
console.log(data.test(date));
