var http = require('http');
var server = http.createServer().listen(8080);

// EVENT REQUEST
// -----------------------------------------
server.on( 'request', function ( response, request ) {
    console.log( 'Request method: ' + request.method, 'Request URL: ' + request.url );
    console.log( 'Response Status: ' + response.statusCode );
});

// EVENT REQUEST
// ----------------------------------------
server.on( 'request', function ( request, response ) {
    response.writeHead(200);
    response.write('Hello from Node.js!');
    response.end();
});

// EVENT LISTENING
// -----------------------------------------
server.on( 'listening', function () {
    console.log('Listen on port 8080 ...');
});

// EVENT CONNECTION
// -----------------------------------------
server.on( 'connection', function () {
    console.log('Connect to server nodejs');
});


server.on( 'close', function () {
    console.log('Server closed!');
});