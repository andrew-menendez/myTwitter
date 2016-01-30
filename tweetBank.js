var _ = require('lodash');

var data=[];
var idArray=[0];

function add (name, text) {
  
  arrLength=idArray.length;
  lastId=idArray[arrLength-1];
  uniqueId=lastId+1;

  userName=name.split(" ")[0]+name.split(" ")[1]
  userName=userName.toLowerCase();

  data.push({ userName:userName, name: name, text: text, id:uniqueId });
  idArray.push(uniqueId);
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };










/// could use chance.js instead!

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (var i = 0; i < 5; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

console.log(data);

console.log(idArray);

console.log(module.exports.list());


//console.log(module.exports.find({'name':'Nimit'}));
//console.log(module.exports.find({'name':'Dave'}));






