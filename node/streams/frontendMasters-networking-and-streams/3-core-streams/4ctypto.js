const { createHash } = require('crypto');

process.stdin.pipe(createHash('sha512', { encoding: 'hex' }))
    .pipe(process.stdout);

// without the encoding the ooutput is a binary output.
// to exit the program ctrl+d

// 'echo abcd | node 4ctypto.js' should return the same value as 'echo abcd | shasum -a 512'
