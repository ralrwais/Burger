var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));

var PORT = 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});