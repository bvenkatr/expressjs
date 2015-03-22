var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.end("This is my first program using express for this repository, I get these examples from nodeschool expressworks");
});
app.listen(process.argv[2]);
console.log("Node Server is listening on " + process.argv[2]);
