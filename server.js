// node packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

// import files
var htmlRoutes = require('./routes/htmlRoutes.js');
var apiRoutes = require('./routes/apiRoutes.js');

// set port
var port = process.env.PORT || 8080;

// setup express
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// set static folder
app.use(express.static(__dirname + "/public"));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// setup connection to database
mongoose.Promise = Promise;
// mongoose.connect('-- get link from heroku --');
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;
db.on('error', function(error) {
	console.log('Mongoose error: ', error);
});
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// setup server to listen
app.listen(port, function() {
	console.log('Server listening on PORT '+port);
});