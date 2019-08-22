const dgram = require('dgram');

// server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server Listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

const PORT = 3333;
const HOST = '127.0.0.1';

server.bind(PORT, HOST);


// client

setInterval(() => {
    const client = dgram.createSocket('udp4');
    const message = Buffer.from('I want to break free');

    // the first arg can be a string or a buffer;
    // we can send each time part of the buffer (message, 0, 11)
    client.send(message, PORT, HOST, (err) => {
        if (err) throw err;
        console.log('UDP message sent');
        client.close();
    });
    // 127.0.0.1:63906 - I want to break free (every time with a different port)
}, 1000);
