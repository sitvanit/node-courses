const http = require('http');

// req: http.ClientRequest
// http.request is a writable stream
const req = http.request(
    { hostname: 'www.google.com'},
    (res) => {
        // res: http.IncomingMessage
        console.log(res.statusCode);
        
        res.on('data', (data) => {
            console.log(data.toString());
        })
    }
);

req.on('error', (err) => console.log(err));

req.end();

// if we are not going to write any information to the header of request or not posting or deleting data -
// we should use get instead of request.

// http.Agent
console.log(req.agent);