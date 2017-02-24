console.log("corgis!!!");

var initialLikesCount = 0;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bios = require('./routes/bios');
var likes = require('./routes/likes');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/bios', bios);


app.use('/likes', likes);




app.listen(3000);
