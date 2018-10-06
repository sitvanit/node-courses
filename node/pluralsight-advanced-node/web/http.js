// http server inherits from 'net' - so it's an eventEmitter.
const server = require('http').createServer();

// this event happens every time client connect to this http server
server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello World\n');

    // instead of end, we can use res.write, and send like that how many messages that we like.
    // if we wont write end, the default time out for each request is 2 minutes. we can change the default.
});

server.listen(8000);

// we can get there:

// 1. from the browser: localhost:8000
// Hello World

// 2. from the terminal: curl -i localhost:8000 (-i more information)
// HTTP/1.1 200 OK
// content-type: text/plain
// Date: Sat, 12 May 2018 16:44:23 GMT
// Connection: keep-alive (persistent connection, waiting for multiple requests)
// Transfer-Encoding: chunked (means the response has being streamed and can be sending by chunks)
//
// Hello World