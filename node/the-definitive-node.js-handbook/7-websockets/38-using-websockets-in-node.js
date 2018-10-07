/** Using WebSockets in Node.js **/

// WebSockets are an alternative to HTTP communication in Web Applications.
// They offer a long lived, bidirectional communication channel between client and server.
// Once established, the channel is kept open, offering a very fast connection with low latency and overhead.
// WebSockets are supported by all modern browsers.

/* How WebSockets differ from HTTP */
// HTTP is a very different protocol, and has a different way of communicating.
// HTTP is a request/response protocol: the server returns some data when the client requests it.
// With WebSockets:
// the server can send a message to the client without the client explicitly requesting something
// the client and the server can talk to each other simultaneously
// very little data overhead needs to be exchanged to send messages. This means a low latency communication.
// WebSockets are great for real-time and long-lived communications.
// HTTP is great for occasional data exchange and interactions initiated by the client.
// HTTP is much simpler to implement, while WebSockets require a bit more overhead.

/* secured websockets */
// Always use the secure, encrypted protocol for WebSockets, wss://.
// ws:// refers to the unsafe WebSockets version (the http:// of WebSockets), and should be avoided for obvious reasons.

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    });
    ws.send('ho!')
});