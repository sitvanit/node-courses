// clear the terminal
console.clear();

const server = require('net').createServer();
let counter = 0;
let sockets = {};

// both the server and the socket are eventEmitters

function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

// fire every time a client connects to that server
server.on('connection', socket => {
    socket.id = counter++;

    console.log('client connected');
    socket.write('Please type your name: ');

    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }

        Object.entries(sockets).forEach(([key, currentSocket]) => {
            // to avoid logging the data in the reciever
            if (socket.id == key) return;
            // log the data to the client
            currentSocket.write(`${socket.name} ${timestamp()}: `); // the write method assumed utf8 encoding
            currentSocket.write(data);
        });


    });

    socket.setEncoding('utf8'); // needed for the server

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));

// to run the server:
// 'node net'

// if a client wants to connect to the server:
// 'nc localhost 8000' (nc = netcat)