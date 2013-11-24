// require the HTTP module
var http = require('http');
var url  = require('url');

// route = function route() from router.js
function start(route, handle) {
  // handle a HTTP request
  function onRequest(request, response) {
    var postData = '';

    // what URL path browser requested
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    // expect UTF-8 encoding on received/POST data
    request.setEncoding('utf8');

    // event listener for POST 'data' event
    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'");
    });

    // event listener for POST 'end' event
    request.addListener('end', function() {
      // router.js route() function
      // response = response callback function
      route(handle, pathname, response, postData);
    });

  }

  // start the node HTTP server
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

// make start function a module available to other node.js files
// usage: server.start();
exports.start = start;
