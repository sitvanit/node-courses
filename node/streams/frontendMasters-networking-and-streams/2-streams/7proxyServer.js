const net = require('net');

// socket is a duplex stream
net.createServer(socket => {
    socket.pipe(net.connect(5000, 'localhost')).pipe(socket);
}).listen(5001);
