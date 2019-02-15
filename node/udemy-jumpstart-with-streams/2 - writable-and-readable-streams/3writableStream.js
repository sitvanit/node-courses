const stream = require('stream');

const writable = new stream.Writable();

writable._write = (chunk, encoding, callback) => {
    console.log('Writing to stream', chunk.toString());
    callback(); // the write of the current chunk finished to process, you can send more data!
};

module.exports = writable;



