'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var serveIndex = require('serve-index');

var app = express();

app.use(serveIndex('./public'));
app.use(express.static('./public'));

var http_server = http.createServer(app).listen(80, '0.0.0.0');

var options = {
    key: fs.readFileSync('./../../cert/ssl.key'),
    cert: fs.readFileSync('./../../cert/ssl.crt')
};

var https_server = https.createServer(options, app).listen(443, '0.0.0.0');