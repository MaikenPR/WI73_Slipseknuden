// load the things we need
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser'); //Typisk: Form Data - man kan ikke hente data i en formular uden body-parser

var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 5 * 60 * 1000 } // 5 minutter
}));

// set the view engine to ejs
app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('./routes/forside'));
app.use(require('./routes/omos'));
app.use(require('./routes/garanti'));
app.use(require('./routes/produkter'));


app.listen(port);
console.log(`8080 is the magic port http://localhost:${port}/`);
//test