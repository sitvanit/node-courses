/** First Stream Implementation **/

const { Readable } = require('stream');

const readableStream = new Readable();

readableStream.push('streams data 1');
readableStream.push('streams data 2\n\n');
// readableStream.push(null); // push null in order to say, that we've done with pushing the data.

// someone should consume the data
readableStream.pipe(process.stdout);

console.log(Object.getPrototypeOf(readableStream)); // Readable

// from node documentation:
// Streams can be readable, writable, or both. All streams are instances of EventEmitter.
// we can see in node.js code examples for that: https://github.com/nodejs/node/blob/master/lib/_stream_readable.js (line 289, 968)
