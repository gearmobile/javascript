
// СОЗДАНИЕ И ЗАПУСК СЕРВЕРА
// ------------------------------------------------------
var http = require('http');
var fs = require('fs');



http.createServer( function ( request, respone ) {
    respone.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    });
    respone.write('Hello from Node.js');
    fs.readFile( 'index.html', function ( err, content ) {
        respone.write( decodeURIComponent( content ) );
        respone.end();
    });
}).listen(8080);