var err1 = new Error ('x is not equal 1');
var err2 = new Error ('x is not equal 2');

try {
  var x = 2;
  if ( x === 0 ) {
    throw new Error ('x is not equal zero');
  }
  if ( x === 1 ) {
    throw err1;
  }
  if ( x === 2 ) {
    throw err2;
  }
  console.log( x * 10 );
} catch (e) {
  console.log(e.name, e.message);
}
console.log('The end');

function moo() {
  alert('Moo!');
}
