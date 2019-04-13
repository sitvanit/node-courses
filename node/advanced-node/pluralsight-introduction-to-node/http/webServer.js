const fs = require('fs');
const http = require('http');

// we are passing in a function the will invoked on each request.
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    if (req.url === '/file.txt') {
        // __dirname is the directory name that the current script is running in
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else {
        res.end("hello world");
    }
}).listen(1337);
console.log(process.env.PORT);
console.log(process.env.IP);
console.log('server running!');

// if we'll send from the browser:
// localhost:1337 => hello world
// http://localhost:1337/file.txt => the content of the file.txt