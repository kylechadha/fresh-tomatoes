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
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');


// Configuration
// ----------------------------------------------
var configDB = require('./config/database');
// mongoose.connect(db.url); 
// require('./config/passport')(passport);  // pass passport for configuration


// Express Set Up
// ----------------------------------------------
app.use(morgan('dev'));         // log every request to the console
app.use(cookieParser());        // read cookies (needed for auth)
app.use(bodyParser());          // get information from html forms
app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/public/views');
// app.use(express.static('public'));


// Authentication
// ----------------------------------------------
app.use(session({ secret: 'tusmadressonenmispantalones' }));     // session secret -- guessing we should hide this at some point?
app.use(passport.initialize());                                  // initialize passport
app.use(passport.session());                                     // persistent login sessions
app.use(flash());                                                // use connect-flash for flash messages stored in session


// Routes
// ----------------------------------------------
require('./app/routes.js')(app, passport);  // load our routes and pass in our app and fully configured passport


// Server
// ----------------------------------------------
app.listen(port);               
console.log('What happens on port ' + port + ', stays on port ' + port + '.');


// Exports
// ----------------------------------------------
exports = module.exports = app;
