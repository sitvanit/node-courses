const facebookFeed = require('./1readableStream');

const feed = facebookFeed(); // feed is a readable stream

// stream is going to emit to events - readable and end - lets listen to them

feed.on('readable', () => {
    let data = feed.read();

    if (data) {
        // the default of process.stdout.write is the console
        // process.stdout is a Writable stream and its write() function only accepts strings and buffers. chunk is a Buffer object.
        // (process.stdin - is a Readable stream)
        // process.stdout.write writes the bytes of data directly in your console so they appear as strings.
        console.log(JSON.stringify(data));
    }
});

feed.on('end', () => console.log('No more data!'));
