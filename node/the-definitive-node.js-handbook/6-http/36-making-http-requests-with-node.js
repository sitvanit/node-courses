const https = require('https');

/** get **/

const getOptions = {
    hostname: 'flaviocopes.com',
    port: 443,
    path: '/todos',
    method: 'GET'
};

const reqGet = https.request(getOptions, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        process.stdout.write(d)
    })
});

reqGet.on('error', (error) => {
    console.error(error)
});

reqGet.end();


/** post **/

const data = JSON.stringify({
    todo: 'Buy the milk'
});

const postOptions = {
    hostname: 'flaviocopes.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const reqPost = https.request(postOptions, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        process.stdout.write(d)
    })
});

reqPost.on('error', (error) => {
    console.error(error)
});

reqPost.write(data);
reqPost.end();


/** PUT and DELETE **/
// PUT and DELETE requests use the same POST request format, and just change the options.method value.

