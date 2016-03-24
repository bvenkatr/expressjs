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

The app.listen function takes an optional callback, which is called once the app is ready to start taking requests

 Here .pipe() takes care of listening for 'data' and 'end' events from the fs.createReadStream().
 This code is not only cleaner, but now the data.txt file will be written to clients one chunk at a time immediately
 as they are received from the disk.

 Using .pipe() has other benefits too, like handling backpressure automatically so that node won't buffer chunks into
 memory needlessly when the remote client is on a really slow or high-latency connection.

