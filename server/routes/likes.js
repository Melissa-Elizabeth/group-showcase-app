var express = require('express');
var router = express.Router();
// var value = miniArray[0].likes;
var miniArray = [{name:'Chad', likes:0},
                  {name: 'Kris', likes:0},
                  {name: 'Melissa', likes:0},
                  {name: 'Chris', like:0}];

router.post('/', function(req, res){
  res.send(miniArray);
value++;

});
console.log(miniArray[0].likes);
module.exports = router;
