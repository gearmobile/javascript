var body = document.body;
var block = document.querySelector('.block');

// // var blockStyles = getComputedStyle(block);

// console.log(blockStyles.width);
// console.log(blockStyles.height);
// console.log(blockStyles.borderWidth);

// var calculate = document.querySelector('.calculator');

// var list = document.createElement('ul');
// list.className = 'list-properties';


// calculate.addEventListener('click', function () {

// 	var listWidth = document.createElement('li');
// 	var blockWidth = blockStyles.width;
// 	listWidth = innerHTML('Width of block is');
// 	list.insertBefore(listWidth, list.firstChild);

// });



var button = document.createElement('a');
button.className = 'button';
button.innerHTML = 'press me!';
button.href = '/';

var s = button.style;

s.color = '#f00';
s.fontSize = '12px';
s.fontWeight = '700';
s.textAlign = 'center';
s.textDecoration = 'none';
s.textTransform = 'uppercase';
s.width = '100px';
s.height = '30px';
s.lineHeight = '30px';
s.display = 'block';
s.borderWidth = '2px';
s.borderStyle = 'groove';
s.borderColor = '#0f0';
s.borderRadius = '8px';
s.cursor = 'pointer';

body.insertBefore(button, body.firstChild);
