const concat = require('concat-stream');
const http = require('http');
const qs = require('querystring');
const through = require('through2');

process.stdin.pipe(concat(body => console.log(body.length)));

// req is readable stream, res is writable stream
const server = http.createServer((req, res) => {
    req
        .pipe(counter())
        .pipe(concat({ encoding: 'string' }, onBody));

    function counter () {
        let size = 0;
        return through((buffer, encoding, next) => {
            size += buffer.length;
            if (size > 20) res.end('ETOOBIG\n');
            else next(null, buffer)
        })
    }

    function onBody (body) {
        const params = qs.parse(body);
        console.log(params);
        res.end('ok\n');
    }
});

server.listen(5000);

// curl -d msg=hello localhost:5000
