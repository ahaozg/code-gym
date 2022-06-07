'use strict'

var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./../../cert/ssl.key'),
    cert: fs.readFileSync('./../../cert/ssl.crt')
};

var app = https.createServer(options, function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!!!!!!!!');
}).listen(443, '0.0.0.0');
