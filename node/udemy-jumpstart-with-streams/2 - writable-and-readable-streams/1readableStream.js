const stream = require('stream');

const facebookFeed = () => {
    const readableStream = new stream.Readable({
        objectMode: true // if the stream is going to consists objects.
    });

    // the elements of the array can be strings or objects.
    const updates = [
        { title: 'My Apple Pie' },
        { title: 'The best chorizo ever' }
    ];

    // _read function is going to emit event calls 'readable'
    readableStream._read = () => {
        if (updates.length) {
            return readableStream.push(updates.shift())
        }

        // when we push null, streams emit event calls 'end'
        readableStream.push(null);
    };

    return readableStream;
};

module.exports = facebookFeed;
