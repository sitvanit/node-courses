const request = require('../http/request');

// request returns a readable stream
const stream = request('http://www.pluralsight.com/');

// stream extends eventEmitter, so we can 'on' them
stream.on('data', (chunk) => {
    console.log("\n>>>Data>>>" + chunk);
});

stream.on('end', () => {
    console.log("!!!Done!!!");
});
