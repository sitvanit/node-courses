/** server **/
// req: readable - you can pipe from it to someone else
// res: writable - you can write into that stream
// http.createServer(function (req, res) {});

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(process.stdout);
        req.once('end', () => {
            res.end('ok\n');
        });
    } else {
        res.setHeader('content-type', 'text/plain');
        fs.createReadStream('hello.txt').pipe(res);
    }
}).listen(5000);
