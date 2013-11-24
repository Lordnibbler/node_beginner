// require the HTTP module
var http = require('http');
var url  = require('url');

// route = function route() from router.js
function start(route, handle) {
  // handle a HTTP request
  function onRequest(request, response) {
    // what URL path browser requested
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    // router.js route() function
    // response = response callback function
    route(handle, pathname, response);
  }

  // start the node HTTP server
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

// make start function a module available to other node.js files
// usage: server.start();
exports.start = start;
