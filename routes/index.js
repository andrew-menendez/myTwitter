var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank.js');

router.use(express.static('public'));
//should define your own section here...

/*
router.get("/stylesheets/style.css", function (req, res) {
  res.sendFile('/Users/andrew_menendez/fullstack/workshops/twitter-js/public/stylesheets/style.css')
  
});
this one is self defined as opposed to the express static method.
*/ 

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log('fuck this')
  console.log(tweets)
  res.render( 'index', { title: 'Twitter.js', people:tweets} );
});


router.get('/special', function (req, res) {
  res.send('Hello Special!');
  console.log('Time:', Date.now());
  console.log('reached special');

});

router.get('/news', function (req, res) {
  res.send('The news is bad. It\'s always. Something something Trump something else');
});

module.exports = router;


