const stream = require('stream');

const facebookFeed = () => {
    const readableStream = new stream.Readable();

    // the elements of the array can be strings or objects.
    const updates = [
        'My Apple Pie',
        'The best chorizo ever'
    ];

    // _read function is going to emit event calls 'readable'
    readableStream._read = () => {
        if (updates.length) {
            return readableStream.push(updates.shift() + '\n')
        }

        // when we push null, streams emit event calls 'end'
        readableStream.push(null);
    };

    return readableStream;
};

const feed = facebookFeed();

const writable = new stream.Writable({
    decodeStrings: false
});

writable._write = (chunk, encoding, callback) => {
    console.log('Writing to stream', chunk.toString());
    callback(); // the write of the current chunk finished to process, you can send more data!
};

// feed.on('readable', () => {
//     const data = feed.read();
//     data && process.stdout.write(data);
// });
//
// feed.on('end', () => console.log('No more news!'));

// When we would like to listen to a readable stream it will always be the same.
// That's why their is pipe.
feed.pipe(writable);
