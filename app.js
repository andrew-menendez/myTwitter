
var express = require( 'express' );
var swig = require( 'swig' );
var socketio = require('socket.io');
var app = express(); // creates an instance of an express application

var server = app.listen(3000, function () {
						  console.log('Server Listening on 3000');
						});
var io = socketio.listen(server);

io.on('connection', function(socket){
  console.log('a user connected');
});
//new routes from the routes module
var routes = require('./routes/');
app.use('/', routes(io));// now routes is a function that returns 'route object'
//var mySwig= new swig;






/// Swig section:
swig.setDefaults({ cache: false });
// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './views');


// the things in the {} of the render function are the local variables to this template.










