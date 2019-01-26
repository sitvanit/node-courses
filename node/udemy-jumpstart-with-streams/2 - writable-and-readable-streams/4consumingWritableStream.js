const writable = require('./3writableStream');

const written = writable.write('Hey there');
writable.write('Hey there');
writable.write('Hey there');
writable.write('Hey there');
writable.write('Hey there');

console.log(written); // The write function returns a boolean that says if we can proceed of sending more data
