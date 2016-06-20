http = require('http');

var server = http.createServer().listen(8080);


server.on('request', function ( request, response ) {
    console.log('Request:', request.url, request.method) ;
});

server.on('request', function ( request, response ) {
    response.writeHead(200);
    response.write('Hello');
    response.end('The end');
});
server.on('listening', function () {
    console.log('Listen on port 8080 ...');
});