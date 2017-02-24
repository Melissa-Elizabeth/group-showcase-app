var express = require('express');
var router = express.Router();

var peopleArray = [{name:'Chad', bio: '', image:'link image here', likes:0},
                  {name: 'Kris', bio: '', image: 'link image here', likes:0},
                  {name: 'Melissa', bio: '', image: 'link image here', likes:0},
                  {name: 'Chris', bio: '', image: 'link image here', like:0}];

router.get('/', function(req, res){
  res.send(peopleArray);
});

module.exports = router;
