//
// Server.js
// ----------------------------------------------


// Application Set Up
// ----------------------------------------------
var express  = require('express');
var app      = express();
var path     = require('path');
var port     = process.env.PORT || 8080;
var morgan       = require('morgan');
var bodyParser   = require('body-parser');


// Express Set Up
// ----------------------------------------------
app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));


// Routes
// ----------------------------------------------
require('./app/routes.js')(app);


// Server
// ----------------------------------------------
app.listen(port);               
console.log('What happens on port ' + port + ', stays on port ' + port + '.');
