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
  var dataTweets = tweetBank.list();
  console.log(dataTweets)
  res.render( 'index', { title: 'Twitter.js', tweets:dataTweets} );
});

router.get('/users/:userName', function(req, res) {
  console.log('hello '+ req.params.userName)
  var userName = req.params.userName;
  var list = tweetBank.find( {'userName': userName} );
  console.log(list);
  name=list[0].name || 'not found'
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

router.get('/tweets/:tweetId', function(req, res) {
  console.log('looking for tweetId '+ req.params.tweetId)
  var tweetId = req.params.tweetId;
  var list = tweetBank.find( {'id': parseInt(tweetId)} );
  console.log(list);
  
  res.render( 'index', { title: 'Twitter.js - Post # '+tweetId, tweets: list } );
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


