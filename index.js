var server = require('./server');
var router = require('./router');

// start our HTTP node server from server.js
// pass the router.route function itself to .start()
server.start(router.route);
