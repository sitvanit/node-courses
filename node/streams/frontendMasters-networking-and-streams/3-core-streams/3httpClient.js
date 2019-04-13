/** client **/
// req: writable
// res: readable
// const req = http.request(opts, function (res) {});

const http = require('http');

const reqPost = http.request({ method: 'POST', host: 'localhost', port: 5000, url: '/'}, (res) => {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});
reqPost.end('HELLO!\n');

const reqGet = http.request({ method: 'GET', host: 'localhost', port: 5000, url: '/'}, (res) => {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});
reqGet.end();
