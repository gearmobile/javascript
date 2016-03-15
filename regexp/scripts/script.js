var reg1 = new RegExp('abc');
var reg2 = /abc/;
var reg3 = /sum/;

var string = 'lorem ipsum dolor est';
var string2 = 'lorem ipsum dolor est'

\d - any number
\w - any number or character
\s - any space character
\. - any symbol

\D - not any number
\W - not any number or character
\S - not any space character

console.log(reg3.test(string));
console.log(reg2.test(string2));
console.log(/[0123456]/.test('1914'));
console.log(/[3456]/.test('1997'));
console.log(/[0-4]/.test('5678'));
