/** buffer **/
// for binary streams of data.
// buffer is a chunk of memory allocated outside of the v8.
// that data can be interpreted in many ways (depends on the decoding).
// a buffer is a low level data structure to represent the sequence of binary data, and once it allocated it cannot be resized.

// > Buffer.alloc(8) => <Buffer 00 00 00 00 00 00 00 00>
// > Buffer.allocUnsafe(8) => <Buffer 00 00 00 00 00 00 00 02>
// > Buffer.alloc(8).toString() => '\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000'

const string = 'touche';
const buffer = Buffer.from('touche');

console.log(string, string.length); // touche 6
console.log(buffer, buffer.length); // <Buffer 74 6f 75 63 68 65> 6

// buffers are useful to read images or any other binary files.


const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString: ' + buffer.toString());
        console.log('With StringDecoder: ' + decoder.write(buffer));
    }
});