var lnks = document.links;
// console.log(lnks);

var imgs = document.images;
// console.log(imgs);

var frms = document.forms;
// console.log(frms);

lnks[1].style.color = 'firebrick';
lnks[0].style.fontWeight = '700';
lnks[2].style.textDecoration = 'none';
lnks[lnks.length-1].style.textTransform = 'uppercase';

imgs[0].src = 'images/sample.jpg';
imgs[0].style.width = '100px';

var formFirts = frms.primo;

// console.log(formFirts.method);
formFirts.method = 'get';
// console.log(formFirts);

// console.log(formFirts.className);
formFirts.className = 'first';
// console.log(formFirts);

var f;
var f = document.forms.primo;


var inpt = f.elements.name.style.backgroundColor = 'salmon';
console.log(inpt);
