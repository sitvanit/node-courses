// js has difficulty dealing with binary data. however, networking and the file system require it.
// the Buffer class provides a raw memory allocation for dealing with binary data directly.
// Buffers can be converted to/from strings by providing an encoding.

const hello = new Buffer('hello');
console.log(hello); // <Buffer 68 65 6c 6c 6f>
console.log(hello.toString()); // hello
console.log(`hello inside quotes ${hello}`); // hello  
console.log('hello outside quotes ' + hello); // hello
console.log(hello.toString('base64')); // aGVsbG8=

const world = new Buffer('world').toString('base64');

console.log(hello.toString('utf-8', 0, 2));


