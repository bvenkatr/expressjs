
var http = require('http'),
		fs = require('fs'),
		oppressor = require('oppressor');
var handler = function(request, response){
	var stream = fs.createReadStream(__dirname + '/node_modules/express/lib/response.js');
	stream.pipe(oppressor(request)).pipe(response);
};

http.createServer(handler).listen(7777, function(){
	console.log("Server is listening at port 7777");
});

Issues:-

	1) This code works but it's bulky and buffers up the entire data.txt file into memory for every request before
	writing the result back to clients. If data.txt is very large, your program could start eating a lot of memory
	as it serves lots of users concurrently, particularly for users on slow connections.

	The user experience is poor too because users will need to wait for the whole file to be buffered into memory on your
	server before they can start receiving any contents.

	Use nodejs streams to solve the above problem

Solved:-

	Issues in release .0.01 has been solved

Requirements:-

	1) compress it before sending to the clinet

