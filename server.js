// Here I am using strict mode to support es6 features
"use strict";

// Load required dependency modules
let express = require('express') // This will return express function instance
		,path = require('path');

let app = express(); // This will return express app instance

let port = process.argv[2] || 1234;

// This is middleware used to server static file
//app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

// This will return a route with GET http method
app.get('/', function (req, res) {
	res.send('Hello World/n')
});

//
app.listen(port);

console.log("Node Server is listening on " + port);
