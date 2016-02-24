// Here I am using strict mode to support es6 features
"use strict";

////////////////////////////////////////////////////
//IL316314es-MacBook-Air:expressjs venkat$ node server.js 3000
///Users/venkat/work/expressjs/server.js:3
//let express = require('express');
//^^^
//
//SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//at exports.runInThisContext (vm.js:53:16)
//at Module._compile (module.js:404:25)
//at Object.Module._extensions..js (module.js:432:10)
//at Module.load (module.js:356:32)
//at Function.Module._load (module.js:313:12)
//at Function.Module.runMain (module.js:457:10)
//at startup (node.js:138:18)
//at node.js:974:3
////////////////////////////////////////////////////////////

let express = require('express');
let path = require('path');
let app = express();

let port = process.argv[2] || 1234;

// This is middleware used to server static file
//app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.send('Hello World/n')
});

//
app.listen(port);

console.log("Node Server is listening on " + port);
