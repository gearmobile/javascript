var fs = require('fs');
//var content = fs.readFileSync('file.txt').toString();
fs.readFile('file.txt', function ( err, content ) {
    console.log( content.toString() );
});
console.log('end of file');