
var express = require( 'express' );
var swig = require( 'swig' );

var app = express(); // creates an instance of an express application

//new routes from the routes module
var routes = require('./routes/');
app.use('/', routes);
//var mySwig= new swig;










app.listen(3000, function () {
  console.log('Server Listening');
});

/// Swig section:
swig.setDefaults({ cache: false });
// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');


// the things in the {} of the render function are the local variables to this template.







