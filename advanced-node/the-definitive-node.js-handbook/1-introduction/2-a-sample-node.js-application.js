const http = require('http');

const hostname = '127.0.0.1'; // equivalent to localhost;
const port = 3000;

// The createServer() method of http creates a new HTTP server and returns it.
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n'); // Will be write in the website.
});

// The server is set to listen on the specified port and hostname. When the server is ready, the callback function is called.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Whenever a new request is received, the request event is called, providing two objects:
// 1) request (an http.IncomingMessageobject) - provides the request details.
// 2) response (an http.ServerResponseobject) -  is used to return data to the caller.