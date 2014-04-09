'use strict';

var express = require('express')
  , stylus = require('stylus')
  , http = require('http');

var app = express();

app.use(stylus.middleware({
  src: 'public',
  compile: function(str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .set('include css', true);
  }
}));

app.use(express.static('public'));

http.createServer(app).listen(3000);