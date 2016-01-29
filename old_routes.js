
// old routes

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