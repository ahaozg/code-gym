'use strict'

var http = require('http');

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello World!!!');
}).listen(8080, '0.0.0.0');

