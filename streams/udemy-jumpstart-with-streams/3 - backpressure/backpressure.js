// backpressure - When the receiving end of the transfer has complex operations, or is slower for whatever reason,
// there is a tendency for data from the incoming source to accumulate.
// To solve this problem, there must be a delegation system in place to ensure a smooth flow of data from one source to
// another.
// In Node.js, streams have been the adopted solution.
// There are different functions to transfer data from one process to another.
// In Node.js, there is an internal built-in function called .pipe().
// The pipe function helps to set up the appropriate backpressure closures for the event triggers.
// In any scenario where the data buffer has exceeded the highWaterMark or the write queue is currently busy, .write() will return false.
// When a false value is returned, the backpressure system kicks in. It will pause the incoming Readable stream from
// sending any data and wait until the consumer is ready again. Once the data buffer is emptied, a .drain() event will
// be emitted and resume the incoming data flow.
// So, if backpressure is so important, why have you (probably) not heard of it? Well the answer is simple: Node.js does all of this automatically for you.
// That's so great! But also not so great when we are trying to understand how to implement our own custom streams.
// Note: In most machines, there is a byte size that determines when a buffer is full (which will vary across different machines).
// Node.js allows you to set your own custom highWaterMark, but commonly, the default is set to 16kb

const stream = require('stream');

const writable = new stream.Writable({
    decodeStrings: false, // do not decode the stream before put it in the buffer
    highWaterMark: 100 // The default is 16 bytes
});

writable._write = (chunk, encoding, callback) => {
    console.log('Writing to stream', chunk.toString());
    callback(); // the write of the current chunk finished to process, you can send more data!
};

// lets try to write data that exceeds the limit of the highWaterMark.
const written = writable.write(
    Buffer.alloc(101, 'Hey!!!!!')
);

console.log(`\n${written}`);
// false - because the internal buffer memory exceeds the amount of data limit.
// it doesn't mean that the rest of the data is going to be lost, it means that the memory usage can go high.


const handleBackPressure = () => {
    const written = writable.write(
        Buffer.alloc(101, 'Hey!!!!!')
    );

    if (!written) {
        console.log('We have a backpressure!');
        writable.once('drain', handleBackPressure); // The function will be invoked only once
    }
};

handleBackPressure();

// pipe handles the backpressure, if its false it will wait until the drain event will be emitted.
