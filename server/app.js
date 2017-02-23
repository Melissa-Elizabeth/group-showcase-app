console.log("corgis!!!");

var likesCount = 0;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var peopleArray = [{name:'Chad', bio: '', image:'link image here', likesCount: []},
                  {name: 'Kris', bio: '', image: 'link image here', likesCount: []},
                  {name: 'Melissa', bio: '', image: 'link image here', likesCount: []}];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/bios', function(req, res){
    console.log(req);
    res.send(peopleArray);
});

app.get('/likes', function(req, res){
    console.log(req);
    // for (var i = 0; i < peopleArray.length; i++) {
    var newPersonObject = {};
    newPersonObject = peopleArray[0].name: peopleArray[0].likesCount;
    res.send();
});



app.listen(3000);
