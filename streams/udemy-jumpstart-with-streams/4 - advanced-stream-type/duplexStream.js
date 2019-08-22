// duplex stream is a both readable and writable stream.
// the tcp in net is a duplex stream.

const net = require('net');

// create tcp server
net.createServer(socket => {
    // socket is an instance of a duplex stream
    socket.write('Hello');
    socket.on('readable', function () {
        process.stdout.write(this.read())
    })
}).listen(8080);
