var http = require('http');

var app = http.createServer(function ( request, response ) {
    response.writeHead(200);
    response.write( 'Hello from Node.js Server!' );
    setTimeout( function () {
        response.write('is done!');
        response.end();
    }, 2000 );
}).listen(8080);

console.log('Listening on port 8080 ...');