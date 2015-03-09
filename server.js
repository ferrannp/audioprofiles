var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public'));       	// set the static files location /public/img will be /img for users
app.use(morgan('dev'));                               	// log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));   	// parse application/x-www-form-urlencoded
app.use(bodyParser.json());                            	// parse application/json
app.use(methodOverride());                            	// simulate DELETE and PUT*/

var port = process.env.PORT || 3000;

app.get('/public/js/bundle.js', function (req, res) {
	res.sendFile(__dirname + '/public/js/bundle.js');
});

app.get('/public/js/vendors.js', function (req, res) {
	res.sendFile(__dirname + '/public/js/vendors.js');
});

app.get('/public/js/main.css', function (req, res) {
	res.sendFile(__dirname + '/public/main.css');
});


app.get('/*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port); // http://localhost:3000/

console.log('Express server listening on port ' + port);