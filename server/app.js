console.log("corgis!!!");

var initialLikesCount = 0;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var peopleArray = [{name:'Chad', bio: '', image:'link image here', likes:0},
                  {name: 'Kris', bio: '', image: 'link image here', likes:0},
                  {name: 'Melissa', bio: '', image: 'link image here', likes:0}];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/bios', function(req, res){
    console.log(req);
    res.send(peopleArray);
});

app.get('/likes', function(req, res){
    console.log(req);
    // for (var i = 0; i < peopleArray.length; i++) {

    res.send();
});



app.listen(3000);
