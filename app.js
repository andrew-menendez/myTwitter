
var express = require( 'express' );
var swig = require( 'swig' );

var app = express(); // creates an instance of an express application

//var mySwig= new swig;




// a middleware function with no mount path. This code is executed for every request to the router
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  console.log('method:'+ req.method);
  console.log('URL', req.url);
  //console.log('reqest', req.headers);
  next();
});

app.use('/special',function (req, res, next) {
  console.log('Time:', Date.now());
  console.log('method:'+ req.method);
  console.log('URL', req.url);
  //console.log('reqest', req.headers);
  next();
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.get('/special', function (req, res) {
  res.send('Hello Special!');
  console.log('Time:', Date.now());
  console.log('reached special');

});

app.get('/news', function (req, res) {
  res.send('The news is bad. It\'s always. Something something Trump something else');
});

app.listen(3000, function () {
  console.log('Server Listening');
});

/// Swig section:
swig.setDefaults({ cache: false });
// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');


app.get('/', function (req, res) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
  	//res.render('index', {'title':'an example','people':[{'name':'guy'},{'name':'dude'},{'name':'man'}]});
});
// the things in the {} of the render function are the local variables to this template.







