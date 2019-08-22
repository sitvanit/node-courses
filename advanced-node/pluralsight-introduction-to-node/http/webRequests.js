const http = require('http');

// the options can be a URL string or an object specifying values for host, port, method, path, headers, auth, etc.
const options1 = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};
const options2 = 'http://www.google.com/';

console.log("going to make request...");

// the return value is instance of http.ClientRequest, a writable strem.
const req = http.request(options1, function(res) {
    // callback that will be called when the response will be ready.
    // the client res is a readable stream.
    // in that case the err is not the first parameter of the calllback
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

req.end();

// if we know we are going to send a get request we can optimize it by:
// http.get(options, callback)
// when we are using get, the request doesn't have to be close with req.end(), because in the get scenario we are not
// going to upload a data.