var express = require('express');
var app = express();
var frontEnd = require('./app.js');

app
  .use(frontEnd)
  .use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Serving running');
});
