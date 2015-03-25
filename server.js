var express        = require('express');
var app            = express();
var morgan         = require('morgan');

app.use(express.static(__dirname + '/public'));       	// set the static files location
app.use(morgan('dev'));                               	// log every request to the console

var port = process.env.PORT || 3000;

app.get('*/js/bundle.js', function (req, res) {
	res.sendFile(__dirname + '/public/js/bundle.js');
});

app.get('*/js/vendors.js', function (req, res) {
	res.sendFile(__dirname + '/public/js/vendors.js');
});

app.get('*/css/main.css', function (req, res) {
	res.sendFile(__dirname + '/public/css/main.css');
});


app.get('/*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port); // http://localhost:3000/

console.log('Express server listening on port ' + port);