const net = require('net');

// socket is a duplex stream
net.createServer(socket => {
     socket.pipe(socket)
}).listen(8000);

// nc localhost 8000
