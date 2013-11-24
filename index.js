var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
  "/"      : requestHandlers.start,
  "/start" : requestHandlers.start,
  "/upload": requestHandlers.upload,
  "/show"  : requestHandlers.show
};

// start our HTTP node server from server.js
// pass the router.route function itself to .start()
server.start(router.route, handle);
